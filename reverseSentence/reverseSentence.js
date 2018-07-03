/***************************************************************
 *                                                             *
 *                       CodePrep.io                           *
 *                                                             *
 *   Function:  reverseSentence(str)                           *
 *   Input:    1 string parameter                              *
 *   Output:   string                                          *
 *                                                             *
 *   Output expectations:                                      *
 *   var myTest = reverseSentence('hello world');              *
 *   console.log(myTest);  // 'olleh dlrow'                    *
 *                                                             *
 *                                                             *
 *   Write the code for the reverseSentence function that      *
 *   accepts a string input and then returns a string          *
 *   that reverses every word in the input string.             *
 *   If the string has any punctuation then the punctuation    *
 *   should be placed at the end of the reversed word          *
 *   like it is in the inital string input. For example        *
 *   if the input string is 'hi!' then the output should be    *
 *   'ih!'.
 *                                                             *
 **************************************************************/

module.exports= function reverseSentence(str) {


    /* YOUR CODE GOES HERE */

    function reverseString(str) {

        var splitString = str.split("");
        //var splitString = "hello".split("");
        //this should return a split array ["h", "e", "l", "l", "o"]


        var reverseArray = splitString.reverse();
        // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]


        var joinArray = reverseArray.join("");
        // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"


        return joinArray; // "olleh"
    }

    reverseString("hello");
};
