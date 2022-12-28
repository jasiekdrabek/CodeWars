// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

// The keypad has the following layout:

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

// Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

// Detective, we are counting on you!

function getPINs(observed) {
    let res = [];
    let numbers = observed.split("");
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = adj(numbers[i]);
    }
    while (numbers.length < 8) {
        numbers.push([""])
    }
    for (let a = 0; a < numbers[0].length; a++) {
        for (let b = 0; b < numbers[1].length; b++) {
            for (let c = 0; c < numbers[2].length; c++) {
                for (let d = 0; d < numbers[3].length; d++) {
                    for (let e = 0; e < numbers[4].length; e++) {
                        for (let f = 0; f < numbers[5].length; f++) {
                            for (let g = 0; g < numbers[6].length; g++) {
                                for (let h = 0; h < numbers[7].length; h++) {
                                    let x = numbers[0][a].toString() + numbers[1][b].toString() + numbers[2][c].toString() + numbers[3][d].toString() + numbers[4][e].toString() + numbers[5][f].toString() + numbers[6][g].toString() + numbers[7][h].toString();
                                    res.push(x);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return res;
}
function adj(number) {
    if (number == "0") {
        return ["0", "8"];
    }
    if (number == "1") {
        return ["1", "2", "4"];
    }
    if (number == "2") {
        return ["1", "2", "3", "5"];
    }
    if (number == "3") {
        return ["2", "3", "6"];
    }
    if (number == "4") {
        return ["1", "4", "5", "7"];
    }
    if (number == "5") {
        return ["2", "4", "5", "6", "8"];
    }
    if (number == "6") {
        return ["3", "5", "6", "9"];
    }
    if (number == "7") {
        return ["4", "7", "8"];
    }
    if (number == "8") {
        return ["0", "5", "7", "8", "9"];
    }
    if (number == "9") {
        return ["6", "8", "9"];
    }
}