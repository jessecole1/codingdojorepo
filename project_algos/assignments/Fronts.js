class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        let new_node = new Node(value);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    // My way
    removeFront() {
        if (this.head === null) {
            return false;
        }
        this.head = this.head.next;
        return this;
    }

    // Instructors way
    removeFrontTwo() {
        if (this.head === null) {
            return false;
        }
        const temp = this.head.data;
        this.head = this.head.next;
        return temp;
    }

    front() {
        if (this.head === null) {
            return null;
        }
        return this.head.data;
    }
}

SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);
SLL1.removeFrontTwo();
SLL1.removeFrontTwo();
// SLL1.removeFrontTwo();
console.log(SLL1.front());