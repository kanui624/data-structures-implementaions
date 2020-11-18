class Node: 
    def __init__(self, input=None):
        self.input = input
        self.next = None

class SinglyList:
    def __init__(self):
        self.head = None


list = SinglyList()
list.head = Node("hey")
two = Node("yo")
three = Node("Wed")
list.head.next = two
two.next = three