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

  insertAtTail(input) {
    let newTailNode = new Node(input);
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newTailNode;
    this.nodeCount++;
  }

  getIndex(index) {
    if (index < 0 || index > this.nodeCount) {
      console.log(`index: ${index} is out of range`);
    } else {
      let currentNode = this.head;
      let count = 0;
      while (count != index) {
        currentNode = this.head.nextNode;
        count++;
      }
      return currentNode;
    }
  }

  printList() {
    console.log(JSON.stringify(this.head, null, 4));
    console.log(this.nodeCount);
  }
}

const iterateDash = (input) => {
  let dashArray = [];
  for (let i = 0; i < 80; i++) {
    dashArray.push(`${input}`);
  }
  console.log(dashArray.join(''));
};

const list = new SinglyLinkedList();
list.insertAtHead(10);
list.insertAtHead(12);
list.insertAtHead(2);
list.insertAtHead(46);
list.insertAtHead(8);
list.insertAtTail(100);
list.printList();
// iterateDash('#');
