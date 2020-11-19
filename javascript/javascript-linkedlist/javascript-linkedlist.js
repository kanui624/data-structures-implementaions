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
    let newNode = new Node(input);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.nodeCount++;
  }

  printList() {
    console.log(JSON.stringify(this.head, null, 4));
  }
}

const list = new SinglyLinkedList();
list.insertAtHead(10);
list.insertAtHead(12);
list.insertAtHead(2);
list.insertAtHead(46);
list.insertAtHead(8);
list.printList();
