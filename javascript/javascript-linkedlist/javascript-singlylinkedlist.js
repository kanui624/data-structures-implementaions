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

  insertAtIndex(input, index) {
    if (index < 0 || index > this.nodeCount) {
      return null;
    } else if (index === this.nodeCount) {
      return this.insertAtTail(input);
    } else if (index === 0) {
      return this.insertAtHead(input);
    }

    let nodeBeforeIndex = this.getIndex(index - 1),
      newNodeAtIndex = new Node(input),
      temp = nodeBeforeIndex.nextNode;

    newNodeAtIndex.nextNode = temp;
    nodeBeforeIndex.nextNode = newNodeAtIndex;
    this.nodeCount++;
  }

  removeAtIndex(index) {
    if (index < 0 || index > this.nodeCount) {
      console.log(`index: ${index} out of range, cannot remove`);
    } else if (index === 0) {
      this.head = this.head.nextNode;
      this.nodeCount--;
    } else if (index === this.nodeCount) {
      let nodeBefore = this.getIndex(index - 1);
      console.log(nodeBefore);
      // nodeBefore.nextNode = null;
      // this.nodeCount--;
    } else {
      // let nodeBefore = this.getIndex(index);
      // nodeBefore.nextNode = nodeBefore.nextNode.nextNode;
      // this.nodeCount--;
      console.log('not yet');
    }
  }

  getIndex(index) {
    if (index < 0 || index > this.nodeCount) {
      console.log(`index: ${index} is out of range`);
    } else {
      let currentNode = this.head;
      let count = 0;
      while (count < index) {
        currentNode = currentNode.nextNode;
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
list.insertAtIndex(99, 0);
list.removeAtIndex(7);
list.printList();
