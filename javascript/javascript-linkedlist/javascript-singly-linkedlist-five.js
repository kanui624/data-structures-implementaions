class Node {
  constructor(node, nextNode = 0) {
    this.node = node;
    this.nextNode = nextNode;
  }
}

class SinglyLinkedList {
  constructor(head = null, nodeCount) {
    this.head = head;
    this.nodeCount = nodeCount;
  }
}
