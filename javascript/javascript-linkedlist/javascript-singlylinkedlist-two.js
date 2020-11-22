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

  insertAtTail(input) {
    let newTail = new Node(input);
    if (!this.head) {
      this.head = newTail;
    } else {
      let currentNode = this.head;
      let count = 1;
      while (count != this.nodeCount) {
        currentNode = currentNode.nextNode;
        count++;
      }
      currentNode.nextNode = newTail;
    }
    this.nodeCount++;
  }

  printList() {
    console.log(JSON.stringify(this.head, null, 4));
  }
}

const list = new LinkedList();
list.insertAtHead(12);
list.insertAtHead(10);
list.insertAtHead(8);
list.insertAtTail(1);
list.printList();

// getIndexHelper
// insertAtIndex
// removeHead
// removeTail
// removeAtIndex
// printList
