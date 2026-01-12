/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let sums = [];
  for (var i=0; i<nums.length; i++) {
    sums.push(summations(nums, nums[i], i));
  }

  function summations(nums, root, index) {
    console.log(`Array ${nums}, Root: ${root}, Index: ${index}`);
    for (var j=0; j<nums.length; j++) {
      if (root !== j) {
        nums[root] + 
      }
    }
  }
};

test_case1 = [-1,0,1,2,-1,-4];
test_case2 = [0,1,1];
test_case3 = [0,0,0];

// console.log(threeSum(test_case1));
// console.log(threeSum(test_case2));
// console.log(threeSum(test_case3));

threeSum(test_case1);
threeSum(test_case2);
threeSum(test_case3);