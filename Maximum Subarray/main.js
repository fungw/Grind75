/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let result;
    for (const num of nums) {
        sum = sum + num;

        if (sum > result || result === undefined) result = sum;
        if (sum < 0) sum = 0;
    }
    return result;
};

// iterate through the array one by one, if it's below zero, reset
// at each iteration record the sum