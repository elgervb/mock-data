
/**
 * Generate a random hex color, like #f4f4f4
 */
export function randomHexColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
