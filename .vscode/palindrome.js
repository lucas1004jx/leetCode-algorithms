/**
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?
 */

const reversed = (num) => {
    let reversedNum = 0;

    const recursive = (num) => {
        const last = num % 10;
        const rest = Math.floor(num / 10);
        reversedNum = reversedNum * 10 + last;
        if (rest === 0) return num;
        recursive(rest);
        return reversedNum;
    }

    return num > (2 ** 31 - 1) ? 0 : recursive(num);

}

const isPalindrome = (num) => {
    if (num < 0) return false;
    const reversedNum = reversed(num);
    if (num === reversedNum) return true;
    return false;
}