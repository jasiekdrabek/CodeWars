// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let tower =[];
    let floor = ""
    let len = 2 * nFloors -1;
    for(let i=1; i<(nFloors +1); i++ ){
      floor = "";
      for (let j =0; j<(nFloors -i);j++ ){
        floor += " ";
      }
      for (let j=0; j<(2 *i -1);j++){
        floor += "*";
      }
      for (let j =0; j<(nFloors -i);j++ ){
        floor += " ";
      }
      console.log(floor);
      tower.push(floor);
    }
    console.log(tower);
    return tower;
  }