class Node {
  constructor(node, nextNode = null) {
    this.node = node;
    this.nextNode = nextNode;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.nodeCount = 0;
  }

  printList() {
    return JSON.stringify(this.head, null, 4);
  }
}

// insertAtTail
// insertAtIndex
// removeHead
// removeTail
// removeAtIndex
// getIndexHelper

const list = new SinglyLinkedList();
const printedList = list.printList();
console.log(printedList);
