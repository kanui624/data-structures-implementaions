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

List = LinkedList()
List.head = Node(3)
List.insertNode(5)
print(List)