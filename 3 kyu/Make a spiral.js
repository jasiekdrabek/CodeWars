// Your task, is to create a NxN spiral with a given size.

// For example, spiral with size 5 should look like this:

// 00000
// ....0
// 000.0
// 0...0
// 00000
// and with the size 10:

// 0000000000
// .........0
// 00000000.0
// 0......0.0
// 0.0000.0.0
// 0.0..0.0.0
// 0.0....0.0
// 0.000000.0
// 0........0
// 0000000000
// Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:

// [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
// Because of the edge-cases for tiny spirals, the size will be at least 5.

// General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.

function changeDirection(direction, res, coord, n) {
    let c = [coord[0], coord[1]];
    if (direction == "right") {
        c[1] = (c[1] + 1) % n;
        if (res[c[0]][c[1]] == 0 || res[c[0]][c[1]] == 1) {
            direction = "down";
        }
    } else if (direction == "down") {
        c[0] = (c[0] + 1) % n;
        if (res[c[0]][c[1]] == 0 || res[c[0]][c[1]] == 1) {
            direction = "left";
        }
    } else if (direction == "left") {
        c[1] = (c[1] - 1) % n;
        if (c[1] < 0) {
            c[1] += n;
        }
        if (res[c[0]][c[1]] == 0 || res[c[0]][c[1]] == 1) {
            direction = "up";
        }
    } else if (direction == "up") {
        c[0] = (c[0] - 1) % n;
        if (c[1] < 0) {
            c[1] += n;
        }
        if (res[c[0]][c[1]] == 0 || res[c[0]][c[1]] == 1) {
            direction = "right";
        }
    }
    return direction;
}
function changeCoord(direction, coord, n) {
    let c = [coord[0], coord[1]];
    if (direction == "right") {
        c[1] = (c[1] + 1) % n;
        return c;
    } else if (direction == "down") {
        c[0] = (c[0] + 1) % n;
        return c;
    } else if (direction == "left") {
        c[1] = (c[1] - 1) % n;
        if (c[1] < 0) {
            c[1] += n;
        }
        return c;
    } else if (direction == "up") {
        c[0] = (c[0] - 1) % n;
        if (c[1] < 0) {
            c[1] += n;
        }
        return c;
    }
}
function changeCoordToAddZero(direction, coord, n) {
    let c = [coord[0], coord[1]];
    if (direction == "right") {
        c[0] = (c[0] + 1) % n;
        return c;
    } else if (direction == "down") {
        c[1] = (c[1] - 1) % n;
        return c;
    } else if (direction == "left") {
        c[0] = (c[0] - 1) % n;
        return c;
    } else if (direction == "up") {
        c[1] = (c[1] + 1) % n;
        return c;
    }
}
function spiralize(n) {
    let res = [];
    let direction = "right";
    let visited = 0;
    for (let i = 0; i < n; i++) {
        let list = []
        for (let j = 0; j < n; j++) {
            list.push(2);
        }
        res.push(list);
    }
    let coord = [0, 0];
    while (true) {
        if (visited >= (n ** 2)) {
            break;
        }
        console.log(coord);
        res[coord[0]][coord[1]] = 1;
        visited += 1;
        if (changeDirection(direction, res, coord, n) == direction) {
            let zeroCoord = changeCoordToAddZero(direction, coord, n);
            if (res[zeroCoord[0]][zeroCoord[1]] == 2) {
                res[zeroCoord[0]][zeroCoord[1]] = 0;
                visited += 1;
            }
        } else {
            direction = changeDirection(direction, res, coord, n);
        }
        coord = changeCoord(direction, coord, n);
    }
    return res;
}