/*Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.



    Example 1:
Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation:
Digit 8 is inside of 3 nested parentheses in the string.


    Example 2:
Input: s = "(1)+((2))+(((3)))"
Output: 3
Explanation:
Digit 3 is inside of 3 nested parentheses in the string.


    Example 3:
Input: s = "()(())((()()))"
Output: 3


Constraints:
1 <= s.length <= 100
s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
It is guaranteed that parentheses expression s is a VPS.*/

var maxDepth = function(s) {
    let max = 0;
    let depth  = 0;
    for (let i = 0; i < s.length; i++){
        if(s[i] == "("){
            depth++
            max = Math.max(max, depth)

        }else if(s[i] == ")") {
            depth--
        }
    }
    return max;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"))