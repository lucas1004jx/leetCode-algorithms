/**
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

const twoSum = (nums, target) => {
    
    for(let i=0; i<nums.length-1;i++){
       for(let n = i+1; n<nums.length;n++){
           const sum = nums[i] + nums[n];
        if(sum === target) return [i,n];
       }
    }
    
};

const twoSum2 = (nums, target) => {
    for(let i=0; i < nums.length; i++){
        const currentNum = nums[i];
        const diff = target - currentNum;
        const diffIdx = nums.findIndex(num => num === diff);
        if(diffIdx !== i && diffIdx !== -1) return[i,diffIdx];
    }
}


const twoSum3 = (nums, target) => {
    const hashMap = new Map();
    for(let i=0; i<nums.length; i++){
        const current= nums[i];
        if(hashMap.has(current)) return [hashMap.get(current), i];
        const diff = target - current;
        hashMap.set(diff,i); 
    }
}

const arr = [2,7,11,15];
const target = 9;
const r = twoSum3(arr,target);
console.log('r-->',r);