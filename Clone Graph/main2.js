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
    const queue = [];
    const hashMap = new Map();

    if (!node) return null;

    const firstNewNode = new Node(node.val, []);
    queue.push(node);
    hashMap.set(node, firstNewNode);

    while (queue.length > 0) {
        const currentNode = queue.shift();
        for (let i=0; i<currentNode.neighbors.length; i++) {
            const neighbor = currentNode.neighbors[i];
            if (!hashMap.get(neighbor)) {
                const newNode = new Node(neighbor.val, []);
                queue.push(neighbor);
                hashMap.set(neighbor, newNode);
            }
            hashMap.get(currentNode).neighbors.push(hashMap.get(neighbor));
        }
    }
    return hashMap.get(node);
};

/*
- BFS traversal - use queue to push original nodes to
- Use a hashMap to keep track of original node visited
*/