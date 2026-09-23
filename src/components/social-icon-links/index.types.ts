export type SocialNetwork = "github" | "linkedin" | "facebook";

export interface SocialIconLinksProps {
  networks?: readonly SocialNetwork[];
  labels: Partial<Record<SocialNetwork, string>>;
  variant?: "surface" | "onDark";
  iconSize?: number;
  className?: string;
  buttonClassName?: string;
}
