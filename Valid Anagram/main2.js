/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sSorted = s.split('').sort();
    const tSorted = t.split('').sort();
    let pointer = 0;

    if (s.length !== t.length) {
        return false;
    }

    while (pointer < s.length) {
        if (sSorted[pointer] !== tSorted[pointer]) {
            return false;
        }
        pointer++;
    }

    return true;
};

// an anagram are two words that have the same amount of letters
// ideally one loop - check if strings match in length first
// sort them both, then two pointers to check they're the same

const testCase1 = {
  s: 'anagram',
  t: 'nagaram',
};
const testCase2 = {
  s: 'rat',
  t: 'car',
};
const testCase3 = {
  s: 'bb',
  t: 'ac',
};
const testCase4 = {
  s: 'nl',
  t: 'cx',
};
console.log(isAnagram(testCase1.s, testCase1.t));
console.log(isAnagram(testCase2.s, testCase2.t));
console.log(isAnagram(testCase3.s, testCase3.t));
console.log(isAnagram(testCase4.s, testCase4.t));