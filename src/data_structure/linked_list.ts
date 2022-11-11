class ListNode {
  value: number;
  next: ListNode;

  constructor(value: number) {
    this.value = value;
  }
}

class LinkedList {
  head: ListNode;
  size: number = 0;

  prepend(value: number) {
    const newNode = new ListNode(value);

    if (this.size === 0) {
      this.head = newNode;
    } else {
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
