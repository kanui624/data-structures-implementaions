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
      let currentTailNode = this.getNodeAtIndexHelper(this.nodeCount - 1);
      currentTailNode.nextNode = newTailNode;
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
      let indexSpecified = this.getNodeAtIndexHelper(index);
      let newNodeAtIndex = new Node(input);
      let nodeBeforeIndex = this.getNodeAtIndexHelper(index - 1);
      nodeBeforeIndex.nextNode = newNodeAtIndex;
      newNodeAtIndex.nextNode = indexSpecified;
      this.nodeCount++;
    }
  }

  removeHead() {
    if (!this.head) {
      return;
    } else {
      let currentHead = this.head;
      this.head = currentHead.nextNode;
    }
    this.nodeCount--;
  }

  removeTail() {
    if (!this.head) {
      return;
    } else {
      let nodeBeforeTail = this.getNodeAtIndexHelper(this.nodeCount - 2);
      nodeBeforeTail.nextNode = null;
    }
    this.nodeCount--;
  }

  removeAtIndex(index) {
    if (index < 0 || index > this.nodeCount) {
      console.log(`Index: ${index} is out of range`);
    } else if (index === 0) {
      this.removeHead();
    } else if (index === this.nodeCount) {
      this.removeTail();
    } else {
      let nodeToRemove = this.getNodeAtIndexHelper(index);
      let nodeBeforeRemoval = this.getNodeAtIndexHelper(index - 1);
      nodeBeforeRemoval.nextNode = nodeToRemove.nextNode;
      this.nodeCount--;
    }
  }

  sumAllNodes() {
    let sum = 0;
    if (!this.head) {
      return 0;
    } else {
      let current = this.head;
      while (current) {
        sum += current.node;
        current = current.nextNode;
      }
    }
    console.log(`Node Sum: ${sum}`);
  }

  getNodeAtIndexHelper(index) {
    if (index < 0 || index > this.nodeCount) {
      return;
    } else if (index === 0) {
      return this.head;
    } else {
      let current = this.head;
      let count = 0;
      while (count !== index) {
        current = current.nextNode;
        count++;
      }
      return current;
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
list.insertAtHead(2);
list.insertAtHead(4);
list.insertAtHead(5);
list.insertAtTail(6);
list.insertAtTail(8);
list.insertAtTail(1);
list.insertAtIndex(0, 6);
// list.removeHead();
// list.removeTail();
list.removeAtIndex(8);
list.sumAllNodes();
list.printList();

// insertAtHead
// insertAtTail
// insertAtIndex
// getNodeAtIndexHelper
// removeHead
// removeTail
// removeAtIndex
// printlist
// sumAllNodes
