// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

export function pyramid(n: number): number[][] {
  let res: number[][] = [];
  let temp: number[] = [];
  for (let i = 0; i < n; i++) {
    temp.push(1);
    res.push([...temp]);
  }
  return res;
}
