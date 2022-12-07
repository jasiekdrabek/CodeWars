// DESCRIPTION:
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
function persistence(num) {
    let resoult =0;
      let x =1;
    let array = [num,resoult];
    while(array[0] >= 10){
    array = persistenceHelp(array[0],array[1]);
    }
    resoult = array[1]
    return resoult;
  }
  function persistenceHelp(num,resoult){
    let x =1;
      while(num > 0){
        x = x * (num %10);
        num = num - (num %10);
        num = num/10;    
    }
    resoult += 1;
    let array =[];
    array.push(x);
    array.push(resoult);
    return array;
  }