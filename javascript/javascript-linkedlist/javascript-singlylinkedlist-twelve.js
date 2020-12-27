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
