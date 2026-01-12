/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
* @param {TreeNode} root
* @return {TreeNode}
*/
var invertTree = function(root) {
  if (!root) return null;
  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};

// Helper function to build a binary tree from an array (BFS order)
function buildTree(array) {
  if (!array.length) return null;

  let root = new TreeNode(array[0]);
  let queue = [root];
  let i = 1;

  while (queue.length > 0 && i < array.length) {
      let current = queue.shift();

      if (array[i] !== null) {
          current.left = new TreeNode(array[i]);
          queue.push(current.left);
      }
      i++;

      if (i < array.length && array[i] !== null) {
          current.right = new TreeNode(array[i]);
          queue.push(current.right);
      }
      i++;
  }

  return root;
}

// Helper function to convert a binary tree to an array (BFS order)
function treeToArray(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
      let current = queue.shift();
      if (current) {
          result.push(current.val);
          queue.push(current.left);
          queue.push(current.right);
      } else {
          result.push(null);
      }
  }

  // Trim trailing nulls for clean output
  while (result[result.length - 1] === null) {
      result.pop();
  }

  return result;
}

// Test cases
const testCases = [
  {
      input: [4, 2, 7, 1, 3, 6, 9],
      expected: [4, 7, 2, 9, 6, 3, 1],
  },
  {
      input: [2, 1, 3],
      expected: [2, 3, 1],
  },
  {
      input: [],
      expected: [],
  },
  {
      input: [1, null, 2],
      expected: [1, 2],
  },
];

// Run test cases
testCases.forEach(({ input, expected }, index) => {
  const root = buildTree(input);
  const inverted = invertTree(root);
  const result = treeToArray(inverted);
  console.log(`Test Case ${index + 1}:`, result);
  console.log(`Expected:`, expected);
  console.log(result.join() === expected.join() ? "✅ Passed" : "❌ Failed");
});