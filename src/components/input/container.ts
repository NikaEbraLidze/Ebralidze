export const hasValue = (
  value?: string | number | readonly string[] | null
): boolean => {
  if (value === undefined || value === null) return false;
  if (Array.isArray(value)) return value.length > 0;
  return String(value).trim().length > 0;
};
