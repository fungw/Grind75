/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const aArr = a.split('');
    const bArr = b.split('');
    let carry = 0;
    let result = [];

    while (aArr.length > 0 || bArr.length > 0 || carry) {
        const aValue = aArr.pop() ?? 0;
        const bValue = bArr.pop() ?? 0;

        const sum = +aValue + +bValue + carry;
        carry = sum >= 2 ? 1 : 0;

        result.unshift(sum % 2);
    }

    return result.join('');
};