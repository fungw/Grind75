/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let index = 0;
    let sHash = 1;
    let tHash = 1;
    while(index < s.length) {
      sHash *= s.charCodeAt(index);
      tHash *= t.charCodeAt(index);
      index++;
    }
    return sHash === tHash;
};

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