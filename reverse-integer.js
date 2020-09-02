/**
 * Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

const reverse1 = (x) => {
    let isNegative;
    const max = Math.pow(2, 31) - 1;
    const min = -Math.pow(2, 31);
    if (x >= 0) {
        isNegative = false;
    } else {
        isNegative = true;
    }
    const arr = String(Math.abs(x)).split('');
    const reversed = arr.reverse();
    const newNum = reversed.join('');

    const reversedNum = isNegative ? -Number(newNum) : Number(newNum);
    console.log('arr->', reversedNum);
    return (reversedNum > max || reversedNum < min) ? 0 : reversedNum;
}

const reverse = (x) => {
    let isNegative = x < 0;
    let num = x;
    if (isNegative) {
        num = x * -1;
    }

    let reversedNum = 0;

    const recursive = (num) => {
        const rest = Math.floor(num / 10);

        const lastNum = num % 10;
        reversedNum = reversedNum * 10 + lastNum;
        if (rest === 0) return num;
        recursive(rest);
        return reversedNum;
    }

    const r = recursive(num);

    if (r > 2 ** 31 - 1) return 0;

    console.log('r-->', isNegative ? -r : r);
    return isNegative ? -r : r;
}

reverse(0);
