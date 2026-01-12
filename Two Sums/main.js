/**
 * Improvements:
 * - Slice the num array of all numbers greater than the target
 * - Sort the array
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const results = [];
    const arrayLength = nums.length;

    for (var i=0; i<arrayLength; i++) {
        var firstNumber = nums[i];
        for (var j=i+1; j<arrayLength; j++) {
            var secondNumber = nums[j];
            if ((firstNumber + secondNumber) == target) {
                results.push(i, j);
            }
        }
    }

    return results;
};

test_case1 = [2,7,11,15]
test_case1_target = 9
test_case2 = [3,2,4]
test_case2_target = 6
test_case3 = [3,3]
test_case3_target = 6

console.log(twoSum(test_case1, test_case1_target));
console.log(twoSum(test_case2, test_case2_target));
console.log(twoSum(test_case3, test_case3_target));
