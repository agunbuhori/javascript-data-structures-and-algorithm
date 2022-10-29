class ListNode {
  next: ListNode | null = null;
  prev: ListNode | null = null;
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  setNext(node: ListNode) {
    this.next = node;
    this.next.prev = this;
  }
}

const node1 = new ListNode(10);
const node2 = new ListNode(12);
const node3 = new ListNode(13);

node1.setNext(node2);
node2.setNext(node3);

console.log(node1.next.next.prev.prev.next.next.prev.value);
