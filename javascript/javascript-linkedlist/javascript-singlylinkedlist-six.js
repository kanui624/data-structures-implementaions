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
  constructor() {
    this.head = head;
    this.nodeCount = 0;
  }

  insertAtHead(input) {
    let newHeadNode = new Node(input);
    if (!this.head) {
      d;
      this.head = newHeadNode;
      d;
    } else {
      newHeadNode.nextNode = this.head;
      this.head = newHeadNode;
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
      console.log('No head to remove');
    } else {
      let currentHead = this.head;
      this.head = currentHead.nextNode;
      this.nodeCount--;
    }
  }

  removeTail() {
    if (!this.head) {
      console.log('No tail to remove');
    } else {
      let tailBeforeRemove = this.getIndexHelper(this.nodeCount - 2);
      tailBeforeRemove.nextNode = null;
      this.nodeCount--;
    }
  }

  removeAtIndex(index) {
    if (index < 0 || index >= this.nodeCount) {
      console.log(`Index: ${index} is out of range`);
    } else if (index === 0) {
      this.removeHead();
    } else if (index === this.nodeCount - 1) {
      this.removeTail();
    } else {
      let nodeToRemove = this.getIndexHelper(index);
      let nodeBeforeRemove = this.getIndexHelper(index - 1);
      nodeBeforeRemove.nextNode = nodeToRemove.nextNode;
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

  deleteList() {
    this.head = null;
    this.nodeCount = 0;
    console.log('List Deleted');
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
list.removeAtIndex(5);
list.deleteList();
// list.removeTail();
// list.removeHead();
// list.insertAtIndex(0, 7);
// list.getIndexHelper();
list.printList();
