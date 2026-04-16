/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let j=0; j<n; j++) {
        for (let i=m-1; i>=0; i--) {
            if (nums2[j] < nums1[i]) {
                nums1[i + 1] = nums1[i];
                nums1[i] = nums2[j];
            }
        }
    }

    return nums1;
};

const test_case1_nums1 = [2,6,8,0,0,0];
const test_case1_nums2 = [3,5,7];
console.log(merge(test_case1_nums1, 6, test_case1_nums2, 3));