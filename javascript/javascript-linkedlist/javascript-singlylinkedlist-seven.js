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
      let headToRemove = this.head;
      this.head = headToRemove.nextNode;
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

  getIndexHelper(index) {
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
    console.log(
      JSON.stringify(this.head, null, 4),
      `Node Count: ${this.nodeCount}`
    );
  }
}

let list = new SinglyLinkedList();
list.insertAtHead(2);
list.insertAtHead(3);
list.insertAtHead(4);
list.insertAtTail(6);
list.insertAtIndex(45, 4);
list.removeHead();
list.removeTail();
list.printList();

// Methods
// insertAtHead
// insertAtTail
// insertAtIndex
// getIndexHelper
// removeHead
// removeTail
// removeAtIndex
// printList

// Bonus:
// Sum All node values together
