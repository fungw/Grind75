const { buildGraph, Node } = require('../Utility/Graph/main.js');

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
    if (!node) return node;
    const hashMap = new Map();
    const queue = [node];

    while (queue.length > 0) {
        const processNode = queue.shift();
        const { val, neighbors } = processNode;
        if (!hashMap.has(processNode)) {
            hashMap.set(processNode, new Node(val, []));
        }

        neighbors.map((neighborNode) => {
            if (!hashMap.has(neighborNode)) {
                queue.push(neighborNode);
                hashMap.set(neighborNode, new Node(neighborNode.val, []));
            }
            const updateNeighbor = hashMap.get(processNode);
            updateNeighbor.neighbors.push(hashMap.get(neighborNode));
        });
    }
    return hashMap.get(node);
};

const test_case1 = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3]
];

const graph = buildGraph(test_case1);
// console.log(graph);
// console.log(cloneGraph(graph));
cloneGraph(graph);