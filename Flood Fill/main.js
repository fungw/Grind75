/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const queue = [[sr, sc]];
    const adjacent = [-1, 0, 1, 0, -1];
    const originalColour = image[sr][sc];

    if (originalColour === color) return image;

    while (queue.length > 0) {
        const [currI, currJ] = queue.shift();
        image[currI][currJ] = color;
        for (let k=0; k<=adjacent.length-2; k++) {
            const adjacentI = adjacent[k] + currI;
            const adjacentJ = adjacent[k+1] + currJ;
            if (adjacentI >= 0 && adjacentI < image.length
                && adjacentJ >= 0 && adjacentJ < image[sr].length
                    && image[adjacentI][adjacentJ] === originalColour) {
                queue.push([adjacentI, adjacentJ]);
            }
        }
    }

    return image;
};

/*
- BFS, with a queue (FIFO)
- Hardcoded array: [-1, 0, 1, 0, -1]
*/