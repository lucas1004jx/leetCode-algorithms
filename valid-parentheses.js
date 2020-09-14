/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

match brackets must be closed by the same type of brackets.
match brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

 */
const match = {
    '(': ')',
    '{': '}',
    '[': ']'
}

const isValid = function (s) {
    const stack = [];
    for (let p of s) {
        if (match[p]) {
            stack.push(p);
        } else if (match[stack[stack.length - 1]] === p) {
            stack.pop();
        } else {
            return false;
        }
    }

    if (stack.length === 0) return true;
    return false;
};
