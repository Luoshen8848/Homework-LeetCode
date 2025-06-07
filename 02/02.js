
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead; 
    let carry = 0; 
    while (l1 !== null || l2 !== null || carry > 0) {
        let val1 = l1 ? l1.val : 0; 
        let val2 = l2 ? l2.val : 0; 
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); 
        current.next = new ListNode(sum % 10); 
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next; 
    }
    return dummyHead.next; 
}
function buildList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}
function printList(node) {
    const result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
}