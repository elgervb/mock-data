
/**
 * Generate a random hex color, like #f4f4f4
 */
export function randomHexColor(): string {
  const hexChars = 6;
  let hex = Math.floor(Math.random() * 16777215).toString(16);
  hex = hex.length === hexChars ? hex : `${hex}0`;

  return `#${hex}`;
}
