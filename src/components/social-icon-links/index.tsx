import type { ReactNode } from "react";
import clsx from "clsx";
import Button from "@/components/button";
import { FacebookIcon, GitHubIcon, LinkedInIcon } from "@/assets";
import { SOCIAL_LINKS } from "@/constants/social";
import type { SocialIconLinksProps, SocialNetwork } from "./index.types";
import styles from "./index.module.css";

const DEFAULT_NETWORKS: readonly SocialNetwork[] = ["github", "linkedin"];

const ICONS: Record<SocialNetwork, (props: { size: number }) => ReactNode> = {
  github: ({ size }) => <GitHubIcon size={size} />,
  linkedin: ({ size }) => <LinkedInIcon size={size} />,
  facebook: ({ size }) => <FacebookIcon size={size} />,
};

export const SocialIconLinks = ({
  networks = DEFAULT_NETWORKS,
  labels,
  variant = "surface",
  iconSize = variant === "onDark" ? 22 : 18,
  className,
  buttonClassName,
}: SocialIconLinksProps) => {
  const listClass = clsx(
    styles.list,
    variant === "onDark" && styles.listOnDark,
    className,
  );
  const btnClass = clsx(
    variant === "onDark" ? styles.btnOnDark : styles.btnSurface,
    buttonClassName,
  );

  return (
    <div className={listClass}>
      {networks.map((network) => (
        <Button
          key={network}
          variant="icon"
          href={SOCIAL_LINKS[network]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labels[network] ?? network}
          leftIcon={ICONS[network]({ size: iconSize })}
          containerClassName={btnClass}
        />
      ))}
    </div>
  );
};

export type { SocialIconLinksProps, SocialNetwork } from "./index.types";
