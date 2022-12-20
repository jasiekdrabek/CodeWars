function calculateSpecial(lastDigit, base) {
    console.log(lastDigit);
    let shift = lastDigit;
    let res = [];
    let i = parseInt(lastDigit, base);
    let j = parseInt(base, 10);
    while (true) {
        let number = shift;
        let s = shift;
        let r = 0;
        for (let k = 1; k < parseInt(lastDigit); k++) {
            s = add(s, shift, base);
        }
        shift = s;

        let postShift = shift;
        if (shift[1] != "0") {
            shift = shift.slice(1);
        }
        shift += lastDigit;
        if ((postShift.slice(1) + postShift[0]) == shift && postShift[0] == lastDigit) {
            res.push(shift);
            break;
        }
        if (shift == number) {
            shift = postShift + lastDigit;
        }
    }
    console.log(res);
    return res[0];

}
function add(a, b, base) {
    let newA;
    let newB;
    let res = "";
    let a1 = 0;
    let b1 = 0;
    let sum = 0;
    let addToNext = 0;
    if (a.length > 1) {
        newA = a.split('').reverse();
    } else {
        newA = [a];
    }
    if (b.length > 1) {
        newB = b.split('').reverse();
    } else {
        newB = [b];
    }
    while (newA.length > 0 || newB.length > 0) {
        if (newA.length > 0) {
            a1 = parseInt(newA.shift(), base)
        } else {
            a1 = 0;
        }
        if (newB.length > 0) {
            b1 = parseInt(newB.shift(), base)
        } else {
            b1 = 0;
        }
        sum = a1 + b1 + addToNext;
        if (sum < base) {
            addToNext = 0;
            res = sum.toString(base) + res;
        }
        else {
            addToNext = 1;
            res = (sum - base).toString(base) + res;
        }
    }
    if (addToNext == 1) {
        res = addToNext.toString(base) + res;
    }
    return res;
}