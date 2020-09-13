/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.


 */

const longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    let prefix = strs[0];

    const findCommonPrefix = (str, pattern) => {
        if (pattern.length === 0) return prefix = pattern;
        if (str.indexOf(pattern) === 0) return prefix = pattern;
        findCommonPrefix(str, pattern.substring(0, pattern.length - 1));
    }

    for (let i = 1; i < strs.length; i++) {
        if (prefix.length === 0) return '';
        findCommonPrefix(strs[i], prefix);
    }

    return prefix;

};

const arr = ["c", "acc", "ccc"];
const r = longestCommonPrefix(arr);
