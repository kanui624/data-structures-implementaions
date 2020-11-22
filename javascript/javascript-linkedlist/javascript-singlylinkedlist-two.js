class Node {
  constructor(node, nextNode = null) {
    this.node = node;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.nodeCount = 0;
  }

  insertAtHead(input) {
    let newHead = new Node(input);
    if (!this.head) {
      this.head = newHead;
    } else {
      newHead.nextNode = this.head;
      this.head = newHead;
    }
    this.nodeCount++;
  }

  removeHead() {
    let currentHead = this.head;
    this.head = currentHead.nextNode;
    this.nodeCount--;
  }

  insertAtTail(input) {
    let newTail = new Node(input);
    if (!this.head) {
      this.head = newTail;
    } else {
      let currentNode = this.head;
      let count = 1;
      while (count < this.nodeCount) {
        currentNode = currentNode.nextNode;
        count++;
      }
      currentNode.nextNode = newTail;
      //   console.log(currentNode);
    }
    this.nodeCount++;
  }

  removeTail() {
    let currentNode = this.head;
    let count = 1;
    while (count < this.nodeCount - 1) {
      currentNode = currentNode.nextNode;
      count++;
    }
    currentNode.nextNode = null;
    this.nodeCount--;
  }

  insertAtIndex(input, index) {
    let currentNodeAtIndex = this.getNodeAtIndexHelper(index);
    if (index === 0) {
      this.insertAtHead(input);
    } else if (index === this.nodeCount) {
      this.insertAtTail(input);
    } else if (currentNodeAtIndex === null) {
      console.log(`Index: ${index} is out of range cannot add node`);
    } else {
      let newNodeAtIndex = new Node(input);
      let getNodeBeforeInsertion = this.getNodeAtIndexHelper(index - 1);
      getNodeBeforeInsertion.nextNode = newNodeAtIndex;
      newNodeAtIndex.nextNode = currentNodeAtIndex;
      this.nodeCount++;
    }
  }

  getNodeAtIndexHelper(index) {
    if (index < 0 || index > this.nodeCount) {
      return null;
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
    console.log(JSON.stringify(this.head, null, 4));
    console.log(`Node Count: ${this.nodeCount}`);
  }
}

const list = new LinkedList();
list.insertAtHead(12);
list.insertAtHead(10);
list.insertAtHead(8);
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtIndex(33, 5);
list.removeHead();
list.removeTail();
// list.getNodeAtIndexHelper(4);

list.printList();

// removeAtIndex
