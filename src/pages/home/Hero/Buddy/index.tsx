import { motion } from "motion/react";
import styles from "./index.module.css";
import type { BuddyMood, BuddyViewProps } from "./index.types";

const MOOD_SPRING = { type: "spring", stiffness: 400, damping: 22 } as const;

const EYE_Y = 80;
const EYES = [
  { id: "left", cx: 78 },
  { id: "right", cx: 122 },
] as const;

const EYE_SHAPE: Record<BuddyMood, { scaleX: number; scaleY: number }> = {
  neutral: { scaleX: 1, scaleY: 1 },
  happy: { scaleX: 1.05, scaleY: 0.7 },
  surprised: { scaleX: 1.15, scaleY: 1.15 },
};

const BROW_LIFT: Record<BuddyMood, number> = {
  neutral: 0,
  happy: -2,
  surprised: -6,
};

const moodVisibility = (visible: boolean) => ({
  opacity: visible ? 1 : 0,
  scale: visible ? 1 : 0.6,
});

export const BuddyView = ({
  rootRef,
  label,
  mood,
  motion: m,
  onPointerEnter,
  onPointerLeave,
  onPointerDown,
}: BuddyViewProps) => (
  <div
    ref={rootRef}
    className={styles.root}
    onPointerEnter={onPointerEnter}
    onPointerLeave={onPointerLeave}
    onPointerDown={onPointerDown}
  >
    <svg viewBox="0 0 200 170" role="img" aria-label={label} className={styles.svg}>
      <rect className={styles.ink} x="60" y="152" width="80" height="12" rx="6" />
      <rect className={styles.ink} x="90" y="134" width="20" height="20" />

      <g className={styles.breathe}>
        <motion.g
          style={{ x: m.headX, y: m.headY, rotate: m.headRotate, scale: m.headScale }}
        >
          <motion.g style={{ rotate: m.antennaRotate, originX: 0.5, originY: 1 }}>
            <line className={styles.stroke} x1="100" y1="32" x2="100" y2="16" />
            <circle className={styles.antennaTip} cx="100" cy="12" r="6" />
          </motion.g>

          <rect className={styles.ink} x="30" y="30" width="140" height="110" rx="26" />
          <rect className={styles.screen} x="42" y="42" width="116" height="86" rx="16" />

          <motion.g style={{ x: m.faceX, y: m.faceY }}>
            <motion.g animate={{ y: BROW_LIFT[mood] }} transition={MOOD_SPRING}>
              <line className={styles.stroke} x1="70" y1="59" x2="86" y2="59" />
              <line className={styles.stroke} x1="114" y1="59" x2="130" y2="59" />
            </motion.g>

            {EYES.map((eye) => (
              <motion.g key={eye.id} animate={EYE_SHAPE[mood]} transition={MOOD_SPRING}>
                <motion.g style={{ scaleY: m.blink }}>
                  <ellipse className={styles.eyeWhite} cx={eye.cx} cy={EYE_Y} rx="13" ry="15" />
                  <motion.g style={{ x: m.pupilX, y: m.pupilY }}>
                    <circle className={styles.ink} cx={eye.cx} cy={EYE_Y} r="6.5" />
                    <circle className={styles.eyeWhite} cx={eye.cx + 2.5} cy={EYE_Y - 2.5} r="2" />
                  </motion.g>
                </motion.g>
              </motion.g>
            ))}

            <motion.g animate={{ opacity: mood === "happy" ? 1 : 0 }} transition={MOOD_SPRING}>
              <ellipse className={styles.cheek} cx="64" cy="102" rx="8" ry="5" />
              <ellipse className={styles.cheek} cx="136" cy="102" rx="8" ry="5" />
            </motion.g>

            <motion.path
              className={styles.stroke}
              d="M89 106 Q100 114 111 106"
              fill="none"
              animate={moodVisibility(mood === "neutral")}
              transition={MOOD_SPRING}
            />
            <motion.path
              className={styles.ink}
              d="M84 102 Q100 124 116 102 Z"
              animate={moodVisibility(mood === "happy")}
              transition={MOOD_SPRING}
            />
            <motion.ellipse
              className={styles.ink}
              cx="100"
              cy="110"
              rx="7"
              ry="8"
              animate={moodVisibility(mood === "surprised")}
              transition={MOOD_SPRING}
            />
          </motion.g>
        </motion.g>
      </g>
    </svg>
  </div>
);
