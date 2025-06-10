class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function recoverTree(root) {
    let first = null;
    let second = null;
    let prev = null;

    function inorder(node) {
        if (!node) return;

        inorder(node.left);
        if (prev && node.val < prev.val) {

            if (!first) {
                first = prev;
            }
            second = node;
        }
        prev = node; 

        inorder(node.right);
    }

    inorder(root); 

    if (first && second) {
        const temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
}