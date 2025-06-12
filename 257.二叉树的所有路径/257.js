class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function binaryTreePaths(root) {
    const paths = []; // 存储所有路径
    const findPaths = (node, path) => {
        if (!node) return; // 如果节点为空，返回
        
        // 将当前节点的值添加到路径
        path += node.val;

        // 如果是叶子节点，记录路径
        if (!node.left && !node.right) {
            paths.push(path); // 记录完整路径
        } else {
            path += '->'; // 添加连接符，继续遍历
            findPaths(node.left, path); // 遍历左子树
            findPaths(node.right, path); // 遍历右子树
        }
    };

    findPaths(root, ''); // 从根节点开始
    return paths; // 返回所有路径
}
