// nstructions
// Given a mathematical expression as a string you must return the result as a number.

// Numbers
// Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

// Operators
// You need to support the following mathematical operators:

// Multiplication *
// Division / (as floating point division)
// Addition +
// Subtraction -
// Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.

// Parentheses
// You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6

// Whitespace
// There may or may not be whitespace between numbers and operators.

// An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e all of the following are valid expressions.

// 1-1    // 0
// 1 -1   // 0
// 1- 1   // 0
// 1 - 1  // 0
// 1- -1  // 2
// 1 - -1 // 2
// 1--1   // 2

// 6 + -(4)   // 2
// 6 + -( -4) // 10
// And the following are invalid expressions

// 1 - - 1    // Invalid
// 1- - 1     // Invalid
// 6 + - (4)  // Invalid
// 6 + -(- 4) // Invalid
// Validation
// You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.

// Restricted APIs
// NOTE: Both eval and Function are disabled.

function getNumbers(expr) {
    let numbers = [];
    let number = '';
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] != "(" && expr[i] != ")") { number += expr[i]; }
        if (((!isNaN(expr[i])) && isNaN(expr[i + 1]) && expr[i + 1] != '.')) {
            numbers.push(number);
            number = '';
        }
    }
    return numbers;
}
function makeMulAndDiv(numbers) {
    let afterMulAndDiv = [];
    let operation = '';
    let prevOperation = '';
    let r = '';
    for (let i = 0; i < numbers.length; i++) {
        if (i != 0) {
            operation = numbers[i][0];
            numbers[i] = numbers[i].slice(1);
        } else {
            if (numbers[i][0] == '-') {
                operation = numbers[i][0];
                numbers[i] = numbers[i].slice(1);
            }
        }
        if (operation == '*') {
            if (prevOperation == '*' || prevOperation == '/') {
                afterMulAndDiv[afterMulAndDiv.length - 1] = (Number(afterMulAndDiv[afterMulAndDiv.length - 1]) * Number(numbers[i]));
            } else {
                r = (Number(numbers[i - 1]) * Number(numbers[i]));
                afterMulAndDiv.push(r.toString());
            }
        } else if (operation == '/') {
            if (prevOperation == '*' || prevOperation == '/') {
                afterMulAndDiv[afterMulAndDiv.length - 1] = (Number(afterMulAndDiv[afterMulAndDiv.length - 1]) / Number(numbers[i]));
            } else {
                r = (Number(numbers[i - 1]) / Number(numbers[i]));
                afterMulAndDiv.push(r.toString());
            }
        } else if (i == numbers.length - 1 && operation != '/' && operation != '*') {
            afterMulAndDiv.push(operation + numbers[i]);
        } else if (i < numbers.length - 1 && operation != '/' && operation != '*') {
            if (numbers[i + 1][0] != '/' && numbers[i + 1][0] != '*') {
                afterMulAndDiv.push(operation + numbers[i]);
            }
        }
        prevOperation = operation;
        numbers[i] = operation + numbers[i];
    }
    return afterMulAndDiv;
}
var calc = function (expression) {
    expression = expression.replace(/[\s]/g, "").replace(/--/g, '+');
    while (true) {
        let expr = '';
        for (let char of expression) {
            expr += char;
            if (char == "(") {
                if (expr.endsWith("(") && expr.length > 1) {
                    expr = "(";
                }
            }
            if (char == ")") {
                expr = expr.replace("(", "");
                expr = expr.replace(")", "");
                let numbers = getNumbers(expr);
                let afterMulAndDiv = makeMulAndDiv(numbers);
                let r = 0;
                for (let i = 0; i < afterMulAndDiv.length; i++) {
                    r += Number(afterMulAndDiv[i]);
                }
                expr = "(" + expr + ")";
                expression = expression.replace(expr, r);
                expression = expression.replace(/--/g, '+');
                expression = expression.replace(/\+\-/g, '-');
                break;
            }
        }
        if (!(expression.includes("("))) {
            expr = expression;
            let numbers = getNumbers(expr);
            let afterMulAndDiv = makeMulAndDiv(numbers);
            let r = 0;
            for (let i = 0; i < afterMulAndDiv.length; i++) {
                r += Number(afterMulAndDiv[i]);
            }
            return r;
        }
    }
};