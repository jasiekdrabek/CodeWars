# Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

# Examples:

# * 'abc' =>  ['ab', 'c_']
# * 'abcdef' => ['ab', 'cd', 'ef']

def solution(s):
    if len(s) == 0:
        return []
    res = []
    if len(s) % 2 == 1:
        s += "_"
    for i in range(0,len(s),2):
        res.append(s[i] + s[i+1])
    return res