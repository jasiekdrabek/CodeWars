// When we attended middle school were asked to simplify mathematical expressions like "3x-yx+2xy-x" (or usually bigger), and that was easy-peasy ("2x+xy"). But tell that to your pc and we'll see!

// Write a function: simplify, that takes a string in input, representing a multilinear non-constant polynomial in integers coefficients (like "3x-zx+2xy-x"), and returns another string as output where the same expression has been simplified in the following way ( -> means application of simplify):

// All possible sums and subtraction of equivalent monomials ("xy==yx") has been done, e.g.:
// "cb+cba" -> "bc+abc", "2xy-yx" -> "xy", "-a+5ab+3a-c-2a" -> "-c+5ab"


// All monomials appears in order of increasing number of variables, e.g.:
// "-abc+3a+2ac" -> "3a+2ac-abc", "xyz-xz" -> "-xz+xyz"

// If two monomials have the same number of variables, they appears in lexicographic order, e.g.:
// "a+ca-ab" -> "a-ab+ac", "xzy+zby" ->"byz+xyz"

// There is no leading + sign if the first coefficient is positive, e.g.:
// "-y+x" -> "x-y", but no restrictions for -: "y-x" ->"-x+y"

// N.B. to keep it simplest, the string in input is restricted to represent only multilinear non-constant polynomials, so you won't find something like `-3+yx^2'. Multilinear means in this context: of degree 1 on each variable.

// Warning: the string in input can contain arbitrary variables represented by lowercase characters in the english alphabet.

// Good Work :)

function simplify(polynomial) {
  console.log(polynomial);
  polynomial = polynomial.replace(/[-]/g, "+-");
  if (polynomial[0] == "+") {
    polynomial = polynomial.slice(1);
  }
  let monomials = polynomial.split("+");
  for (let i = 0; i < monomials.length; i++) {
    let j = monomials[i].split('');
    let num = "";
    for (let k = 0; k < monomials[i].length; k++) {
      if (j[k].match(/[a-z]/g)) { continue; } else {
        num += j[k];
        monomials[i] = monomials[i].slice(1);
      }
    }
    monomials[i] = monomials[i].split('').sort().join('');
    monomials[i] = num + monomials[i];
  }
  console.log(monomials);
  // Next, we need to sort the monomials by the number of variables and then by
  // lexicographic order
  monomials.sort((a, b) => {
    // Check if the monomial has a "-" sign before the variable
    if (a.startsWith("-")) {
      a = a.slice(1);
    }
    if (!b.startsWith("-")) {
      b = b.slice(1);
    }
    // Count the number of variables in each monomial
    const numVarsA = (a.match(/[a-z]/g) || []).length;
    const numVarsB = (b.match(/[a-z]/g) || []).length;
    // If the number of variables is the same, compare the monomials
    // lexicographically
    if (numVarsA === numVarsB) {
      a = (a.replace(/[0-9]/g));
      b = (b.replace(/[0-9]/g));
      return a.localeCompare(b);
    }
    // Otherwise, sort by the number of variables
    return numVarsA - numVarsB;
  });
  console.log(monomials);
  // Next, we need to combine monomials with the same variables and combine
  // their coefficients
  const simplifiedMonomials = [];
  for (const monomial of monomials) {
    // Extract the coefficient of the monomial
    const coeffMatch = monomial.match(/^-?\d+/g);
    let coeff = coeffMatch ? parseInt(coeffMatch[0], 10) : 1;
    if (monomial[0] == "-" && coeff == 1) { coeff = -coeff; }
    console.log(coeff + " " + monomial);
    // Check if the monomial is already in the list of simplified monomials
    const existingMonomial = simplifiedMonomials.find(
      (simplifiedMonomial) => simplifiedMonomial.vars === monomial.replace(/[^a-z]/g, '')
    );
    // If the monomial is already in the list, combine its coefficient with the
    // existing monomial's coefficient
    if (existingMonomial) {
      existingMonomial.coeff += coeff;
    } else {
      // Otherwise, add the monomial to the list of simplified monomials
      simplifiedMonomials.push({
        coeff,
        vars: monomial.replace(/[^a-z]/g, '')
      });
    }
  }
  console.log(simplifiedMonomials);
  // Finally, we need to construct the simplified polynomial string from the
  // simplified monomials
  let result = '';
  for (let monomial of simplifiedMonomials) {
    // Add the coefficient to the result string, but only if it is non-zero
    if (monomial.coeff !== 0) {
      if (monomial.coeff !== 1 && monomial.coeff !== -1) {
        result += monomial.coeff > 0 ? `+${monomial.coeff}` : monomial.coeff;
      } else if (monomial.coeff == 1) { result += "+" } else { result += "-" }
      // Add the variables to the result string
      result += monomial.vars;
    }
  }
  // If the first character of the result string is a '+', remove it
  if (result[0] === '+') {
    result = result.slice(1)
  }
  return result;
}