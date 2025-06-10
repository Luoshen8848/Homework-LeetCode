class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) return null;

    const rootVal = postorder[postorder.length - 1]; 
    const root = new TreeNode(rootVal); 

    const rootIndex = inorder.indexOf(rootVal); 

    const leftInorder = inorder.slice(0, rootIndex); 
    const rightInorder = inorder.slice(rootIndex + 1); 

    const leftPostorder = postorder.slice(0, leftInorder.length); 
    const rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1); 

    root.left = buildTree(leftInorder, leftPostorder);
    root.right = buildTree(rightInorder, rightPostorder);

    return root; 
}

