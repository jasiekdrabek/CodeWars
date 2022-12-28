// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil
function nextBigger(n) {
    let n1 = n;
    let digits = [];
    let res = 0;
    let resu = 0;
    while (n1 > 0) {
        digits.push(n1 % 10);
        n1 = (n1 - n1 % 10) / 10;
    }
    console.log(digits);
    for (let i = 0; i < (digits.length - 1); i++) {
        if (digits[i] > digits[i + 1]) {
            let restNumber = digits.splice(0, (i + 1));
            let min = 10;
            for (let j = 0; j < restNumber.length; j++) {
                if (restNumber[j] < min && restNumber[j] > digits[0]) {
                    min = restNumber[j];
                }
            }
            console.log(min);
            if (min != digits[0]) {
                restNumber[restNumber.indexOf(min)] = digits[0];
                digits[0] = min;
            } else {
                let temp = digits[0];
                digits[0] = restNumber[restNumber.length - 1];
                restNumber[restNumber.length - 1] = temp;
            }
            while (restNumber.length > 0) {
                min = restNumber.splice(restNumber.indexOf(Math.min(...restNumber)), 1);
                min = min[0];
                digits.unshift(min);
            }
            for (let j = (digits.length - 1); j >= 0; j--) {
                res = res * 10;
                res += digits[j];
            }
            return res;
        }
    }
    return -1
}