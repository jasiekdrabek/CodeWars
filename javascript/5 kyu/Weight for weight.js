// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes
// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
// For C: The result is freed.

function createItemsMap(itemsArray) {
    var itemsMap = {};
    for (var i = 0, item; (item = itemsArray[i]); ++i) {
      (itemsMap[item[1]] || (itemsMap[item[1]] = [])).push(item[0]);
    }
    return itemsMap;
  }
  
  function sortByKeys(itemsArray, sortingArr) {
    var itemsMap = createItemsMap(itemsArray), result = [];
      for (var i = 0; i < sortingArr.length; ++i) {
      var key = sortingArr[i].toString();
      itemsMap[key].sort();
      result.push([itemsMap[key].shift(), key]);
    }
    return result;
  }
  function isInt(x) {
   const parsed = parseInt(x);
    if (isNaN(parsed)) { return 0; }
    return parsed;
  }
  function sumDigits(x){
    let res =0;
    while (x>0){
      res += x % 10;
      x = (x - x%10)/10;
    }
    return res;
  }
  function orderWeight(strng) {
    let res = ''
    let number = '';
    let realWeight = [];
    let weight = [];
    let listWeights =[]
    for( let i=0; i<strng.length;i++){
        if (strng[i] >= '0' && strng[i] <= '9'){
          number +=  strng[i] ;
        }else{
         if (isInt(number)){
           number = isInt(number);
            realWeight.push([number,sumDigits(number)]);
            weight.push(sumDigits(number));
          }
          number = ''
        }
      }
    if (number != ''){
          if (isInt(number)){
            number = isInt(number);
            realWeight.push([number,sumDigits(number)]);
            weight.push(sumDigits(number));
          }
    }
    weight.sort(function(a, b){return a-b});
    realWeight = sortByKeys(realWeight,weight);
    for (let i=0; i<  realWeight.length;i++){
      res += realWeight[i][0] + " ";
    }
    res = res.slice(0, -1);
    return res;    
  }