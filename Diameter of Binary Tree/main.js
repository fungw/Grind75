// Tree node structure
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Builds a binary tree from a LeetCode array (level-order)
// Example input: [1,2,3,4,5,null,null]
function buildTree(arr) {
  if (!arr.length) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (i < arr.length) {
      let current = queue.shift();

      if (arr[i] !== null && arr[i] !== undefined) {
          current.left = new TreeNode(arr[i]);
          queue.push(current.left);
      }
      i++;

      if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
          current.right = new TreeNode(arr[i]);
          queue.push(current.right);
      }
      i++;
  }

  return root;
}

var diameterOfBinaryTree = function(root) {
  let diameter = 0;
  
  function traverse(root) {
      if (!root) return 0;
      const leftHeight = traverse(root.left);
      const rightHeight = traverse(root.right);
      diameter = Math.max(diameter, leftHeight + rightHeight);
      return Math.max(leftHeight, rightHeight) + 1;
  }

  traverse(root);
  return diameter;
};

const root = buildTree([1, 2, 3, 4, 5]);

// Put a breakpoint here:
console.log(diameterOfBinaryTree(root));