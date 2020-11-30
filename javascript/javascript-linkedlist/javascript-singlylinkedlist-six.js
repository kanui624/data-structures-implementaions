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
    // create a new Node with the given input
    let newHeadNode = new Node(input);
    // if there is no head
    if (!this.head) {
      // then the newly created node is the new head
      this.head = newHeadNode;
      // if there is a head
    } else {
      // then the newNode's nextNode value will point to the current head
      newHeadNode.nextNode = this.head;
      // and the new Node will become the new head
      this.head = newHeadNode;
    }
    // then we will increment the nodeCount by 1
    this.nodeCount++;
  }
}
