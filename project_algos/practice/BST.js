class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree
{
    constructor()
    {
        this.root = null;
    }

    insert(data)
    {
        var newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        if (newNode.data > this.root.data) {
            this.root.right = newNode.data;
        } else if (newNode.data < this.root.data) {
            this.root.left = newNode.data;
        }

        console.log(bst);
        // newNode.data = data;
                         
        /* your code goes here */

        /* you need to call insertNode(node, newNode) at some point */
    }
     
    insertNode(node, newNode) /* node is the current node, newNode is the node to be inserted */
    {
        if 
        /* your code goes here */
    }
 
}

const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);
console.log(bst.root);

/*
    Node {
        data: 15,
        left: Node {
            data: 10,
            left: Node { data: 7, left: [Node], right: null },
            right: Node { data: 13, left: null, right: null }
        },
        right: Node {
            data: 25,
            left: Node { data: 22, left: [Node], right: null },
            right: null
        }
    }
*/