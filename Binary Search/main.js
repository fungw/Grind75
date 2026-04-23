/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function binarySearch(low, high) {
        if (low > high) return -1;
        const mid = Math.floor((high + low) / 2);
        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            return binarySearch(mid + 1, high);
        }

        return binarySearch(low, mid - 1);
    }

    return binarySearch(0, nums.length - 1);
};

search([-1,0,3,5,9,12], 9);