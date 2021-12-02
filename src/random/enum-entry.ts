
export function randomEnumEntry<T>(enumObj: T): T[keyof T] {
  const enumValues = Object.values(enumObj);
  const i = Math.floor(Math.random() * enumValues.length);
  return enumValues[i] as T[keyof T];
}
