# Code Challenge: More Python 🐍

For this morning's code challenge, we'll be trying our hand at some Python code challenges! 

In your code-every-day repository on GitHub that you created for [#100daysofcode](https://git.generalassemb.ly/SEIR-201/code-every-day), create a folder for today's day and set up an environment for yourself in which to complete these challenges. 

At the end of this morning's exercise, we'll share links to our Twitter posts about this exercise and #100daysofcode. 
### Instructions: 

1. Clone this directory down to the folder where you keep your coding challenges (no need to fork).
2. Work through the challenges below. Use pseudocode and comments to think through your approach to solving these algorithms in a systematic way. 
3. Run `python3 challenges.py` from within this directory to test the output of your code. 🧪
4. Have fun 😎. 

## Shortest Word

![You keep using that word](https://media.giphy.com/media/N7FeGLHjVsDQY/giphy.gif)

Simple: given a string of words, return the length of the shortest word(s). String will never be empty, and you do not need to account for different data types. 

```python
def shortest_word(string): 
    # your lovely code here!

print(shortest_word("I don't think that word means what you think it means"))
    # should return: 1
```
## Sum of Minimums 

![mental math](https://media.giphy.com/media/BmmfETghGOPrW/giphy.gif)

Given a 2D list of size `m * n`, your task is to find the sum of the minimum value in each row. 

For example: 
```python
def sum_of_minimums(list):
    # your lovely code goes here!

my_list = [
    [1,2,3,4,5], # minimum value of row is 1
    [5,6,7,8,9], # minimum value of row is 5
    [20,21,34,56,100] # minimum value of row is 20
    ]

print(sum_of_minimums(my_list))
    # should return 26
```

So the function should return `26` because the sum of each row's minimums is `1 + 5 + 20 = 26`. 

Note: You will always be given non-empty lists containing positive values. 

## Split Strings

![splits ouch](https://media.giphy.com/media/E5g35ySaiIPOo/giphy.gif)

Given a string, complete the function so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').

For example: 
```python
def split_strings(s):
    # your lovely code goes here!
    

print(split_strings('abc'))
# should return ['ab', 'c_']

print(split_strings('abcdef'))
# should return ['ab', 'cd', 'ef']

```
## Hungry for More? 

Add Python to your coding languages on Codewars and keep working through more Python [challenges](https://www.codewars.com/kata/search/python?q=&beta=false)! 
