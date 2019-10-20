/***************************************************************
 *                                                             *
 *                       CodePrep.io                           *
 *                                                             *
 *   Function: longestWord(str)                                *
 *   Input:    1 string parameter                              *
 *   Output:   string                                          *
 *                                                             *
 *   Output expectations:                                      *
 *   var myTest = longestWord('hello world how are you');      *
 *   console.log(myTest);  // 'hello'                          *
 *                                                             *
 *                                                             *
 *   Write the code for the longestWord function that          *
 *   accepts a string input and then returns the longest       *
 *   word in that sentence. If two or more words have the      *
 *   same number of characters then return the first one       *
 *   of the words.                                             *
 *                                                             *
 *   Allowances must be made to only count letters of the      *
 *   alphabet and not count any punctuation characters.        *
 *   word dividers.                                            *
 *                                                             *
 **************************************************************/

module.exports = function longestWord(str) {
  /* YOUR CODE GOES HERE */
  return str.split(" ").sort((a, b) => (b.length > a.length ? 1 : -1))[0];
};
