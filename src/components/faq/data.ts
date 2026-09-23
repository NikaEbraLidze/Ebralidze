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

export const contactFaqKeys = ["roles", "stack", "location"] as const;

export type ContactFaqKey = (typeof contactFaqKeys)[number];
