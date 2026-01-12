/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const map = new Map();
  let result = false;
  nums.forEach((x) => {
      if (map.get(x) !== undefined) {
          result = true;
          return;
      }
      map.set(x, x);
  });
  return result;
};

containsDuplicate([1,2,3,1]);
containsDuplicate([1,2,3,4]);
containsDuplicate([1,1,1,3,3,4,3,2,4,2]);