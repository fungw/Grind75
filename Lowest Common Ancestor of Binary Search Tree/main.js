/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function traverse(node, pNode, qNode) {
        if (node.val > pNode.val && node.val > qNode.val) {
            return traverse(node.left, pNode, qNode);
        }

        if (node.val < pNode.val && node.val < qNode.val) {
            return traverse(node.right, pNode, qNode);
        }
        
        return node;
    }
    
    return traverse(root, p, q)
};