/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = new Array(nums.length);
    result[0] = 1;

    for(var i=1; i<nums.length; i++) {
        result[i] = result[i-1] * nums[i-1];
    }

    let right = 1;
    for(var j=nums.length-1; j>=0; j--) {
        result[j] *= right;
        right *= nums[j];
    }

    return result;
};

const test_case1 = [1,2,3,4];
const test_case2 = [-1,1,0,-3,3];
console.log(productExceptSelf(test_case1));
console.log(productExceptSelf(test_case2));