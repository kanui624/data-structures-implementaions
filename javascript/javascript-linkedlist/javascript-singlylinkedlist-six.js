// Implement a Linked List

// Tasks:
// Implement Node and Linked List class
// Implement all necessary Methods for a singly linked list
// insertAtHead
// insertAtTail
// insertAtIndex
// getIndexHelper
// removeHead
// removeTail
// removeAtIndex
// printList

class Node {
  constructor(node, nextNode = null) {
    this.node = node;
    this.nextNode = nextNode;
  }
}

class SinglyLinkedList {
  constructor(head, nodeCount) {
    this.head = head;
    this.nodeCount = 0;
  }
}
