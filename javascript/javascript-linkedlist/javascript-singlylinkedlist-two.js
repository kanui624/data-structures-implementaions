class Node {
  constructor(node, nextNode = null) {
    this.node = node;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = head;
    this.nodeCount = 0;
  }

  printList() {
    console.log(JSON.stringify(this.head, null, 4));
  }
}

printList();
// insert
// insertAtHead
// insertAtTail
// getIndexHelper
// insertAtIndex
// removeHead
// removeTail
// removeAtIndex
// printList
