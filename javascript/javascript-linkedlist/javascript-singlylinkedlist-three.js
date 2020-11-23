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

  insertAtHead(input) {
    let newHeadNode = new Node(input);
    if (!this.head) {
      this.head = newHeadNode;
    } else {
      newHeadNode.nextNode = this.head;
      this.head = newHeadNode;
    }
    this.nodeCount++;
  }

  insertAtTail(input) {
    let newTailNode = new Node(input);
    let prevTailNode = this.getNodeAtIndex(this.nodeCount - 1);
    if (!this.head) {
      this.head = newTailNode;
    }
    prevTailNode.nextNode = newTailNode;
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
      let newNodeAtIndex = new Node(input);
      let nodeBefore = this.getNodeAtIndex(index - 1);
      let nodeAfter = this.getNodeAtIndex(index);
      nodeBefore.nextNode = newNodeAtIndex;
      newNodeAtIndex.nextNode = nodeAfter;
      this.nodeCount++;
    }
  }

  removeHead() {
    if (!this.head) {
      console.log('No head to Remove');
    } else {
      let newHeadNode = this.head.nextNode;
      this.head = newHeadNode;
      this.nodeCount--;
    }
  }

  removeTail() {
    if (this.nodeCount === 1) {
      this.head = null;
    } else {
      let beforeTailToRemove = this.getNodeAtIndex(this.nodeCount - 2);
      beforeTailToRemove.nextNode = null;
      this.nodeCount--;
    }
  }

  getNodeAtIndex(index) {
    if (index < 0 || index > this.nodeCount - 1) {
      console.log(`Index: ${index} is out of range`);
    } else if (index === 0) {
      return this.head;
    } else {
      let counterNode = this.head;
      let count = 0;
      while (count < index) {
        counterNode = counterNode.nextNode;
        count++;
      }
      return counterNode;
    }
  }

  printList() {
    return JSON.stringify(this.head, null, 4);
  }
}

// removeAtIndex
// getIndexHelper

const list = new SinglyLinkedList();
list.insertAtHead(1);
list.insertAtHead(2);
list.insertAtHead(3);
list.insertAtTail(4);
list.insertAtIndex(5, 4);
// list.removeHead();
// list.removeTail();
const printedList = list.printList();

// const getNode = list.getNodeAtIndex(0);
console.log(printedList, `NodeCount: ${list.nodeCount}`);
