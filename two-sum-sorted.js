
/**
 * 
  Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2. 
 */


const twoSum = (nums,target) => {

    const findTarget = (idx1,idx2) => {
        let pointer1=idx1;
        let pointer2=idx2;
        const val1 = nums[pointer1];
        const val2 = nums[pointer2];
        const sum = val1 + val2;
        if(sum === target) return [pointer1+1,pointer2+1];
        if(sum < target){
            pointer1+=1;
           return findTarget(pointer1,pointer2);
        }else{
            pointer2 -= 1;
            return findTarget(pointer1,pointer2);
        }
    }

    return findTarget(0,nums.length-1); 
}

const arr = [2,3,4];
const target = 6;
const r = twoSum(arr,target);
console.log('r-->',r);