/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(set) {
    const pairs = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    const stack = [];
    for (const paren of set) {
        if (pairs[paren]) {
            stack.push(pairs[paren]);
        } else {
            if (stack.pop() !== paren) return false;
        }
    };
    return stack.length === 0;
};

test_case1 = "()";
test_case2 = "()[]{}";
test_case3 = "(]";
test_case4 = "([])";

console.log(isValid(test_case1));
console.log(isValid(test_case2));
console.log(isValid(test_case3));
console.log(isValid(test_case4));