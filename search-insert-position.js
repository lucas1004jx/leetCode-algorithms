/**
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
 *
 */

const searchInsert = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    const findTarget = (middleIndex) => {
        if (start > end) return start;
        const middleNum = nums[middleIndex];
        if (target > middleNum) {
            start = middleIndex + 1;
            const newMiddleIndex = Math.floor((start + end) / 2);
            return findTarget(newMiddleIndex);
        }
        if (target < middleNum) {
            end = middleIndex - 1;
            const newMiddleIndex = Math.floor((start + end) / 2);
            return findTarget(newMiddleIndex);
        }

        return middleIndex;
    }

    return findTarget(Math.floor((start + end) / 2));

};

const nums = [1, 3, 5, 6]
const target = 5;

const result = searchInsert(nums, target);

console.log('result-->', result);