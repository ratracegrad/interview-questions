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
    let sanitizeString = (str) =>{ 
        return str.toLowerCase().split(' ').filter((character)=> /[A-z]+/g.test(character));
    }
    let arr = sanitizeString(str);
    return (arr === arr.reverse());
    
};
