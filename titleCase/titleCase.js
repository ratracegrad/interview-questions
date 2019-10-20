/***************************************************************
 *                                                             *
 *                       CodePrep.io                           *
 *                                                             *
 *   Function:  titleCase(str)                                 *
 *   Input:    1 string parameter                              *
 *   Output:   string                                          *
 *                                                             *
 *   Output expectations:                                      *
 *   var myTest = titleCase('heLLo woRld');                    *
 *   console.log(myTest);  // Hello World                      *
 *                                                             *
 *                                                             *
 *   Title Case refers to punctuation in which the first       *
 *   letter of a word is uppercase and all other letters       *
 *   in the word are lowercase.                                *
 *                                                             *
 *   Write the code for the titleCase function that            *
 *   accepts a string input and then returns a string          *
 *   in which every word in that string is title case.         *
 *                                                             *
 **************************************************************/
 module.exports= function titleCase(str) {
// /* YOUR CODE GOES HERE */
    
 return str
   .split(" ")
   .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
   .join(" ");

 };