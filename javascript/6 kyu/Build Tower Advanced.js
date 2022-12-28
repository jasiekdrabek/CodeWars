// Build Tower by the following given arguments:

// number of floors (integer and always greater than 0)
// block size (width, height) (integer pair and always greater than (0, 0))
// Tower block unit is represented as *. Tower blocks of block size (2, 1) and (2, 3) would look like respectively:

//   **
//   **
//   **
//   **
// for example, a tower of 3 floors with block size = (2, 3) looks like below

// [
//   '    **    ',
//   '    **    ',
//   '    **    ',
//   '  ******  ',
//   '  ******  ',
//   '  ******  ',
//   '**********',
//   '**********',
//   '**********'
// ]
// and a tower of 6 floors with block size = (2, 1) looks like below

// [
//   '          **          ', 
//   '        ******        ', 
//   '      **********      ', 
//   '    **************    ', 
//   '  ******************  ', 
//   '**********************'
// ]
// Don't return a whole string containing line-endings but a list/array/vector of strings instead!

// This kata might looks like a 5.5kyu one. So challenge yourself!

// Go take a look at Build Tower which is a more basic version :)
function towerBuilder(nFloors, nBlockSz) {
    let tower = [];
    let floor = ""
    let len = 2 * nFloors - 1;
    for (let i = 1; i < (nFloors + 1); i++) {
        for (let k = 0; k < nBlockSz[1]; k++) {
            floor = "";
            for (let j = 0; j < ((nFloors - i) * nBlockSz[0]); j++) {
                floor += " ";
            }
            for (let j = 0; j < ((2 * i - 1) * nBlockSz[0]); j++) {
                floor += "*";
            }
            for (let j = 0; j < ((nFloors - i) * nBlockSz[0]); j++) {
                floor += " ";
            }
            tower.push(floor);
        }
    }
    console.log(tower);
    return tower;
}