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
    /* small change */
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
