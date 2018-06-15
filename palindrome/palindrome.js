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

module.exports= function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;

};
