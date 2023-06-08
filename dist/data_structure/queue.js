class Queue {
    constructor() {
        this.elements = [];
    }
    enqueue(item) {
        this.elements.push(item);
    }
    dequeue() {
        return this.elements.shift();
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    size() {
        return this.elements.length;
    }
    peek() {
        return this.elements[0];
    }
}
