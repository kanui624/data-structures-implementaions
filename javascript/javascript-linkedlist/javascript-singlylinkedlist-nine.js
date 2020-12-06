class Node {
  constructor(node, nextNode = null) {
    this.node = node;
    this.nextNode = 0;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.nodeCount = 0;
  }

  insertAtHead(input) {
    let newNodeAtHead = new Node(input);
    if (!this.head) {
      this.head = newNodeAtHead;
    } else {
      newNodeAtHead.nextNode = this.head;
      this.head = newNodeAtHead;
    }
    this.nodeCount++;
  }

  insertAtTail(input) {
    let newTailNode = new Node(input);
    if (!this.head) {
      this.head = newTailNode;
    } else {
      let currentTail = this.getIndexHelper(this.nodeCount - 1);
      currentTail.nextNode = newTailNode;
    }
    this.nodeCount++;
  }

  getIndexHelper(index) {
    if (index < 0 || index > this.nodeCount) {
      console.log(`Index: ${index} is out of range`);
    } else if (index === 0) {
      return this.head;
    } else {
      let current = this.head;
      let count = 0;
      while (count !== index) {
        current = current.nextNode;
        count++;
      }
      return current;
    }
  }

  printList() {
    console.log(
      JSON.stringify(this.head, null, 4),
      `Node Count: ${this.nodeCount}`
    );
  }
}

let list = new SinglyLinkedList();
list.insertAtHead(1);
list.insertAtHead(2);
list.insertAtHead(3);
list.insertAtTail(6);
list.printList();

// insertAtHead
// insertAtTail
// insertAtIndex
// getIndexHelper
// removeHead
// removeTail
// removeAtIndex
// printList
// sumAllNodes
