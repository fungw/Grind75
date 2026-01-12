/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const set = new Set();
  let count = 0;

  for (const char of s) {
      if (set.has(char)) {
          count += 2;
          set.delete(char);
      } else {
          set.add(char);
      }
  }

  return count + (set.size > 0 ? 1 : 0);
};

test_case1 = "abccccdd";
test_case2 = "a";

console.log(longestPalindrome(test_case1));
console.log(longestPalindrome(test_case2));