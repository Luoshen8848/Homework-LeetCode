class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
function deleteDuplicates(head) {
    if (!head) return head; 

    let current = head; 

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next; 
            current = current.next; 
        }
    }

    return head; 
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