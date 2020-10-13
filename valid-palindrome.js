/**
 * 
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
 */


const isPalindrome_1 = (s) => {

    const string = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (string.length === 0) return true;
    const reversed = (s) => {
        if (s.length <= 1) return s[0];
        return s[s.length - 1] + reversed(s.slice(0, s.length - 1));
    }
    const reversedString = reversed(string);
    console.log('string-->', string);
    console.log('reversedString-->', reversedString);
    if (string === reversedString) return true;
    return false;
};

const isPalindrome = (s) => {

    const string = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (string.length === 0) return true;
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) return false;
    }
    return true;
}

const s = "Damosel, a poem? A carol? Or a cameo pale? (So mad!)";
const result = isPalindrome(s);

console.log('result-->', result);
