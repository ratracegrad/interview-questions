/***************************************************************
 *                                                             *
 *                       CodePrep.io                           *
 *                                                             *
 *   Function:  letterCount(str)                               *
 *   Input:    1 string parameter                              *
 *   Output:   object                                          *
 *                                                             *
 *   Output expectations:                                      *
 *   var myTest = letterCount('hello world');                  *
 *   console.log(myTest);                                      *
 *   // {   h: 1,
 *          e: 1,
*           l: 3,
*           o: 2,
*           w: 1,
*           r: 1,
*           d: 1
*      }
 *                                                             *
 *                                                             *
 *   Write the code for the letterCount function that          *
 *   accepts a string input and then returns an object         *
 *   with each character in the string as a key and the        *
 *   value is the number of times that character appears       *
 *   in the string.                                            *
 *                                                             *
 **************************************************************/

module.exports = function letterCount(str) {
    /* YOUR CODE GOES HERE */

    //Remove whitespaces, digits and special characters, then split the string into an array
    const strArr = str.replace(/[\s\W\d]/g,'').split('');
    // Empty object to store the number of each letter as key value pairs
    let strObj = new Object({});

    /*Foreach arrow function: pushes every letter into if function. 
    If letter exists in object (strObj.hasOwnProperty), then count; else: add the letter as a new key value pair */
    strArr.forEach(letter =>{
    if(strObj.hasOwnProperty(letter)){
    strObj[letter] += 1;
    }
    else{
    strObj[letter] = 1;
    }
    });
    return strObj;
};

var myTest = letterCount('hello world');
console.log(myTest);
