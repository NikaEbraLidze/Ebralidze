import clsx from "clsx";

interface ChevronIconProps {
  isOpen?: boolean;
  size?: number;
  className?: string;
}

const ChevronIcon = ({
  isOpen = false,
  size = 16,
  className,
}: ChevronIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={clsx(className, { "chevron-open": isOpen })}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronIcon;
