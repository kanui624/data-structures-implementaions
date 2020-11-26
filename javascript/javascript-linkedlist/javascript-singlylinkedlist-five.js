class Node {
  constructor(node, nextNode = null) {
    this.node = node;
    this.nextNode = nextNode;
  }
}

class SinglyLinkedList {
  constructor(head = null, nodeCount) {
    this.head = head;
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
    let currentTail = this.getIndexHelper(this.nodeCount - 1);
    currentTail.nextNode = newTailNode;
    this.nodeCount++;
  }

  insertAtIndex(input, index) {
    if (index < 0 || index > this.nodeCount) {
      console.log(`Index: ${index} is out of Range`);
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
      return null;
    } else {
      this.head = this.head.nextNode;
      this.nodeCount--;
    }
  }

  removeTail() {
    if (!this.head) {
      return null;
    } else {
      let nodeBeforeTail = this.getIndexHelper(this.nodeCount - 2);
      nodeBeforeTail.nextNode = null;
      this.nodeCount--;
    }
  }

  getIndexHelper(index) {
    if (index < 0 || index > this.nodeCount) {
      console.log(`Index: ${index} is out of Range`);
    } else {
      let nodeAtIndex = this.head;
      let count = 0;
      while (count < index) {
        nodeAtIndex = nodeAtIndex.nextNode;
        count++;
      }
      return nodeAtIndex;
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
list.insertAtHead(5);
list.insertAtTail(7);
list.insertAtIndex(16, 2);
// list.removeHead();
list.removeTail();
list.printList();

// removeAtIndex
