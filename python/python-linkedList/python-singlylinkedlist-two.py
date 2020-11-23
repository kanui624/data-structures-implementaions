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
        if not(self.head):
            self.head = newTailNode
            self.nodeCount += 1
        else: 
            previousTail = self.getIndexHelper(self.nodeCount - 1)
            previousTail.nextNode = newTailNode
            self.nodeCount += 1

    def insertAtIndex(self, input, index):
        if(index < 0 or index > self.nodeCount):
            print("Index: {} is out of Range".format(index))
        elif (index == 0):
            self.insertAtHead(input)
        elif (index == self.nodeCount):
            self.insertAtTail(input)
        else:
            newNodeAtIndex = Node(input)
            nodeBeforeIndex = self.getIndexHelper(index - 1)
            nodeOccupyingIndex = self.getIndexHelper(index)
            nodeBeforeIndex.nextNode = newNodeAtIndex
            newNodeAtIndex.nextNode = nodeOccupyingIndex

    def getIndexHelper(self, index):
        if(index < 0 or index > self.nodeCount - 1):
            print("Index: {} is out of Range".format(index))
        elif(index == 0):
            return self.head
        else: 
            counterNode = self.head
            counter = 0
            while(counter != index):
                counterNode = counterNode.nextNode
                counter += 1
            return counterNode

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
list.insertAtTail(9)
list.insertAtIndex(300, 5)
# list.getIndexHelper(4)
list.printList()


# removeHead
# removeTail
# removeAtIndex
# printList
    