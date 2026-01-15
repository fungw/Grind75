class Node {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function buildGraph(adjList) {
  if (!adjList || adjList.length === 0) return null;

  // Create all nodes first
  const nodes = adjList.map((_, i) => new Node(i + 1));

  // Assign neighbors
  adjList.forEach((neighbors, i) => {
    nodes[i].neighbors = neighbors.map(n => nodes[n - 1]);
  });

  // Return entry node (node 1)
  return nodes[0];
}

module.exports = buildGraph;
