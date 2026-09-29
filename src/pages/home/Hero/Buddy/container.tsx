import { useEffect, useRef, useState } from "react";
import {
  animate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import { BuddyView } from "./index";
import type { BuddyMood } from "./index.types";

// Cursor distance (px) at which the gaze reaches its maximum offset.
const TRACK_RADIUS = 400;
const IDLE_AFTER_MS = 4000;
const SURPRISE_MS = 700;

// Pupils lead on a stiff spring, the head lags on a soft one, the antenna wobbles last.
const PUPIL_SPRING = { stiffness: 400, damping: 28 };
const HEAD_SPRING = { stiffness: 150, damping: 18 };
const ANTENNA_SPRING = { stiffness: 120, damping: 6 };

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const BuddyContainer = () => {
  const t = useLocalizedText("home.heroSection.bento");
  const rootRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);
  const surpriseTimeoutRef = useRef<number | undefined>(undefined);
  const reduceMotion = useReducedMotion();
  const [mood, setMood] = useState<BuddyMood>("neutral");
  const [isVisible, setIsVisible] = useState(false);

  // Normalized gaze target, -1..1 on each axis.
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);

  const pupilSpringX = useSpring(targetX, PUPIL_SPRING);
  const pupilSpringY = useSpring(targetY, PUPIL_SPRING);
  const headSpringX = useSpring(targetX, HEAD_SPRING);
  const headSpringY = useSpring(targetY, HEAD_SPRING);

  const headX = useTransform(headSpringX, (v) => v * 6);
  const headY = useTransform(headSpringY, (v) => v * 5);
  const headRotate = useTransform(headSpringX, (v) => v * 8);
  const faceX = useTransform(headSpringX, (v) => v * 8);
  const faceY = useTransform(headSpringY, (v) => v * 6);
  const pupilX = useTransform(pupilSpringX, (v) => v * 5.5);
  const pupilY = useTransform(pupilSpringY, (v) => v * 6);

  const headVelocityX = useVelocity(headSpringX);
  const antennaRotate = useSpring(
    useTransform(headVelocityX, (v) => clamp(-v * 12, -30, 30)),
    ANTENNA_SPRING,
  );

  const headScale = useMotionValue(1);
  const blink = useMotionValue(1);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || !isVisible || reduceMotion) return;

    const timeouts = new Set<number>();
    let isActive = true;
    let lastMoveAt = 0;
    let rect = node.getBoundingClientRect();
    // Phones are narrower than TRACK_RADIUS; scale down so the gaze still reaches its full range.
    let trackRadius = Math.min(TRACK_RADIUS, window.innerWidth / 2);

    const later = (callback: () => void, delay: number) => {
      const id = window.setTimeout(() => {
        timeouts.delete(id);
        if (isActive) callback();
      }, delay);
      timeouts.add(id);
    };

    const updateRect = () => {
      rect = node.getBoundingClientRect();
      trackRadius = Math.min(TRACK_RADIUS, window.innerWidth / 2);
    };

    const lookAt = (clientX: number, clientY: number) => {
      lastMoveAt = performance.now();
      const dx = clientX - (rect.left + rect.width / 2);
      const dy = clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);
      const reach = distance === 0 ? 0 : Math.min(distance / trackRadius, 1) / distance;
      targetX.set(dx * reach);
      targetY.set(dy * reach);
    };

    const handlePointerMove = (event: PointerEvent) => lookAt(event.clientX, event.clientY);

    // Touch browsers stop sending pointermove once a drag becomes a scroll; touch events keep flowing.
    const handleTouch = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      updateRect();
      lookAt(touch.clientX, touch.clientY);
    };

    const blinkOnce = (allowDouble: boolean) => {
      animate(blink, [1, 0.1, 1], { duration: 0.16, ease: "easeInOut" }).then(() => {
        if (allowDouble && Math.random() < 0.2) later(() => blinkOnce(false), 90);
      });
    };

    const scheduleBlink = () =>
      later(() => {
        blinkOnce(true);
        scheduleBlink();
      }, randomBetween(2500, 6000));

    const scheduleLookAround = () =>
      later(() => {
        if (performance.now() - lastMoveAt > IDLE_AFTER_MS) {
          const lookAhead = Math.random() < 0.3;
          targetX.set(lookAhead ? 0 : randomBetween(-0.8, 0.8));
          targetY.set(lookAhead ? 0 : randomBetween(-0.5, 0.5));
        }
        scheduleLookAround();
      }, randomBetween(1500, 3000));

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("scroll", updateRect, { passive: true });
    window.addEventListener("resize", updateRect);
    scheduleBlink();
    scheduleLookAround();

    return () => {
      isActive = false;
      timeouts.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("scroll", updateRect);
      window.removeEventListener("resize", updateRect);
    };
  }, [isVisible, reduceMotion, targetX, targetY, blink]);

  useEffect(() => () => window.clearTimeout(surpriseTimeoutRef.current), []);

  const handlePointerEnter = () => {
    hoveredRef.current = true;
    setMood((current) => (current === "surprised" ? current : "happy"));
  };

  const handlePointerLeave = () => {
    hoveredRef.current = false;
    setMood((current) => (current === "surprised" ? current : "neutral"));
  };

  const handlePointerDown = () => {
    setMood("surprised");
    animate(headScale, 1.1, { duration: 0.08 }).then(() =>
      animate(headScale, 1, { type: "spring", stiffness: 400, damping: 10 }),
    );
    window.clearTimeout(surpriseTimeoutRef.current);
    surpriseTimeoutRef.current = window.setTimeout(
      () => setMood(hoveredRef.current ? "happy" : "neutral"),
      SURPRISE_MS,
    );
  };

  return (
    <BuddyView
      rootRef={rootRef}
      label={t("buddyLabel")}
      mood={mood}
      motion={{
        headX,
        headY,
        headRotate,
        headScale,
        faceX,
        faceY,
        pupilX,
        pupilY,
        antennaRotate,
        blink,
      }}
      onPointerEnter={reduceMotion ? undefined : handlePointerEnter}
      onPointerLeave={reduceMotion ? undefined : handlePointerLeave}
      onPointerDown={reduceMotion ? undefined : handlePointerDown}
    />
  );
};
