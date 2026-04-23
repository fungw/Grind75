import buildTree from '../Utility/Binary Tree/main.js';

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
var isBalanced = function(root) {
    function getHeight(root) {
        if (root === null) return 0;

        const leftHeight = getHeight(root.left);
        if (leftHeight === -1) return -1;

        const rightHeight = getHeight(root.right);
        if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        return 1 + Math.max(leftHeight, rightHeight);
    }

    return getHeight(root) !== -1;
};

const tree = buildTree([3,9,20,null,null,15,7])
isBalanced(tree);