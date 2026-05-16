/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];

    function houseScan(nums) {
        let prev2 = 0;
        let prev1 = 0;

        for (let i=0; i<nums.length; i++) {
            let current = Math.max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }

    const omitLast = houseScan(nums.slice(0, nums.length - 1));
    const omitFirst = houseScan(nums.slice(1));
    return omitLast > omitFirst ? omitLast : omitFirst;
};