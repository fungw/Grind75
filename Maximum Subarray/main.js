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

test_case1 = [-2,1,-3,4,-1,2,1,-5,4]
test_case2 = [1];
test_case3 = [5,4,-1,7,8]

console.log(maxSubArray(test_case1));
console.log(maxSubArray(test_case2));
console.log(maxSubArray(test_case3));