/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 1) {
        return target === nums[0] ? 0 : -1;
    }
    function divideAndConquer(arr, min, max) {
        if (min > max) return -1;
        if (min === max) {
            return arr[min] === target ? min : -1;
        }

        const mid = Math.floor((max - min) / 2) + min;
        if (arr[mid] === target) {
            return mid;
        }

        if (arr[min] < arr[mid]) {
            if (target >= arr[min] && target <= arr[mid]) {
                return divideAndConquer(arr, min, mid);
            } else {
                return divideAndConquer(arr, mid + 1, max);
            }
        } else {
            if (target >= arr[mid + 1] && target <= arr[max]) {
                return divideAndConquer(arr, mid + 1, max);
            } else {
                return divideAndConquer(arr, min, mid);
            }
        }
    }

    return divideAndConquer(nums, 0, nums.length - 1);
};

const test_case1_nums = [4,5,6,7,0,1,2];
const test_case1_target = 0;
console.log(search(test_case1_nums, test_case1_target));
const test_case2_nums = [4,5,6,7,0,1,2];
const test_case2_target = 3;
console.log(search(test_case2_nums, test_case2_target));
const test_case3_nums = [1];
const test_case3_target = 0;
console.log(search(test_case3_nums, test_case3_target));
const test_case4_nums = [5,1,3];
const test_Case4_target = 1;
console.log(search(test_case4_nums, test_Case4_target));