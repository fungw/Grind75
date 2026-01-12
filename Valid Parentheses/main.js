/**
 * Brainstorm:
 * - Stack
 * - Create function that returns the inverse the parentheses
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(parenString) {
    const stack = [];
    
    function getInverse(paren) {
        switch (paren) {
            case '(':
                return ')';
            case '[':
                return ']';
            case '{':
                return '}';
        }
    }

    for (var i=0; i<parenString.length ; i++) {
        if (stack.length === 0) {
            stack.push(parenString[i]);
        } else {
            leadingParen = stack.pop();
            inverseParen = getInverse(leadingParen);
            if (parenString[i] !== inverseParen) {
                stack.push(leadingParen);
                stack.push(parenString[i]);
            }
        }
    };

    if (stack.length === 0) {
        return true;
    }

    return false;
};

test_case1 = "()";
test_case2 = "()[]{}";
test_case3 = "(]";
test_case4 = "([])";

console.log(isValid(test_case1));
console.log(isValid(test_case2));
console.log(isValid(test_case3));
console.log(isValid(test_case4));
