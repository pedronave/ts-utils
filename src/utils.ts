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
export function isNothing(data: any): boolean {
  return data === undefined || data === null;
}

/**
 * Given an array, moves an element at index from to index to
 * @param array array whose element is to be moved
 * @param from index of the element to be moved
 * @param to index for the element to be moved to
 */
export function moveArrayElement<T>(array: T[], from: number, to: number): T[] {
  const arrCopy = [...array];
  array.slice();
  arrCopy.splice(to, 0, arrCopy.splice(from, 1)[0]);
  return arrCopy;
}

/**
 * Checks if a given data is an Object or not.
 * Every value that is not a primitive is an Object, this includes functions and arrays.
 * @param data data to be checked
 */
export function isObject(data: any): boolean {
  if (data === null) {
    return false;
  }
  return typeof data === 'function' || typeof data === 'object';
}
