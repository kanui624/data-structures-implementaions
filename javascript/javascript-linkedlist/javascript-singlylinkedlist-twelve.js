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
}

// insertAtHead
// insertAtTail
// insertAtIndex
// getNodeAtIndexHelper
// removeHead
// removeTail
// removeAtIndex
// printlist
// sumAllNodes
