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

  insertAtHead(input) {
    let newHeadNode = new Node(input);
    // if there is no head
    // if so the newly created node is the new head
    // if there is a head
    // then the newNode's nextNode value will point to the current head
    // then we will increment the nodeCount by 1
  }
}
