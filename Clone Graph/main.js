const buildGraph = require('../Utility/Graph/main.js');

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    return node;
};

const test_case1 = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3]
];

const graph = buildGraph(test_case1);
console.log(cloneGraph(graph));