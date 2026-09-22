export const faqItemKeys = [
  "who",
  "learning",
  "experience",
  "stack",
  "roles",
  "authforge",
  "location",
] as const;

export type FaqItemKey = (typeof faqItemKeys)[number];
