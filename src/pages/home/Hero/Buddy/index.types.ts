import type { MotionValue } from "motion/react";
import type { PointerEventHandler, RefObject } from "react";

export type BuddyMood = "neutral" | "happy" | "surprised";

export interface BuddyMotion {
  headX: MotionValue<number>;
  headY: MotionValue<number>;
  headRotate: MotionValue<number>;
  headScale: MotionValue<number>;
  faceX: MotionValue<number>;
  faceY: MotionValue<number>;
  pupilX: MotionValue<number>;
  pupilY: MotionValue<number>;
  antennaRotate: MotionValue<number>;
  blink: MotionValue<number>;
}

export interface BuddyViewProps {
  rootRef: RefObject<HTMLDivElement | null>;
  label: string;
  mood: BuddyMood;
  motion: BuddyMotion;
  onPointerEnter?: PointerEventHandler<HTMLDivElement>;
  onPointerLeave?: PointerEventHandler<HTMLDivElement>;
  onPointerDown?: PointerEventHandler<HTMLDivElement>;
}
