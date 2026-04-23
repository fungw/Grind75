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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiamater = 0;
    
    function getHeight(node) {
        if (node === null) return 0;

        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);

        const diamater = leftHeight + rightHeight;
        if (diamater > maxDiamater) maxDiamater = diamater;

        return 1 + Math.max(leftHeight, rightHeight);
    }

    getHeight(root);
    return maxDiamater;
};