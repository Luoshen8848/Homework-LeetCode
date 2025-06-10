function findMinHeightTrees(n, edges) {
    if (n === 1) return [0]; 

    const graph = new Array(n).fill(0).map(() => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    let leaves = [];
    for (let i = 0; i < n; i++) {
        if (graph[i].length === 1) {
            leaves.push(i);
        }
    }
    let remainingNodes = n;
    while (remainingNodes > 2) {
        remainingNodes -= leaves.length; 
        const newLeaves = [];
        for (const leaf of leaves) {
            const neighbor = graph[leaf][0]; 
            graph[neighbor] = graph[neighbor].filter(node => node !== leaf); 
            if (graph[neighbor].length === 1) { 
                newLeaves.push(neighbor);
            }
        }
        leaves = newLeaves; 
    }

    return leaves; 
}
console.log(findMinHeightTrees(4, [[1,0],[1,2],[1,3]])); 
console.log(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]])); 
