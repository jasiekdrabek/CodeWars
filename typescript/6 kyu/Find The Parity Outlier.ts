// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

export function findOutlier(integers: number[]): number {
  let odd: number[] = integers.filter((n) => Math.abs(n) % 2 === 1);
  let even: number[] = integers.filter((n) => n % 2 === 0);
  if (odd.length === 1) return odd[0];
  return even[0];
}
