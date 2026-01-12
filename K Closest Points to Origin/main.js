/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  const kPointHash = [];
  const kIndex = [];
  const resultant = [];
  points.forEach((point) => {
      const distance = Math.sqrt(
          Math.pow(Math.abs(0 - point[0]), 2) + Math.pow(Math.abs(0 - point[1]), 2)
      );
      kPointHash.push({ distance, point });
      kIndex.push(distance);
  });

  const kIndexSorted = kIndex.sort((a, b) => a - b);
  for (var i=0; i<k; i++) {
      const index = kPointHash.findIndex((x) => x.distance === kIndexSorted[i]);
      resultant.push(kPointHash.find((x) => x.distance === kIndexSorted[i]).point);
      kPointHash.splice(index, 1);
  }

  return resultant;
};

const test_case1 = [[1,3],[-2,2]]
const k_test_case1 = 1;
const test_case2 = [[3,3],[5,-1],[-2,4]];
const k_test_case2 = 2;
const test_case3 = [[0,1],[1,0]]
const k_test_case3 = 2;
console.log(kClosest(test_case3, k_test_case3));