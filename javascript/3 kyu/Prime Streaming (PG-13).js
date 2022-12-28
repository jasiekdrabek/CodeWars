// Create an endless stream of prime numbers - a bit like IntStream.of(2, 3, 5, 7, 11, 13, 17), but infinite. The stream must be able to produce a million primes in a few seconds.

// If this is too easy, try Prime Streaming (NC-17).

class Primes {
    static * stream() {
      for(let p of sieveOfAtkin(15500000)) {
        yield p;
      }
    }
  }
  function sieveOfAtkin(limit) {
    const primes = new Set();
  
    const sieve = new Array(limit + 1);
    for (let i = 0; i <= limit; i++) {
      sieve[i] = false;
    }
  
    const sqrtLimit = Math.sqrt(limit);
    for (let x = 1; x <= sqrtLimit; x++) {
      for (let y = 1; y <= sqrtLimit; y++) {
        let n = 4 * x * x + y * y;
        if (n <= limit && (n % 12 === 1 || n % 12 === 5)) {
          sieve[n] = !sieve[n];
        }
  
        n = 3 * x * x + y * y;
        if (n <= limit && n % 12 === 7) {
          sieve[n] = !sieve[n];
        }
  
        n = 3 * x * x - y * y;
        if (x > y && n <= limit && n % 12 === 11) {
          sieve[n] = !sieve[n];
        }
      }
    }
  
    for (let n = 5; n <= sqrtLimit; n++) {
      if (sieve[n]) {
        let x = n * n;
        for (let i = x; i <= limit; i += x) {
          sieve[i] = false;
        }
      }
    }
  
    sieve[2] = true;
    sieve[3] = true;
  
    for (let i = 0; i <= limit; i++) {
      if (sieve[i]) {
        primes.add(i);
      }
    }
  
    return primes;
  }