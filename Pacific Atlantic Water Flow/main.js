/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const adjacent = [-1, 0, 1, 0, -1];
    const pacificStack = [];
    const atlanticStack = [];
    const result = [];
    const pacificVisited = new Set();
    const atlanticVisited = new Set();

    for (let j=0; j<heights[0].length; j++) {
        pacificStack.push([0, j]);
        atlanticStack.push([heights.length - 1, j]);
        pacificVisited.add(`${0},${j}`);
        atlanticVisited.add(`${heights.length - 1},${j}`);
    }
    for (let i=0; i<heights.length; i++) {
        pacificStack.push([i, 0]);
        atlanticStack.push([i, heights[0].length - 1]);
        pacificVisited.add(`${i},${0}`);
        atlanticVisited.add(`${i},${heights[0].length - 1}`);
    }

    function dfsTraverse(stack, visited) {
        while (stack.length > 0) {
            const [cellI, cellJ] = stack.pop();
            for (let k=0; k<=adjacent.length-2; k++) {
                const currI = cellI + adjacent[k];
                const currJ = cellJ + adjacent[k + 1];
                if (currI >= 0 && currJ < heights[cellI].length
                    && currJ >= 0 && currI < heights.length
                        && heights[currI][currJ] >= heights[cellI][cellJ]) {
                    if (!visited.has(`${currI},${currJ}`)) {
                        stack.push([currI, currJ]);
                        visited.add(`${currI},${currJ}`);
                    }
                }
            }
        }
    }

    dfsTraverse(pacificStack, pacificVisited);
    dfsTraverse(atlanticStack, atlanticVisited);

    for (let i=0; i<heights.length; i++) {
        for (let j=0; j<heights[i].length; j++) {
            if (pacificVisited.has(`${i},${j}`) && atlanticVisited.has(`${i},${j}`)) {
                result.push([i, j]);
            }
        }
    }

    return result;
};

/*
- DFS use a stack
- Instead of traversing from each cell, we traverse from each edge of Pacific and Atlantic Oceans
- Seed each Ocean first to nail down where we need to traverse
- For each edge cell, we see if it's adjacent cells are equal to higher to itself
    - If there is, we push that into the stack
    - Mark each visited cell with 'P' - we could do this in a hashmap, by stringifying the cell coordinates, and setting it as P (for pacific)
    - We repeat until it reaches no more that are equal or higher i.e. stack is empty
- We repeat this for Atlantic edge
    - For each cell, we check if P has been visited, add to result if it has
    - We check adjacents with the condition that they are equal or higher
 */