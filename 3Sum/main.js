/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (var i=0; i<nums.length-2; i++) {
        let pointerA = i + 1;
        let pointerB = nums.length - 1;

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        while (pointerA < pointerB) {
            const sum = nums[i] + nums[pointerA] + nums[pointerB];
            if (sum === 0) {
                result.push([nums[i], nums[pointerA], nums[pointerB]]);
                pointerA++;
                pointerB--;

                while (pointerA < pointerB && nums[pointerA] === nums[pointerA - 1]) pointerA++;
                while (pointerA < pointerB && nums[pointerB] === nums[pointerB + 1]) pointerB--;
            } else if (sum < 0) {
                pointerA++;
            } else if (sum > 0) {
                pointerB--;
            }
        }
    }
    return result;
};

test_case1 = [-1,0,1,2,-1,-4];
test_case2 = [0,1,1];
test_case3 = [0,0,0];
test_case4 = [-5, -1, 0, 1, 4];

console.log(threeSum(test_case1));
console.log(threeSum(test_case2));
console.log(threeSum(test_case3));
console.log(threeSum(test_case4));