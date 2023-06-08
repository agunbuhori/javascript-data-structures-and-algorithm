class Queue<T> {
  private elements: T[];

  constructor() {
    this.elements = [];
  }

  enqueue(item: T): void {
    this.elements.push(item);
  }

  dequeue(): T | undefined {
    return this.elements.shift();
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  size(): number {
    return this.elements.length;
  }

  peek(): T | undefined {
    return this.elements[0];
  }
}
