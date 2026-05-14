/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const adjacent = [-1, 0, 1, 0, -1];
    let freshCounter = 0;
    let rottenQueue = [];
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            const currentCell = grid[i][j];
            if (currentCell === 1) {
                freshCounter++;
            } else if (currentCell === 2) {
                rottenQueue.push([i, j]);
            }
        }
    }

    if (freshCounter === 0) return 0;

    let minutes = 0;
    while (rottenQueue.length > 0) {
        const size = rottenQueue.length;
        let rotted = false;
        for (let i=0; i<size; i++) {
            const [currI, currJ] = rottenQueue.shift();
            for (let j=0; j<=adjacent.length-2; j++) {
                const adjacentI = currI + adjacent[j];
                const adjacentJ = currJ + adjacent[j + 1];
                if (adjacentI >= 0 && adjacentI < grid.length
                    && adjacentJ >= 0 && adjacentJ < grid[0].length
                    && grid[adjacentI][adjacentJ] === 1) {
                    grid[adjacentI][adjacentJ] = 2;
                    rotted = true;
                    freshCounter--;
                    rottenQueue.push([adjacentI, adjacentJ]);
                }
            }
        }
        if (rotted) minutes++;
    }

    return freshCounter === 0 ? minutes : -1;
};

/*
- BFS, seed all rotten oranges - these are BFS starting point
- For fresh oranges, as we seed the rotten, we also count how many fresh there are
- At each step, using the seeded rotten oranges, and make rotten all fresh adjacent to it
- Next minute, we shift from rotten seed and reiterate
*/