import { isNull, isUndefined, isNothing, moveArrayElement, isObject } from '../utils';

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

test('isNothing', () => {
  expect(isNothing('')).toBe(false);
  expect(isNothing(0)).toBe(false);
  expect(isNothing({})).toBe(false);

  expect(isNothing(null)).toBe(true);
  const test = undefined;
  expect(isNothing(test)).toBe(true);
  expect(isNothing(undefined)).toBe(true);
});

test('moveArrayElement', () => {
  const array = [0, 1, 2, 3, 4];
  const arr1 = moveArrayElement(array, 2, 4);
  expect(arr1[4]).toBe(array[2]);
  // Make sure original array isn't altered
  expect(array).toStrictEqual([0, 1, 2, 3, 4]);
});

test('isObject', () => {
  // Check null
  expect(isObject(null)).toBe(false);

  // Check primitive values
  expect(isObject(2)).toBe(false);
  expect(isObject('ts')).toBe(false);

  // Check arrays
  expect(isObject([1, 2])).toBe(true);

  // Check objects
  expect(isObject({})).toBe(true);
  expect(isObject({ t: 'teste' })).toBe(true);

  // Check functions
  function f() {
    return 12;
  }
  expect(isObject(f)).toBe(true);
  expect(isObject(f())).toBe(false);
});
