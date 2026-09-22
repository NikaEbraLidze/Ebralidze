export interface NavLink {
  key: string;
  label: string;
  onClick: () => void;
  isActive?: boolean;
}
