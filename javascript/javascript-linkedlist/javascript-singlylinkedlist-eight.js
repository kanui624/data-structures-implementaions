// Linked List 8
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
      let newNodeAtIndex = new Node(input);
      let nodeBeforeIndex = this.getIndexHelper(index - 1);
      newNodeAtIndex.nextNode = nodeBeforeIndex.nextNode;
      nodeBeforeIndex.nextNode = newNodeAtIndex;
      this.nodeCount++;
    }
  }

  removeHead() {
    if (!this.head) {
      return null;
    } else {
      let currentHead = this.head;
      this.head = currentHead.nextNode;
    }
    this.nodeCount--;
  }

  removeTail() {
    if (!this.head) {
      return null;
    } else {
      let nodeBeforeTail = this.getIndexHelper(this.nodeCount - 2);
      nodeBeforeTail.nextNode = null;
    }
    this.nodeCount--;
  }

  removeAtIndex(index) {
    if (index < 0 || index > this.nodeCount - 1) {
      console.log(`Index: ${index} is out of range`);
    } else if (index === 0) {
      this.removeHead();
    } else if (index === this.nodeCount - 1) {
      this.removeTail();
    } else {
      let nodeBeforeIndex = this.getIndexHelper(index - 1);
      let nodeToRemove = this.getIndexHelper(index);
      nodeBeforeIndex.nextNode = nodeToRemove.nextNode;
      this.nodeCount--;
    }
  }

  sumAllNodes() {
    let currentHead = this.head;
    let nodeSums = 0;
    while (currentHead) {
      nodeSums += currentHead.node;
      currentHead = currentHead.nextNode;
    }
    console.log(`Node Sum: ${nodeSums}`);
  }

  getIndexHelper(index) {
    if (index < 0 || index > this.nodeCount) {
      console.log(`Index: ${index} is out of range`);
    } else if (index === 0) {
      return this.head;
    } else {
      let currentNode = this.head;
      let count = 0;
      while (count !== index) {
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

let list = new SinglyLinkedList();
list.insertAtHead(2);
list.insertAtHead(4);
list.insertAtHead(9);
list.insertAtTail(78);
list.insertAtIndex(0, 4);
// list.removeHead();
// list.removeTail();
// list.removeAtIndex(5);
list.sumAllNodes();
list.printList();
// insertAtHead
// insertAtTail
// insertAtIndex
// getIndexHelper
// removeHead
// removeTail
// removeAtIndex
// printList
// sumAllNodes
