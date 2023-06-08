class Stack<T> {
  private elements: T[];

  constructor() {
    this.elements = [];
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  getSize(): number {
    return this.elements.length;
  }

  push(item: T): void {
    this.elements.push(item);
  }

  pop(): T | undefined {
    return this.elements.pop();
  }

  peek(): T | undefined {
    return this.elements[this.elements.length - 1];
  }

  clear(): void {
    this.elements = [];
  }
}
