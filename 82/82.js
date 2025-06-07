class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
function deleteDuplicates(head) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy; 
    let current = head;
    while (current) {
        if (current.next && current.val === current.next.val) {
            while (current.next && current.val === current.next.val) {
                current = current.next;
            }
            prev.next = current.next;
        } else {
            prev = prev.next;
        }
        current = current.next;
    }
    return dummy.next; 
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
