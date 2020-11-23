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

  getNodeAtIndex(index) {
    let indexRef = this.nodeCount - 1;
    if (index < 0 || index > indexRef) {
      return null;
    } else {
      let counterNode = this.head;
      let count = 0;
      while (count <= indexRef) {
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

// insertAtTail
// insertAtIndex
// removeHead
// removeTail
// removeAtIndex
// getIndexHelper

const list = new SinglyLinkedList();
list.insertAtHead(1);
list.insertAtHead(2);
list.insertAtHead(3);
const printedList = list.printList();
console.log(printedList, `Node Count: ${list.nodeCount}`);
