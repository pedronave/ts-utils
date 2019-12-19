/**
 * Checks if a given data is null.
 *
 * @param data data to be compared to null
 * @returns {boolean}
 */
export function isNull(data: any): boolean {
  return data === null;
}

/**
 * Checks if a given data is undefined
 * @param data data to be compared to undefined
 * @returns {boolean}
 */
export function isUndefined(data: any): boolean {
  return data === undefined;
}

/**
 * Checks if a given data is null or undefined.
 * @param data data to be compared to undefined or null
 * @returns {boolean}
 */
export function isNullOrUndefined(data: any): boolean {
  return data == undefined || data == undefined;
}

export function moveArrayElement<T>(array: T[], from: number, to: number): T[] {
  const arrCopy = [...array];
  array.slice();
  arrCopy.splice(to, 0, arrCopy.splice(from, 1)[0]);
  return arrCopy;
}
