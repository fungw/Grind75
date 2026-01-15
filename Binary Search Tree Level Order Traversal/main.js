const buildTree = require('../Utility/Binary Tree/main.js');

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    const queue = [root];
    const result = [];
    let level = 0;
    let nodesOnLevel = 1;
    let nodesNextLevel = 0;
    let node = root;
    
    while (queue.length) {
        node = queue.shift();
        nodesOnLevel--;
        result[level] ? result[level].push(node.val) : result.push([node.val]);

        if (node.left) {
            queue.push(node.left);
            nodesNextLevel++;
        }
        if (node.right) {
            queue.push(node.right);
            nodesNextLevel++;
        }
        
        if (nodesOnLevel === 0) {
            level++;
            nodesOnLevel = nodesNextLevel;
            nodesNextLevel = 0;
        }
    }

    return result;
};

const test_case1 = buildTree([3,9,20,null,null,15,7]);
const test_case2 = buildTree([1]);
const test_case3 = buildTree([]);
const test_case4 = buildTree([3,9,20,8,10,15,7]);

console.log(levelOrder(test_case1));
console.log(levelOrder(test_case2));
console.log(levelOrder(test_case3));
console.log(levelOrder(test_case4));