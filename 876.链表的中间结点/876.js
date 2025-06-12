// 定义链表节点
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function middleNode(head) {
    let slow = head; // 慢指针
    let fast = head; // 快指针

    // 使用快慢指针找中间节点
    while (fast && fast.next) {
        slow = slow.next; // 慢指针移动一步
        fast = fast.next.next; // 快指针移动两步
    }

    return slow; // 当快指针到达末尾时，慢指针在中间节点
}

// 测试示例
const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));

const result1 = middleNode(head1);
const result2 = middleNode(head2);

// 打印结果链表
const printList = (head) => {
    let current = head;
    const output = [];
    while (current) {
        output.push(current.val);
        current = current.next;
    }
    return output;
};

console.log(printList(result1)); // 输出: [3, 4, 5]
console.log(printList(result2)); // 输出: [4, 5, 6]
