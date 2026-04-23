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
    function traverse(node, p, q) {
        if (node === null) return null;
        if (node === p) return p;
        if (node === q) return q;

        const left = traverse(node.left, p, q);
        const right = traverse(node.right, p, q);

        if (left && right) {
            return node;
        } 
        
        return left || right;
    }

    return traverse(root, p, q);
};