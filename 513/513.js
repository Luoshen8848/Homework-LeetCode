function findBottomLeftValue(root) {
    let maxDepth = -1;
    let bottomLeftValue = root.val;

    function dfs(node, depth) {
        if (!node) return;
        if (depth > maxDepth) {
            maxDepth = depth;
            bottomLeftValue = node.val;
        }
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    dfs(root, 0); 
    return bottomLeftValue; 
}
