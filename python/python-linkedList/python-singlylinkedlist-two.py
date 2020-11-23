class Node:
    def __init__(self, node, nextNode = None):
        self.node = node
        self.nextNode = nextNode

class LinkedList: 
    def __init__(self):
        self.head = None
        self.nodeCount = 0

    