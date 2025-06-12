class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function flatten(root) {
    if (!root) return;

    // 先递归展开左子树
    flatten(root.left);
    // 递归展开右子树
    flatten(root.right);

    // 保存右子树
    const rightSubtree = root.right;
    // 将左子树放到右边
    root.right = root.left;
    root.left = null; // 左子树置为 null
    // 找到新右子树的末尾
    let current = root;
    while (current.right) {
        current = current.right;
    }
    // 连接原来的右子树
    current.right = rightSubtree;
}
