export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

/**
 * Parses a number string and extracts the numeric value, prefix, and suffix
 * Examples:
 * - "$3B" → { value: 3, prefix: "$", suffix: "B" }
 * - "$500M+" → { value: 500, prefix: "$", suffix: "M+" }
 * - "100+" → { value: 100, prefix: "", suffix: "+" }
 * - "2" → { value: 2, prefix: "", suffix: "" }
 */
export function parseNumberString(str: string): {
  value: number;
  prefix: string;
  suffix: string;
} {
  // Extract the numeric part (including decimals)
  const numericMatch = str.match(/\d+(?:\.\d+)?/);
  if (!numericMatch) {
    return { value: 0, prefix: "", suffix: "" };
  }

  const numericValue = parseFloat(numericMatch[0]);
  const numericStart = str.indexOf(numericMatch[0]);
  const numericEnd = numericStart + numericMatch[0].length;
  
  // Extract prefix (everything before the number)
  const prefix = str.substring(0, numericStart);
  
  // Extract suffix (everything after the number)
  const suffix = str.substring(numericEnd);
  
  return {
    value: numericValue,
    prefix,
    suffix
  };
}

/**
 * Formats a number with the given prefix and suffix
 */
export function formatNumber(
  value: number,
  prefix: string = "",
  suffix: string = ""
): string {
  return `${prefix}${Math.floor(value)}${suffix}`;
} 