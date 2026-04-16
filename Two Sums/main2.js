/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i=0; i<nums.length; i++) {
        const value = nums[i];
        const diff = target - value;
        const exists = map.get(diff);

        if (exists === undefined) {
            map.set(value, i);
            continue;
        }

        return [i, exists];
    };
};

// loop through once
// put each element into map, key-value is value-index
// subtract current element from target, and check if in map
// optimise by ignoring all elements above target

test_case1 = [-3,4,3,90]
test_case1_target = 0
test_case2 = [3,2,4]
test_case2_target = 6
test_case3 = [3,3]
test_case3_target = 6

console.log(twoSum(test_case1, test_case1_target));
console.log(twoSum(test_case2, test_case2_target));
console.log(twoSum(test_case3, test_case3_target));