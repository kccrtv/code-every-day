# Shortest Word

def shortest_word(s):
    word = ""
    full_string = []
    for i in range(0, len(s)):
        if (s[i] != " "):
            word = word + s[i]
        else:
            full_string.append(word)
            word = ""
    short = full_string[0]

    for k in range(0, len(full_string)):
        if(len(short) > len(full_string[k])):
            short = full_string[k]
    return len(short)


print(shortest_word("I don't think that word means what you think it means"))
# should return: 1
# Resource: https://www.w3resource.com/python-exercises/string/python-data-type-string-exercise-79.php

# Sum of Minimums


def sum_of_minimums(list):
    # your lovely code goes here!
    return 'hello world'


my_list = [
    [1, 2, 3, 4, 5],  # minimum value of row is 1
    [5, 6, 7, 8, 9],  # minimum value of row is 5
    [20, 21, 34, 56, 100]  # minimum value of row is 20
]

print(sum_of_minimums(my_list))
# should return 26

# Split Strings


def split_strings(s):
    # your lovely code goes here
    return 'hello world'


print(split_strings('abc'))
# should return ['ab', 'c_']

print(split_strings('abcdef'))
# should return ['ab', 'cd', 'ef']
