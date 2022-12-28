// For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

// E. g., with the input [3, 4, 2], your code should return 1 because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.

// Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers efficiently.

// Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.

// This kata generalizes Last digit of a large number; you may find useful to solve it beforehand.

function lastDigit(as) {
    console.log(as);
    if (as.length == 0) {
        return 1;
    }

    let res = (as[as.length - 1] % 4);
    if (as.length == 1) {
        res = 1;
    }
    let j = 0
    for (let i = as.length - 2; i > 0; i--) {
        if (as[i + 1] > 4) {
            j = 4
        } else {
            j = 0
        }
        res = (as[i] % 4) ** (res + j);
        res = res % 4;
        if (res == 0 && as[i] != 0) {
            res = 4;

        }
    }
    if (res == 0 && as[1] != 0) {
        res = 4;

    }
    res = ((as[0] % 10) ** res) % 10
    return res;
}