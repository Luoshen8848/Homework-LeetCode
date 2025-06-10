class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(preorder, inorder) {
    if (preorder.length === 0) return null;

    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);
    const rootIndex = inorder.indexOf(rootVal);

    const leftInorder = inorder.slice(0, rootIndex);
    const rightInorder = inorder.slice(rootIndex + 1);

    const leftPreorder = preorder.slice(1, leftInorder.length + 1);
    const rightPreorder = preorder.slice(leftInorder.length + 1);

    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
}