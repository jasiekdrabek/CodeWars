// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
    if (a > Number.MAX_SAFE_INTEGER && b > Number.MAX_SAFE_INTEGER) {
        console.log(a);
        console.log(b);
        let res = "";
        let a1 = 0;
        let b1 = 0;
        let sum = 0;
        let addToNext = 0;
        let newA = a.split('').reverse();
        let newB = b.split('').reverse();
        while (newA.length > 0 && newB.length > 0) {
            if (newA.length > 0) {
                a1 = Number(newA.shift())
            }
            if (newB.length > 0) {
                b1 = Number(newB.shift())
            }
            sum = a1 + b1 + addToNext;
            if (sum < 10) {
                addToNext = 0;
                res = sum.toString() + res;
            }
            else {
                addToNext = 1;
                res = (sum - 10).toString() + res;
            }
        }
        if (addToNext == 1) {
            res = addToNext + res;
        }
        return res;
    }
    return (Number(a) + Number(b)).toString();
}