/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length <= 1) return false;
    const sArr = s.split('');
    const stack = [];
    for (const char of sArr) {
        const resolveBracket = nextBracket(char);
        if (resolveBracket !== '') {
            stack.push(resolveBracket);
        } else if (char !== stack.pop()) {
            return false;
        }
    }
    return stack.length > 0 ? false : true;
};

function nextBracket (bracket) {
    let resolvedBracket;
    switch (bracket) {
        case '(':
            resolvedBracket = ')';
            break;
        case '[':
            resolvedBracket = ']';
            break;
        case '{':
            resolvedBracket = '}';
            break;
        default:
            resolvedBracket = '';
            break;
    }
    return resolvedBracket;
}