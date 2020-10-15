/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */

const moveZeroes = (nums) => {

    const recursive = (p1, p2) => {
        if (p2 >= nums.length) return;
        if (nums[p1] === 0 && nums[p2] === 0) {
            recursive(p1, p2 + 1);
        } else if (nums[p1] === 0) {
            [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
            recursive(p1 + 1, p2 + 1);
        } else {
            recursive(p1 + 1, p2 + 1);
        }

    }

    recursive(0, 0);

    return nums;
};
const nums = [1, 0, 1];
const result = moveZeroes(nums);
console.log('result---->', result);