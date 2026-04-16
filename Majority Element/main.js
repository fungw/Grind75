/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    nums.forEach((num) => map.set(num, (map.get(num) ?? 0) + 1));
    let majority, highestCount;

    for (const [key, count] of map.entries()) {
        if (majority == undefined) {
            highestCount = count;
            majority = key;
            continue;
        }

        if (count > highestCount) {
            highestCount = count;
            majority = key;
        }
    }

    return majority;
};

// Use a map to record each count of the nums entries
// at the end, check which map value, has the highest occurence

test_case1 = [32,41,21,29,7,53,97,76,71,53,53,53,72,53,53,14,22,53,67,53,53,53,54,98,53,46,53,53,62,53,76,20,60,53,31,53,53,53,95,27,53,53,53,53,36,59,40,53,53,64,53,53,53,21,53,51,53,53,2,53,53,53,53,53,50,53,53,53,23,88,3,53,61,19,53,68,53,35,42,53,53,48,34,54,53,75,53,53,50,44,92,41,71,53,53,82,53,53,14,53];
test_case2 = [2,2,1,1,1,2,2];

console.log(majorityElement(test_case1));
console.log(majorityElement(test_case2));