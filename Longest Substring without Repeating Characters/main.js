/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLenCounter = 0;
    let left = 0;
    let trackMap = new Map();

    for (let right=0; right<s.length; right++) {
        if (trackMap.has(s[right])) {
            const lastSeenIndex = trackMap.get(s[right]);
            if (lastSeenIndex >= left) {
                left = lastSeenIndex + 1;
            }
            trackMap.set(s[right], right);
        } else {
            trackMap.set(s[right], right);
        }

        maxLenCounter = Math.max(maxLenCounter, right - left + 1);
    }
    
    return maxLenCounter;
};

const testCase1 = "abcabcbb";
const testCase2 = "bbbbb";
const testCase3 = "pwwkew";

console.log(lengthOfLongestSubstring(testCase1));
console.log(lengthOfLongestSubstring(testCase2));
console.log(lengthOfLongestSubstring(testCase3));
