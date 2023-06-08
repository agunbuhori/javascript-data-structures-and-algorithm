class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    append(value) {
        const newNode = new ListNode(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    prepend(value) {
        const newNode = new ListNode(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            throw new Error("Invalid index");
        }
        if (index === 0) {
            this.prepend(value);
        }
        else if (index === this.size) {
            this.append(value);
        }
        else {
            const newNode = new ListNode(value);
            let current = this.head;
            let previous = null;
            let currentIndex = 0;
            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }
            newNode.next = current;
            previous.next = newNode;
            this.size++;
        }
    }
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Invalid index");
        }
        let current = this.head;
        let previous = null;
        let currentIndex = 0;
        if (index === 0) {
            this.head = current.next;
            if (this.size === 1) {
                this.tail = null;
            }
        }
        else if (index === this.size - 1) {
            while (current.next) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
            this.tail = previous;
        }
        else {
            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}
