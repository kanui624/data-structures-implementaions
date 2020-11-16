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

