// Linked Lists are constructed of nodes which are elements of the linked list the first is the head node and the last is the tail. Every node knows the value of the next node

class LinkedList {
    // constructor is the first code executed when you call new LinkedList()
    constructor() {
        this.head = null; // first element of the list
        this.tail = null; // last element of the list
    }
    // append method to add to the linked list
    append(value) {
        // must initialize newNode to an object because the newNode must also know about the next element in line
        const newNode = { value: value, next: null };
        // check to see if we have a tail
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        // check to see if we have a head
        if (!this.head) {
            this.head = newNode;
        }
    }
        toArray() {
            const elements = [];
            let currNode = this.head;
            while (currNode) {
                elements.push(currNode);
                currNode = currNode.next;
            }
            return elements
        }
}

const linkedList1 = new LinkedList();

linkedList1.append(2);
linkedList1.append('hi my name is mason');
linkedList1.append(true);
linkedList1.append(null);

console.log(linkedList1.toArray());
