/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let aLength = a.length - 1;
  let bLength = b.length - 1;
  let carry = 0;
  let result = [];
  while (aLength > 0 || bLength > 0 || carry) {
      let sum = a[aLength] + b[bLength] + carry;
      console.log(sum, aLength, bLength);
      aLength > 0 && aLength--;
      bLength > 0 && bLength--;
  }

  return result.reverse().join('');
};

addBinary('11', '1');
// addBinary('1010', '1011');