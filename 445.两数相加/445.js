// 定义链表节点
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function addTwoNumbers(l1, l2) {
    // 反转链表
    const reverseList = (head) => {
        let prev = null, current = head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev; // 返回新的头节点
    };

    l1 = reverseList(l1);
    l2 = reverseList(l2);

    let dummyHead = new ListNode(0); // 哨兵节点
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;

    // 逐位相加
    while (p || q || carry) {
        const x = p ? p.val : 0; // 如果 p 为空，就取 0
        const y = q ? q.val : 0; // 如果 q 为空，就取 0
        const sum = x + y + carry; // 计算当前位的和
        carry = Math.floor(sum / 10); // 计算进位
        current.next = new ListNode(sum % 10); // 创建新节点

        current = current.next; // 移动到新节点
        if (p) p = p.next; // 移动 p 指针
        if (q) q = q.next; // 移动 q 指针
    }

    // 反转结果链表
    return reverseList(dummyHead.next);
}

// 测试示例
const l1 = new ListNode(7, new ListNode(2, new ListNode(4, new ListNode(3))));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const result = addTwoNumbers(l1, l2);

// 打印结果链表
let current = result;
const output = [];
while (current) {
    output.push(current.val);
    current = current.next;
}
console.log(output); // 输出: [7, 8, 0, 7]
