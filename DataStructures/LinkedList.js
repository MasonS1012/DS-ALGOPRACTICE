//  Notes: Linked Lists are constructed of nodes which are elements of the linked list the first is the head node and the last is the tail. Every node knows the value of the next node. Linked Lists can be useful if you do a lot of insertions at the beginning of the lists because they are faster than arrrays at this because you do not have to re index

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
    // prepend method to add something to the very beginning of the linked list
    prepend(value) {
        // make sure the newNodes next value is pointing to the previous head that way it is not lost when reassigned later
        const newNode = { value: value, next: this.head };
        // check to see if there is a tail
        if (!this.tail) {
            this.tail = newNode;
        }    
        this.head = newNode;
    }
    // insert after method 
    insertAfter(value, afterValue) {
        // check to make sure the afterValue is in the list
        const existingNode = this.find(afterValue);
        // if the value is in the list update newNode as the value before afterValue
        if(existingNode) {
            const newNode = { value: value, next: existingNode.next };
            existingNode.next = newNode;
        }
    }

    // find method
    find(value) {
        // edge case if the list is empty return null
        if (!this.head) {
            return null;
        }
        let curNode = this.head;
        // while loop to traverse through the list
        while (curNode) {
            if (curNode.value === value) {
                return curNode;
            }
            curNode = curNode.next;ß
        }
        // return null if the value was not found in the list
        return null;
    }
    // delete method 
    delete(value) {
        // check to see if there is a head if not return because there is nothing to delete
        if (!this.head) {
            return;
        }
        // special case if the head is the value you want to delete using a while loop just in case the new updated head also has the value you want to delete
        while (this.head && this.head.value === value) {
            this.head = this.head.next
        }
        let curNode = this.head;
        while (curNode.next) {
            // check to see if the current nodes next value is the desired value
            if (curNode.next.value === value) {
                // if it is reassign the pointer to the nodes value after that 
                curNode.next = curNode.next.next;
            } else {
                // if the value is not found assign curNode to the next node and repeat
                curNode = curNode.next;
            }
        }
        // if the last value is what was deleted the tail needs to be updated to the last valid curNode
        if (this.tail.value === value) {
            this.tail = curNode;
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
