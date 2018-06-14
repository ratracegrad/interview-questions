/***************************************************************
 *                                                             *
 *                       CodePrep.io                           *
 *                                                             *
 *   Function:  palindrome(str)                                *
 *   Input:    1 string parameter                              *
 *   Output:   boolean                                         *
 *                                                             *
 *   Output expectations:                                      *
 *   var myTest = palindrome('civic');                         *
 *   console.log(myTest);  // true                             *
 *                                                             *
 *   A palindrome is a word, phrase or number which            *
 *   reads the same backward or forward.                       *
 *                                                             *
 *   Write the code for the palindrome function that           *
 *   accepts a string input and then returns true or           *
 *   false if that string is a palindrome. Allowances          *
 *   must be made for capital letters, punctuation and         *
 *   word dividers.                                            *
 *                                                             *
 **************************************************************/

let letterCount = function(str) {
    /* YOUR CODE GOES HERE */
    let obj = {};
    str.forEach((char) => {
        if (obj[char]) {
            obj[char] = obj[char] + 1;
        } else {
            obj[char] = 1;
        }
    });

    return obj;

};

module.exports = {
    letterCount: letterCount
};