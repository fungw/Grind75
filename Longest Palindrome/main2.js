/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map();

    for (const char of s) {
        map.set(char, (map.get(char) ?? 0) + 1);
    }

    let longest = 0;
    let odd = 0;
    for (const count of map.values()) {
        longest += Math.floor(count / 2) * 2;
        if (count % 2 === 1) {
            odd = 1;
        }
    }

    return longest + odd;
};

// the conditions of a palindrome are all even
// or all even and one odd
// when looping through the frequency graph, we're checking the amount of even pairs, and +1 if there is an odd

test_case1 = "abccccdd";
test_case2 = "ccc";

console.log(longestPalindrome(test_case1));
console.log(longestPalindrome(test_case2));