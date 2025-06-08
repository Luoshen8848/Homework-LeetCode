class Node {
    constructor(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

function copyRandomList(head) {
    if (!head) return null;
    let current = head;
    while (current) {
        const newNode = new Node(current.val);
        newNode.next = current.next;
        current.next = newNode;
        current = newNode.next;
    }
    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next; 
        }
        current = current.next.next; 
    }
    current = head;
    const copiedHead = head.next;
    let copiedCurrent = copiedHead;

    while (current) {
        current.next = current.next.next; 
        if (copiedCurrent.next) {
            copiedCurrent.next = copiedCurrent.next.next; 
        }
        current = current.next;
        copiedCurrent = copiedCurrent.next;
    }

    return copiedHead; 
}
function buildList(arr) {
    const nodes = arr.map(([val, _]) => new Node(val));
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] !== null) {
            nodes[i].random = nodes[arr[i][1]];
        }
        if (i < arr.length - 1) {
            nodes[i].next = nodes[i + 1];
        }
    }
    return nodes[0] || null;
}

function printList(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push([current.val, current.random ? current.random.val : null]);
        current = current.next;
    }
    console.log(result);
}