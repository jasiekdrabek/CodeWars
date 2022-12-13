// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));
function operation(x,op){
    let num = parseInt(op[2]);
    op = op[0];
    if (op == "+"){
      return x + num;
    }
    if (op == "-"){
      return x - num;
    }
    if (op == "*"){
      return x * num;
    }
    if (op == "/"){
      return Math.floor(x / num);
    }
  }
  function zero(x=0) {
    if(x == 0){return x;}
    return operation(0,x);
    }
  function one(x=1) {
    if(x == 1){return x;}
    return operation(1,x);}
  function two(x=2) {
    if(x == 2){return x;}
    return operation(2,x);}
  function three(x=3) {
    if(x == 3){return x;}
    return operation(3,x);}
  function four(x=4) {
    if(x == 4){return x;}
    return operation(4,x);}
  function five(x=5) {
    if(x == 5){return x;}
    return operation(5,x);}
  function six(x=6) {
    if(x == 6){return x;}
    return operation(6,x);}
  function seven(x=7) {
    if(x == 7){return x;}
    return operation(7,x);}
  function eight(x=8) {
    if(x == 8){return x;}
    return operation(8,x);}
  function nine(x=9) {
    if(x == 9){return x;}
    return operation(9,x);}
  
  function plus(x) {return ("+ " + x.toString());}
  function minus(x) {return  ("- " + x.toString());}
  function times(x) {return   ("* " + x.toString());}
  function dividedBy(x) {return  ("/ " + x.toString());}