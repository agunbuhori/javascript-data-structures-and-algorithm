class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: ListNode<T> | null;
  private tail: ListNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  append(value: T): void {
    const newNode = new ListNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  prepend(value: T): void {
    const newNode = new ListNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  insertAt(value: T, index: number): void {
    if (index < 0 || index > this.size) {
      throw new Error("Invalid index");
    }

    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      const newNode = new ListNode(value);
      let current = this.head;
      let previous: ListNode<T> | null = null;
      let currentIndex = 0;

      while (currentIndex < index) {
        previous = current;
        current = current!.next;
        currentIndex++;
      }

      newNode.next = current;
      previous!.next = newNode;
      this.size++;
    }
  }

  removeAt(index: number): void {
    if (index < 0 || index >= this.size) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    let previous: ListNode<T> | null = null;
    let currentIndex = 0;

    if (index === 0) {
      this.head = current!.next;
      if (this.size === 1) {
        this.tail = null;
      }
    } else if (index === this.size - 1) {
      while (current!.next) {
        previous = current;
        current = current!.next;
      }
      previous!.next = null;
      this.tail = previous;
    } else {
      while (currentIndex < index) {
        previous = current;
        current = current!.next;
        currentIndex++;
      }
      previous!.next = current!.next;
    }

    this.size--;
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}
