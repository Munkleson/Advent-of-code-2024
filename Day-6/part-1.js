const rawMapData = ["................#.................#.#...........................#.#..................#............................................", "..........#................#...........#...................#.#....................................................................", "....#......#......#............#.#........#..........#.......#.......#...#........#..........#.........................#..........", "..................#............#.....##...............#..#.....................#...........#......................................", "#.........#.............................................................#........#............#........#.....#...#...........#....", ".....#...#......#..................................................#........#..................#......#.......................#...", "#.................................................#......................#......#...................................#.............", "...#.#...#.....................................#.......................#.........#..................................#....#........", "..............................................#..............#...#...........##..........................#.......#............#...", "........#.#.......#.................##.......................#..........#...........................#...#.........................", ".................#..............................#.................#............#....#.....#.......................................", ".................................................................#......#............#.#.#..................#.....................", ".#..........#......#...#.......#..........................#....................#.#.............................#..................", "...............#.....##.......#..#...###......#......................#.................................#.#......#..#..............", "#.....................#......................................#..........#...............#........#...............#...#.#..........", ".......................................#..................#.........................#.............................................", ".......................#...............................................................#........................#...........#.....", "......#....#..........................................................................................#..........#................", "........#.......................................#..........................#.............##.........#............#.#.........#....", "......#........#........................................................#..........................#..............................", "....................#.................................................#.....................#......#..#...#....................#..", "...........#....................##.....#...#............#...#......................................#.....#.......#.........#....#.", "#..............#.................#......#..................#...................#......#...........#...............................", ".......#.......#.........................................#.....#..#.................................................#..........#..", "..#..................#.......................#..#..#...#..........................#.........#...##......#..........#.#..#.........", "..#.........#....................#...........................#....................#..........................#................#..#", "......#.....................................................#..#.......#.............#...................#......................#.", ".....#..................................................................#...#.....................#......................#.#......", "......#..............#...................................#.......................#...................................#...##.......", "...........#..........#....................................................................#........................#.............", "#.......................................#..........................#........#......#......................##......................", ".............#...#..........#......#..........#.#......................................................................#..........", "........................................................#....#...#......##..........................#..........#..................", ".#...#.....#..........#....#...........................................#........#....................................#............", "....#....................................##.......#...........................................#.......#...........................", "...........#.............#........................................................#...#................#........#.................", ".....#.#........................................#....................#.........#..................................................", ".........#............#..............................#...#..............#...........................#...............#.....#.......", "......................#........................................#.#..........#...#..#......................#.......................", "##...........#..............#......#....................#..........................#.......................#.......#.......#......", "....#..#.........................................................#.....#..#.........................................#.....#.......", "....#......##................#......................................#.......................................#..................#..", "..............................#............................#..................#.......#.......#..................#...#............", "......................................................#............................#..............................................", ".......#.............................#......#.................................#...................................................", "..................................................................................................................#...............", ".......................#.....#...........##........................................#..............................#...............", "..........................#................................................................#..................#...................", "..........................#..................#........#..............#.#..#...................##..................................", "..................#............................................................................................#..................", ".......................#..........#...##................#.........................................................................", "...............#.....................................#............................................#...............................", "....#..................................................................................#........#.................................", "..#................#.....................................................................#...#....................................", "..........#.............#.........#......#................#......#.........#........#.......................#.....................", "..........................................................................#.................................#.....#....#.#........", "....#..........#......................................#......................................................#.......#....#.....#.", ".....#...............................#............................#........................................................#......", ".............................................................................#.......................#....................#..#....", "................#.............................................................#...................................................", ".....#................#.......#....................#............#.......#.....#.................................#.................", "...........................................................................................................#.#....................", ".....#...............................................#...................................................................#..#.....", "................#..............................#.............#.#..............................................................#...", "..#............#...................#..................................................................#...............#...#....#..", "..........#...............#...............#............................................#......#...##........#..#..................", "......#..###..........................................................................................#................#..........", "..........#........#.....#.......................#.........................................#.#........#.#.........................", ".....#............................................................#.....#..........................#..............................", "...............................................................#..............#........................................#..........", ".................................................#....#...#....................................#..#........................#......", ".................#..........#......#......................#.......#...................#.#.........................................", ".#............................................................................#..............#..............................#..#..", "..#........#...#..........#.................#...#...................................................#...#............#............", "...........#.......#..#...............................................................................#...........................", ".#.#..#...........##...................#...................................#...........#...............................#..........", "......................................................................#............#.....................................#...#....", "....#............#.#.#................#............#....#...#......#....................................................#.........", ".......................................................................................#.....................................#....", ".......................................#..................#........#................................................#.............", ".........................................#.....#..........#.......##..................................#................#..........", "..............#.............#............#..........................................................#.............................", ".#...................#...#..........................................................#........#........#..........................#", "..#..............................#.....................................#.................#.............#...........#..............", ".................................#........................#.#....#......#....................#....................................", ".#..................................................#.....#............................#..........#..................#.......#....", ".....................#.......................^............#...#...#..............#................#...............................", ".........#....................................#....................#...........#...........#..............#...................#...", "............................#...........#....................#.............#.......#.......................#...#....#.............", "............#.................#...........#..................................................................#............#.......", "...........#....................#.................................................#......#.#....................#.................", "..............................................................#..........#........#....#.........#................................", "...............#.........#......#..........#.#.............................................................................#....#.", "...............##...##..........................................................................................#.................", "..........................#.#...........................#......................#...............#..................................", ".....#...#..................#...........#....#.........#............................#.............................................", ".........................................................................................#...................#...#................", "............#.....................#...........#..................................................................#................", ".#.............................#............................#..........#......##...................................#.#............", "............#.........................................#...............................................#.#....#....................", ".........................................................#..#.#...............#......#....#........#..........................#...", "............................#..#.................#................................................................#...............", "............................#.........................................................................#....#..#............#..#...", "....#........#....#....#..#..............................#...#......................#.......................#............#........", "..#...............#............................................................................................................#..", "#.......................#...#............#..................................................#.........................#...........", ".....#.................#..#.............................................#...................................................##....", "...............#....................................#................#.........................#.#...........................#.#..", ".................#....#....#..............#....#.#....#...............#......................#...............#..................#.", "...........#...............................................................................#....#.................#...............", "...............#............................................###.#.#.#........#...................................#....#...........", "................#.................#........#............#..............#.....................#.............#......................", "....................................#.....................................................#....#..................................", "..#..#.............#......#.#..................#........................................#..........#...#..........................", "...............#........................#...............................#.............#...................#..#....#...............", "......#...........................#..............................................#..............................#...............#.", "...........#..............#................#....#..........#................#.......#..............#.........#.................#..", "......#....................................................................................................#......................", "...........#.............#...............#..........#....#.#...##..................#....................#.........................", ".......................................................#.#.....................................#..................#.......#.......", "...............#...............#...........................................................................#..................#...", "...............#......#.........#..................#.............................#..............................#.................", "...............#..........#..#.......#.............#............................#.#............................#..................", "..........#................................#..#...................................................................................", "..#................#............#........#...................................#...............##.................##....#.......#...", "..#.....................................................................#.............................................#.#.........", "#...#...#.......................##............#..............#.........#......................#........#.#........................", "..............................#......#.......#.........#...#..#.......................................................#.#.........", ".#..................#.#................................#..........#.......#..........................#............................", "...............#.....................#...#..........................................#..........#......#..........................."];

