class Node {
  constructor(node, nextNode = null) {
    this.node = node;
    this.nextNode = node;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.nodeCount = 0;
  }
}
// insertAtHead
// insertAtTail
// insertAtIndex
// getIndexHelper
// removeHead
// removeTail
// removeAtIndex
// sumAllNodes
// printList
