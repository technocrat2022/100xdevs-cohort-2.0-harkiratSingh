/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const newStr = str.toLowerCase()
    int count = 0;
    if((newStr[i]=='a'||newStr[i]=='e'||newStr[i]=='i'||newStr[i]=='o'||newStr[i]=='u')||
       (newStr[i]=='A'||newStr[i]=='E'||newStr[i]=='I'||newStr[i]=='O'||newStr[i]=='U')){
            count += 1;
    }
    return count;
}

module.exports = countVowels;

