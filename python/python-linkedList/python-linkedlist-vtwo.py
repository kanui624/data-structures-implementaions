class Node: 
    def __init__(self, input=None):
        self.input = input
        self.next = None

class SinglyList:
    def __init__(self):
        self.head = None

    def printList(self):
        printinput = self.head
        while printinput is not None:
            print (printinput.input)
            printinput = printinput.next


list = SinglyList()
list.head = Node("hey")
two = Node("yo")
three = Node("hello")
list.head.next = two
two.next = three
list.printList()