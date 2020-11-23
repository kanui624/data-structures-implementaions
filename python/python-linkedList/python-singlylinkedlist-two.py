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
       


list = LinkedList()
list.insertAtHead(1)

# insertAtHead
# insertAtTail
# insertAtIndex
# getIndexHelper
# removeHead
# removeTail
# removeAtIndex
# printList
    