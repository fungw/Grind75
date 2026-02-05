/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const DIRECTION = [-1, 0, 1, 0, -1];
    let minute = 0;
    const FRESH = 1;
    const ROTTEN = 2;
    const QUEUE = [];
    const FRESH_QUEUE = [];

    function startTimer() {
        const cell = QUEUE.shift();
        if (cell === null) {
            if (QUEUE.length === 0) return;
            minute++;
            QUEUE.push(null);
            return startTimer();
        }
        const [i, j] = cell;

        for (k=0; k<DIRECTION.length-1; k++) {
            const iIndex = i + DIRECTION[k];
            const jIndex = j + DIRECTION[k+1];
            if (grid[iIndex] &&
                grid[iIndex][jIndex] &&
                (grid[iIndex][jIndex] === FRESH)
            ) {
                grid[iIndex][jIndex] = ROTTEN;
                QUEUE.push([iIndex, jIndex]);
            }
        }

        if (QUEUE.length >= 1) {
            startTimer();
        }
    }
    
    for (var i=0; i<grid.length; i++) {
        for (var j=0; j<grid[i].length; j++) {
            if (grid[i][j] === ROTTEN) {
                QUEUE.push([i, j]);
            }

            if (grid[i][j] === FRESH) {
                FRESH_QUEUE.push([i, j]);
            }
        }
    }

    if (FRESH_QUEUE.length === 0) return 0;
    if (QUEUE.length >= 1) {
        QUEUE.push(null);
        startTimer();
    }

    for (var u=0; u<FRESH_QUEUE.length; u++) {
        const [p, q] = FRESH_QUEUE[u];
        if (grid[p][q] === FRESH) {
            minute = -1;
            break;
        }
    }

    return minute;
};

const test_case1 = [[2,1,1],[1,1,0],[0,1,1]];
console.log(orangesRotting(test_case1));
const test_case2 = [[2,1,1],[0,1,1],[1,0,1]]
console.log(orangesRotting(test_case2));
const test_case3 = [[0,2]]
console.log(orangesRotting(test_case3));
const test_case4 = [[0]];
console.log(orangesRotting(test_case4));
const test_case5 = [[0,2,2]];
console.log(orangesRotting(test_case5));
const test_case6 = [[2,1,1],[1,1,0],[0,1,1]];
console.log(orangesRotting(test_case6));
const test_case7 = [[1,2]];
console.log(orangesRotting(test_case7));