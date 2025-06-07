class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function partition(head, x) {
    let lessHead = new ListNode(0); 
    let greaterHead = new ListNode(0); 
    
    let less = lessHead; 
    let greater = greaterHead; 
    
    let current = head; 
    
    while (current) {
        if (current.val < x) {
            less.next = current; 
            less = less.next; 
        } else {
            greater.next = current; 
            greater = greater.next; 
        }
        current = current.next; 
    }

    greater.next = null;

    less.next = greaterHead.next; 
    
    return lessHead.next; 
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