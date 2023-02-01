// I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

export function nthFibo(n: number): number {
    if(n===1) return 0
    if(n===2) return 1
    let a =0;
    let b=1;
    let c=a+b;
    for(let i=3;i<n;i++){
      a = b;
      b = c;
      c = a+b;    
    }
    return c;
  }