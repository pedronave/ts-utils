import { isNull, isUndefined, isNullOrUndefined, moveArrayElement } from './../index';

test('isNull', () => {
  expect(isNull('')).toBe(false);
  expect(isNull(0)).toBe(false);
  expect(isNull({})).toBe(false);
  expect(isNull(undefined)).toBe(false);

  expect(isNull(null)).toBe(true);
  const test = null;
  expect(isNull(test)).toBe(true);
});

test('isUndefined', () => {
  expect(isUndefined('')).toBe(false);
  expect(isUndefined(0)).toBe(false);
  expect(isUndefined({})).toBe(false);
  expect(isUndefined(null)).toBe(false);

  const test = undefined;
  expect(isUndefined(test)).toBe(true);
  expect(isUndefined(undefined)).toBe(true);
});

test('isNullOrUndefined', () => {
  expect(isNullOrUndefined('')).toBe(false);
  expect(isNullOrUndefined(0)).toBe(false);
  expect(isNullOrUndefined({})).toBe(false);

  expect(isNullOrUndefined(null)).toBe(true);
  const test = undefined;
  expect(isNullOrUndefined(test)).toBe(true);
  expect(isNullOrUndefined(undefined)).toBe(true);
});

test('moveArrayElement', () => {
  const array = [0, 1, 2, 3, 4];
  const arr1 = moveArrayElement(array, 2, 4);
  expect(arr1[4]).toBe(array[2]);
  // Make sure original array isn't altered
  expect(array).toStrictEqual([0, 1, 2, 3, 4]);
});
