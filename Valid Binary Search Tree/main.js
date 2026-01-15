const buildTree = require('../Binary Tree/main.js');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    function traverse(node, low, high) {
        if (node.val <= low || node.val >= high) {
            return false;
        }

        const leftOk = node.left ? traverse(node.left, low, node.val) : true;
        const rightOk = node.right ? traverse(node.right, node.val, high) : true;

        return leftOk && rightOk;
    }

    return traverse(root, -Infinity, Infinity);
};

const test_case1 = buildTree([2,1,3]); // true
const test_case2 = buildTree([5,1,4,null,null,3,6]); // false
const test_case3 = buildTree([2,2,2]); // true
const test_case4 = buildTree([5,4,6,null,null,3,7]); // false
const test_case5 = buildTree([1,1]); // false

console.log(isValidBST(test_case1));
console.log(isValidBST(test_case2));
console.log(isValidBST(test_case3));
console.log(isValidBST(test_case4));
console.log(isValidBST(test_case5));