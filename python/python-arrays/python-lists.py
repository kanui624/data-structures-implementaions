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
# ['one', 'ten', 'three']

# The del key word deletes a value at the specified index
del arr[1]
print(arr)
# Outputs:
# ['one', 'three']

# Use the .append() python method to inject a value to the end of a list
arr.append(10)
print(arr)
# Outputs:
# ['one', 'three', 10]

arr.append([200, 300])
print(arr)
# Outputs:
#['one', 'three', 10, [200, 300]]

# .extend() method injects an array into another one without making it multidimensional
arr.extend(['hey', "yo"])
print(arr)
# Outputs:
# ['one', 'three', 10, [200, 300], 'hey', 'yo']


# .index() method searches for an element in the list and finds it's index
findIndex = arr.index("one")
print(findIndex)
# Outputs: 
# 0

# passing a second argument in the .index() argument results in setting a reange in which to find an elements index
findIndex = arr.index("yo", 4)
# find the "yo" value but only after the 4th index
print(findIndex)
# Outputs: 
# 5

