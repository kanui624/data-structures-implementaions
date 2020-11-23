class Node: 
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

class LinkedList: 
    def __init__(self):
        self.head = None

    def insertNode(self, data):
        newNode = Node(data)
        if(self.head):
            current = self.head
            while(current.next):
                current = current.next
            current.next = newNode
        else:
            self.head = newNode
        
    def printList(self):  
        current = self.head
        while(current):
            print(current.data)
            current = current.next

List = LinkedList()
List.insertNode(5)
List.insertNode(4)
List.insertNode(6)
List.printList()
