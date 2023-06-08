class MinHeap<T> {
  private heap: T[];

  constructor() {
    this.heap = [];
  }

  get size(): number {
    return this.heap.length;
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }

  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.size;
  }

  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.size;
  }

  private swap(index1: number, index2: number): void {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  private heapifyUp(): void {
    let currentIndex = this.size - 1;
    while (this.hasParent(currentIndex)) {
      const parentIndex = this.getParentIndex(currentIndex);
      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  private heapifyDown(): void {
    let currentIndex = 0;
    while (this.hasLeftChild(currentIndex)) {
      let smallestChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.hasRightChild(currentIndex) &&
        this.heap[this.getRightChildIndex(currentIndex)] <
          this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.heap[currentIndex] > this.heap[smallestChildIndex]) {
        this.swap(currentIndex, smallestChildIndex);
        currentIndex = smallestChildIndex;
      } else {
        break;
      }
    }
  }

  insert(value: T): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin(): T | undefined {
    if (this.size === 0) {
      return undefined;
    }

    const minValue = this.heap[0];
    this.heap[0] = this.heap[this.size - 1];
    this.heap.pop();
    this.heapifyDown();

    return minValue;
  }

  peekMin(): T | undefined {
    return this.size === 0 ? undefined : this.heap[0];
  }
}
