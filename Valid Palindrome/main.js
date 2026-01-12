/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const resolvedString = s.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();

  if (s.length === 1 || resolvedString.length === 0) {
    return true;
  }
  
  let leftPointer = 0;
  let rightPointer = resolvedString.length - 1;

  while (leftPointer !== rightPointer && leftPointer < rightPointer) {
    if (resolvedString[leftPointer] !== resolvedString[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }

  return true;
};

test_case1 = "A man, a plan, a canal: Panama";
test_case2 = "race a car";
test_case3 = " ";
test_case4 = ".,";
test_case5 = "aa";
test_case6 = "ab_a";

console.log(isPalindrome(test_case1));
console.log(isPalindrome(test_case2));
console.log(isPalindrome(test_case3));
console.log(isPalindrome(test_case4));
console.log(isPalindrome(test_case5));
console.log(isPalindrome(test_case6));