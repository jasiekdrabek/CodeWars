// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

// Example
// Kata.FindMissing(new List<int> {1, 3, 5, 9, 11}) => 7
// PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!



using System.Collections.Generic;
using System;

public class Kata
{
    public static int FindMissing(List<int> list)
    {
        int r = 2147483647;
        for (int i = 0; i < list.Count - 1; i++)
        {
            if (Math.Abs(list[i + 1] - list[i]) < r)
            {
                r = Math.Abs(list[i + 1] - list[i]);
            }
            else
            {
                break;
            }
        }
        for (int i = 0; i < list.Count - 1; i++)
        {
            if (list[i] + r != list[i + 1])
            {
                return list[i] + r;
            }
        }
        return 0;
    }
}
