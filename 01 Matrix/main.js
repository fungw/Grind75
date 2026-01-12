/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  let rows = mat.length;
  let cols = mat[0].length;
  let resultant = Array.from(
    { length: rows },
    () => Array.from({ length: cols }, () => -1)
  );
  const queue = [];
  const directionCheck = [-1, 0, 1, 0, -1];

  for (let i=0; i<rows; i++) {
    for (let j=0; j<cols; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        resultant[i][j] = 0;
      }
    }
  }

  while (queue.length !== 0) {
    const coord = queue.shift();
    const xCurrent = coord[0];
    const yCurrent = coord[1];
    for (let k=0; k<4; k++) {
        const xDirection = xCurrent + directionCheck[k];
        const yDirection = yCurrent + directionCheck[k + 1];

        if (xDirection >= 0 && xDirection < rows
            && yDirection >= 0 && yDirection < cols
            && resultant[xDirection][yDirection] === -1) {
            
            resultant[xDirection][yDirection] = mat[xCurrent][yCurrent] + 1;

            queue.push([xDirection, yDirection]);
        }
    }
  };

  // debugger;

  return resultant;
};

const mat = [[0,0,0],[0,1,0],[1,1,1]];
console.log(updateMatrix(mat));