class Node:
    def __init__(self, node, nextNode = None):
        self.node = node
        self.nextNode = nextNode

class LinkedList: 
    def __init__(self):
        self.head = None
        self.nodeCount = 0

    def insertAtHead(self, input):
        newHeadNode = Node(input)
        if(self.head):
            newHeadNode.nextNode = self.head
            self.head = newHeadNode
        else: 
            self.head = newHeadNode
        self.nodeCount += 1
        
    def insertAtTail(self, input):
        newTailNode = Node(input)
        if(self.head): 
            currentHead = self.head
            count = 1
            while(count < self.nodeCount):
                currentHead = currentHead.nextNode
                count += 1
            currentHead.nextNode = newTailNode
            self.nodeCount += 1

    def printList(self):
        current = self.head
        print("Node Count: {}".format(self.nodeCount))
        while(current):
            print(current.node)
            current = current.nextNode
       


list = LinkedList()
list.insertAtHead(1)
list.insertAtHead(2)
list.insertAtHead(3)
list.insertAtTail(7)
list.printList()
# insertAtTail
# insertAtIndex
# getIndexHelper
# removeHead
# removeTail
# removeAtIndex
# printList
    