// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }
  function pigIt(str){
    let newStr ="";
    let  listOfString = str.split(" ");
    for (let i=0;i<listOfString.length; i++ ){
      if (isLetter(listOfString[i])){
      firstLetter = listOfString[i][0];
      listOfString[i]+= firstLetter
      listOfString[i] += "ay";
      listOfString[i] = listOfString[i].substring(1);
        }
      newStr +=listOfString[i];
      newStr +=" " 
    }
    newStr = newStr.slice(0, -1);
    return newStr;
  }