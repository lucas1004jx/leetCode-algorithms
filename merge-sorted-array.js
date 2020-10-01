/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
 */

const merge = (nums1, m, nums2, n) => {
    let p1 = m - 1;
    let p2 = n - 1;

    for (let i = nums1.length - 1; i >= 0; i--) {
        if (n === 0 || p2 < 0) break;

        if (m > 0 && nums1[p1] >= nums2[p2]) {
            nums1[i] = nums1[p1--];
        } else {
            nums1[i] = nums2[p2--];
        }

    }

};
const nums1 = [0];
const m = 0;
const nums2 = [1];
const n = 1;

merge(nums1, m, nums2, n);

console.log('nums1-->', nums1);