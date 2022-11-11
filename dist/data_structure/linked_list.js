class ListNode {
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    constructor() {
        this.size = 0;
    }
    prepend(value) {
        const newNode = new ListNode(value);
        if (this.size === 0) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
}
const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
