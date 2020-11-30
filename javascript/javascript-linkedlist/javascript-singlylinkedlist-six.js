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

  insertAtIndex(input, index) {
    if (index < 0 || index > this.nodeCount) {
      console.log(`Index: ${index} is out of range`);
    } else if (index === 0) {
      this.insertAtHead(input);
    } else if (index === this.nodeCount) {
      this.insertAtTail(input);
    } else {
      let nodeToInsert = new Node(input);
      let nodeBefore = this.getIndexHelper(index - 1);
      let currentNodeAtIndex = this.getIndexHelper(index);
      nodeBefore.nextNode = nodeToInsert;
      nodeToInsert.nextNode = currentNodeAtIndex;
      this.nodeCount++;
    }
  }

  removeHead() {
    if (!this.head) {
      console.log('No list to remove');
    } else {
      let currentHead = this.head;
      this.head = currentHead.nextNode;
      this.nodeCount--;
    }
  }

  getIndexHelper(index) {
    if (index < 0 || index > this.nodeCount) {
      console.log(`Index: ${index} is out of range`);
    } else if (index === 0) {
      return this.head;
    } else {
      let currentNode = this.head;
      let count = 0;
      while (count != index) {
        currentNode = currentNode.nextNode;
        count++;
      }
      return currentNode;
    }
  }

  printList() {
    console.log(
      JSON.stringify(this.head, null, 4),
      `Node Count: ${this.nodeCount}`
    );
  }
}

const list = new SinglyLinkedList();

list.insertAtHead(3);
list.insertAtHead(4);
list.insertAtHead(9);
list.insertAtHead(12);
list.insertAtHead(6);
list.insertAtTail(15);
// list.removeHead();
// list.insertAtIndex(0, 7);
// list.getIndexHelper();
list.printList();
