// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)

export function arrayDiff(a: number[], b: number[]): number[] {
  if (a.length === 0) return [];
  if (b.length === 0) return a;
  for (let i = 0; i < b.length; i++) {
    while (a.indexOf(b[i]) !== -1) {
      a.splice(a.indexOf(b[i]), 1);
    }
  }
  return a;
}
