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
    display() {
        let listString = '';
        if(this.head == null) {
            return "";
        }
        
        listString += this.head.data;
        let runner = this.head.next;
        while (runner != null) {
            listString += ", " + runner.data;
            runner = runner.next;
        }
        return listString;
    }

    // reverseList() {
    //     let prev = null;
    //     while(this.head !== null) {
    //         let nextNode = this.head.next;
    //         this.head.next = prev;
    //         prev = this.head;
    //         this.head = nextNode;
    //     }
    //     return prev;
    // }
}

SLL1 = new SLL();
SLL1.addFront(1);
SLL1.addFront(2);
SLL1.addFront(3);
SLL1.addFront(4);
SLL1.addFront(5);
// console.log(SLL1.display());
// console.log(SLL1.reverseList());
// console.log(SLL1.display());
console.log(SLL1);

// SLL1.removeFrontTwo();
// console.log(SLL1);
// console.log(SLL1);
// SLL1.removeFrontTwo();
// SLL1.removeFrontTwo();
// console.log(SLL1.front());