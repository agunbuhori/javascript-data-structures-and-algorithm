class Stack {
    constructor() {
        this.elements = [];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    getSize() {
        return this.elements.length;
    }
    push(item) {
        this.elements.push(item);
    }
    pop() {
        return this.elements.pop();
    }
    peek() {
        return this.elements[this.elements.length - 1];
    }
    clear() {
        this.elements = [];
    }
}
