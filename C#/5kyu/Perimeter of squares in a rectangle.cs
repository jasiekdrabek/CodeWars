// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// alternative text

// Hint:
// See Fibonacci sequence

// Ref:
// http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216

using System;
using System.Numerics;
using System.Collections.Generic;
using System.Linq;

public class SumFct
{
    public static BigInteger perimeter(BigInteger n)
    {
        return 4 * fib(n);
    }

    static BigInteger fib(BigInteger term)
    {
        List<BigInteger> list = new List<BigInteger>();
        BigInteger toAdd = 1;
        list.Add(toAdd);
        list.Add(toAdd);
        if (term == 1)
        {
            return 1;
        }
        int i = 0;
        while (list.Count <= term)
        {
            list.Add(list.ElementAt(i) + list.ElementAt(i + 1));
            i += 1;
        }
        BigInteger sum = 0;
        foreach (var j in list)
        {
            sum += j;
        }
        return sum;
    }
}