const mapData = rawMapData.map((element) => {
    return element.split("");
});

console.log(mapData.length);

function horizontalBuffers(table) {
    const length = table.length;
    table.forEach((element) => {
        element.push("O");
        element.unshift("O");
    });
}

function verticalBuffers(table) {
    const row = [];
    for (let index = 0; index < table[0].length; index += 1) {
        row.push("O");
    }
    table.unshift(row);
    table.push(row);
}
horizontalBuffers(mapData);
verticalBuffers(mapData);

let active = true;

function move(table, cIndex, rIndex, direction) {
    // +1 for down and right, -1 for up and left
    if (direction === "right") {
        table[cIndex][rIndex + 1] = "^";
        table[cIndex][rIndex] = "X";
    }
    if (direction === "left") {
        table[cIndex][rIndex - 1] = "^";
        table[cIndex][rIndex] = "X";
    }
    if (direction === "up") {
        table[cIndex - 1][rIndex] = "^";
        table[cIndex][rIndex] = "X";
    }
    if (direction === "down") {
        table[cIndex + 1][rIndex] = "^";
        table[cIndex][rIndex] = "X";
    }
    return true;
}

function canMove(table, cIndex, rIndex, direction) {
    if (direction === "right") {
        if (table[cIndex][rIndex + 1] === "O") {
            active = false;
            return false;
        }
        if (table[cIndex][rIndex + 1] === "#") {
            return false;
        }
    }
    if (direction === "left") {
        if (table[cIndex][rIndex - 1] === "O") {
            active = false;
            return false;
        }
        if (table[cIndex][rIndex - 1] === "#") {
            return false;
        }
    }
    if (direction === "up") {
        // console.log(table[cIndex - 1][rIndex] === "O");
        if (table[cIndex - 1][rIndex] === "O") {
            active = false;
            return false;
        }
        if (table[cIndex - 1][rIndex] === "#") {
            return false;
        }
    }
    if (direction === "down") {
        if (table[cIndex + 1][rIndex] === "O") {
            active = false;
            return false;
        }
        if (table[cIndex + 1][rIndex] === "#") {
            return false;
        }
    }
    return true;
}

function newCoordinates(cIndex, rIndex, direction) {
    if (direction === "right") {
        return [0, 1];
    }
    if (direction === "left") {
        return [0, -1];
    }
    if (direction === "up") {
        return [-1, 0];
    }
    if (direction === "down") {
        return [1, 0];
    }
    return true;
}

let count = 0;

function counter(table) {
    table.forEach((column) => {
        column.forEach((rowItem) => {
            count += rowItem === "X" && 1;
        });
    });
}

const directions = ["up", "right", "down", "left"];

function start() {
    let rowIndex = 0;
    mapData.forEach((row) => {
        if (row.includes("^")) {
            rowIndex = row.findIndex((element) => element === "^");
        }
    });
    const columnIndex = mapData.findIndex((row) => {
        return row.includes("^");
    });
    function recursiveLoop(table, cIndex, rIndex, directionIndex) {
        if (!active) {
            counter(table);
            return false;
        }

        let c = cIndex;
        let r = rIndex;

        while (canMove(table, c, r, directions[directionIndex])) {
            move(table, c, r, directions[directionIndex]);
            const newCoords = newCoordinates(cIndex, rIndex, directions[directionIndex]);
            c += newCoords[0];
            r += newCoords[1];
        }

        let newDirection = 0;
        if (directionIndex === 3) {
            newDirection = 0;
        } else {
            newDirection = directionIndex + 1;
        }
        return recursiveLoop(table, c, r, newDirection);
    }
    recursiveLoop(mapData, columnIndex, rowIndex, 0);
}

start();
console.log(mapData);

console.log(count);