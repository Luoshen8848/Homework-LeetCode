// 定义链表节点
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function oddEvenList(head) {
    if (!head || !head.next) return head; // 如果链表为空或只有一个节点

    let odd = head; // 奇数节点的头节点
    let even = head.next; // 偶数节点的头节点
    let evenHead = even; // 保存偶数链表的头节点

    // 遍历链表
    while (even && even.next) {
        odd.next = even.next; // 将奇数节点的下一个指向下一个奇数节点
        odd = odd.next; // 移动奇数节点指针
        even.next = odd.next; // 将偶数节点的下一个指向下一个偶数节点
        even = even.next; // 移动偶数节点指针
    }

    odd.next = evenHead; // 将奇数链表的尾部连接到偶数链表的头部

    return head; // 返回新的头节点
}

// 测试示例
const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const head2 = new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7)))))));

console.log(oddEvenList(head1)); // 输出: 1 -> 3 -> 5 -> 2 -> 4
console.log(oddEvenList(head2)); // 输出: 2 -> 3 -> 6 -> 7 -> 1 -> 5 -> 4
