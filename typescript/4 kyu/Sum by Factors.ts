// Given an array of positive or negative integers

//  I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:
// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

export function sumOfDivided(lst: number[]): number[][] {
  console.log(lst);
  let map = new Map();
  let res: number[][] = [];
  for (let i = 0; i < lst.length; i++) {
    let divisor: number = 2;
    let n: number = Math.abs(lst[i]);
    let isThisNumebrCounted: boolean = false;
    while (n >= 2) {
      if (n % divisor == 0) {
        if (map.has(divisor)) {
          if (!isThisNumebrCounted) map.set(divisor, map.get(divisor) + lst[i]);
        } else {
          if (!isThisNumebrCounted) map.set(divisor, lst[i]);
        }
        n = n / divisor;
        isThisNumebrCounted = true;
      } else {
        divisor++;
        isThisNumebrCounted = false;
      }
    }
  }
  map.forEach((value, key) => {
    res.push([key, value]);
  });
  res.sort(function (a, b) {
    return a[0] - b[0];
  });
  return res;
}
