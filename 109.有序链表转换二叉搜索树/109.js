// 定义链表节点
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// 定义树节点
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

// 主函数
function sortedListToBST(head) {
    if (!head) return null;

    // 辅助函数：找到链表的中间节点
    const findMiddle = (start, end) => {
        let slow = start;
        let fast = start;

        while (fast !== end && fast.next !== end) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    };

    const buildTree = (start, end) => {
        if (start === end) return null;

        // 找到中间节点
        const mid = findMiddle(start, end);
        const root = new TreeNode(mid.val);

        // 递归构建左子树和右子树
        root.left = buildTree(start, mid);
        root.right = buildTree(mid.next, end);

        return root;
    };

    return buildTree(head, null);
}

// 测试示例
const head = new ListNode(-10, new ListNode(-3, new ListNode(0, new ListNode(5, new ListNode(9)))));
const bstRoot = sortedListToBST(head);
console.log(bstRoot);
