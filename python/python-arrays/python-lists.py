# -*- coding: utf-8 -*-

# Python lists 
# Lists are implemented as dynamic arrays behind the scenes.
# Lists can hold any type of data (integer, boolean, string, list, object) and a combination of all

# Python lists syntax
arr = ["one", "two", "three"]

# print() methods prints argument to the console
print(arr)
# Outputs:
# ['one', 'two', 'three']

# Lists are mutable
arr[1] = "ten"
print(arr)
# Outputs:
# before:   ['one', 'two', 'three']
# after:    ['one', 'ten', 'three']

# The del key word deletes a value at the specified index
del arr[1]
print(arr)
# Outputs:
# Before:   ['one', 'ten', 'three']
# After:    ['one', 'three']

# Use the .append() python method to inject a value to the end of a list
arr.append(10)
print(arr)
# Outputs:
# Before:   ['one', 'three']
# After:    ['one', 'three', 10]

# you can append anything to a list from integers, strings, and booleans to other arrays, and dictionaries
arr.append([200, 300])
print(arr)
# Outputs:
# Before:   ['one', 'three', 10]
# After:    ['one', 'three', 10, [200, 300]]

# .extend() method injects an array into another one without making it multidimensional
arr.extend(['hey', "yo"])
print(arr)
# Outputs:
# Before:   ['one', 'three', 10, [200, 300]]
# After:    ['one', 'three', 10, [200, 300], 'hey', 'yo']


# .index() method searches for an element in the list and finds it's index
findIndex = arr.index("one")
print(findIndex)
# Outputs: 
# Current arr:  ['one', 'three', 10, [200, 300], 'hey', 'yo']
# Returns:      0

# passing a second argument in the .index() argument results in setting a range in which to find an elements index
findIndex = arr.index("yo", 4)
# find the "yo" value but only after the 4th index
print(findIndex)
# Outputs: 
# Current arr:  ['one', 'three', 10, [200, 300], 'hey', 'yo']
# Returns:      5

# .insert() inserts an element at a specified index. the insert() method expects two arguments
arr.insert(2, "a")
arr.insert(2, "a")
print(arr)
# Outputs:
# ['one', 'three', 'a', 'a', 10, [200, 300], 'hey', 'yo']

# revmove() removes the first occurence of an element by passing in the element as the argument
arr.remove("three")
print(arr)
# Outputs:
# ['one', 'a', 'a', 10, [200, 300], 'hey', 'yo']

# pop() method removes the last element in the list
arr.pop()
print(arr)
# Outputs:
# ['one', 'a', 'a', 10, [200, 300], 'hey']

# count() counts the number of elements within the list that are equal to the argument passed in 
yo = arr.count("a")
print(arr)
print(yo)
# Outputs: 
# ['one', 'a', 'a', 10, [200, 300], 'hey']
# 2

# sort() method performs an in place sorting by default. By passing the "reverse=True" argument in the list will sort in reverse
arrTwo = ["c", "d", "b", "a"]
arrTwo.sort()
print(arrTwo)
# Outputs: 
# ['a', 'b', 'c', 'd']

arrTwo.sort(reverse=True)
print(arrTwo)
# Outputs:
# ['d', 'c', 'b', 'a']

# reverse() reverses a list regardless of sorted status
arr.reverse()
print(arr)
# Outputs:
# ['hey', [200, 300], 10, 'a', 'a', 'one']

#############################################################
# Operators
# The + operator can be used to extend a list:
list = [1]
list += [2]
print(list)
# Outputs:
# Before:   [1]
# After:    [1, 2]

# Slicing
# Slicing uses the symbol : to access part of a list
listTwo = [0, 1, 2, 3, 4, 5]

takeOutFirstTwo = listTwo[2:]
# Outputs: 
# Before:   [0, 1, 2, 3, 4, 5]
# After:    [2, 3, 4, 5]

readUpToThirdIndex = listTwo[:3]
# Outputs: 
# Before:   [0, 1, 2, 3, 4, 5]
# After:    [0, 1, 2]

readAfterIndexTwo = listTwo[3:]
# # Outputs: 
# # Before: [0, 1, 2, 3, 4, 5]
# # After:  [3, 4, 5]

# List comprehension 
moduloList = [i for i in range(10) if i % 2 == 0]
print(moduloList)

# Outputs:
# [0, 2, 4, 6, 8]

# Filtering Lists
li = [1, 2, 4]
multByTwo = [elem*2 for elem in li if elem > 1]
print(multByTwo)
# Output:
# [4, 8]

# Lists as stacks
stack = ['a','b','c','d']
stack.append("e")
stack.append("f")
print(stack)
# Outputs: 
# ['a', 'b', 'c', 'd', 'e', 'f']
stack.pop()
print(stack)
# Outputs: 
# ['a', 'b', 'c', 'd', 'e']

#  Lists as Queues
queue = ['a', 'b', 'c', 'd']
queue.append("e")
queue.append("f")
print(queue)
# Outputs: 
# ['a', 'b', 'c', 'd', 'e', 'f']
queue.pop()
print(queue)
# Outputs: 
# ['a', 'b', 'c', 'd', 'e']
queue.pop()
print(queue)
# Outputs: 
# ['a', 'b', 'c', 'd']

# Copying Lists
# The following techniques for copying lists create shallow copies meaning that they don't copy over nested objects
a = [1, 2, [3, 4]]
b = a[:]
a[2][0] = 10
print(a)
print(b)
# Both a and b will have the same output becasue b is simply referencing a's nexted array, which enables all mutations to a's nested array to also change b's copy of a
# Output:
# a:    [1, 2, [10, 4]]
# b:    [1, 2, [10, 4]]

# Deep Copy
# Since here we are doing a deep copy d becomes it's own entity and doesn't reference c's list once it copies it 
import copy
c = [1, 2, [3, 4]]
d = copy.deepcopy(c)
c[2][0] = 10
print(c)
# Outputs: 
# [1, 2, [10, 4]]
print(d)
# Outputs: 
# [1, 2, [3, 4]]


# Inserting Items into a Sorted List
# The insort() method from the bisect module injects the argument given into the array at it's sorted position
x = [4, 1, 3]
x.sort()
import bisect
bisect.insort(x, 2)
print(x)
# Outputs: 
# [1, 3, 2, 4]

# To know the index at which an element will be injected into you can use the bisect() method from the bisect module
f = [4, 1]
f.sort()
import bisect
whereInjected = bisect.bisect(f, 2)
print(whereInjected)
# Outputs: 1