class Node {
  constructor(node, nextNode = null) {
    this.node = node;
    this.nextNode = 0;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.nodeCount = 0;
  }

  insertAtHead(input) {
    let newNodeAtHead = new Node(input);
    if (!this.head) {
      this.head = newNodeAtHead;
    } else {
      newNodeAtHead.nextNode = this.head;
      this.head = newNodeAtHead;
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

let list = new SinglyLinkedList();
list.insertAtHead(1);
list.insertAtHead(2);
list.insertAtHead(3);
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
