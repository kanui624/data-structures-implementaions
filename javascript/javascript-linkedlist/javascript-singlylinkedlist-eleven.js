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
      let currentNodeAtIndex = this.getIndexHelper(index);
      let nodeBeforeIndex = this.getIndexHelper(index - 1);
      nodeBeforeIndex.nextNode = newNodeAtIndex;
      newNodeAtIndex.nextNode = currentNodeAtIndex;
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
      let nodeBeforeTail = this.getIndexHelper(this.nodeCount - 2);
      nodeBeforeTail.nextNode = null;
    }
    this.nodeCount--;
  }

  removeAtIndex(index) {
    if (index < 0 || index >= this.nodeCount) {
      console.log(`Index: ${index} is out of range`);
    } else if (index === 0) {
      this.removeHead();
    } else if (index === this.nodeCount) {
      this.removeTail();
    } else {
      let nodeToRemove = this.getIndexHelper(index);
      let nodeBefore = this.getIndexHelper(index - 1);
      nodeBefore.nextNode = nodeToRemove.nextNode;
      this.nodeCount--;
    }
  }

  sumAllNodes() {
    let sumAll = 0;
    if (!this.head) {
      return;
    } else {
      let current = this.head;
      while (current) {
        sumAll += current.node;
        current = current.nextNode;
      }
      console.log(`Node Sum: ${sumAll}`);
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
list.insertAtHead(3);
list.insertAtTail(5);
list.insertAtIndex(8, 3);
list.removeAtIndex(5);
list.sumAllNodes();
// list.removeHead();
// list.removeTail();
list.printList();
// insertAtHead
// insertAtTail
// insertAtIndex
// getIndexHelper
// removeHead
// removeTail
// removeAtIndex
// sumAllNodes
// printList
