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
    const max = Math.pow(2,31) - 1;
    const min = -Math.pow(2,31);
    if(x>=0){
        isNegative= false;
    }else{
        isNegative=true;
    }
    const arr = String(Math.abs(x)).split('');
    const reversed = arr.reverse();
    const newNum = reversed.join('');
   
    const reversedNum = isNegative ? -Number(newNum): Number(newNum);
     console.log('arr->',reversedNum);
    return (reversedNum > max || reversedNum < min)  ?  0 : reversedNum;
}

reverse(-1230);
