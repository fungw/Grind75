/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // FILO stack
    var stack = [];
    const operand = ['+', '-', '*', '/'];

    for (const token of tokens) {
        if (operand.includes(token)) {
            const num1 = stack.pop();
            const num2 = stack.pop();
            switch (token) {
                case '+':
                    stack.push(num1 + num2);
                    break;
                case '-':
                    stack.push(num2 - num1);
                    break;
                case '*':
                    stack.push(num1 * num2);
                    break;
                default:
                    stack.push(Math.trunc(num2 / num1));
                    break;
            }
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack[0];
};

const test_case1 = ["2","1","+","3","*"];
const test_case2 = ["4","13","5","/","+"];
const test_case3 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
const test_case4 = ["4","-2","/","2","-3","-","-"];
console.log(evalRPN(test_case1));
console.log(evalRPN(test_case2));
console.log(evalRPN(test_case3));
console.log(evalRPN(test_case4));