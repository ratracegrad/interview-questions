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

module.exports= function longestWord(str) {
    /* YOUR CODE GOES HERE */

    function findLongestWord(str) {
        //Split the string into an array of strings
        var strSplit = str.split(' ');
        // var strSplit = "The happy cat jumped on the couch when he saw his mom".split(' ');
        // var strSplit = ["The", "happy", "cat", "jumped", "on", "the", "couch", "when", "he", "saw", "his", "mom"];

        var longestWord = 0;
        for(var i = 0; i < strSplit.length; i++){
            // If strSplit[i].length is greater than the word it is compared to
            //the longestWord takes this new value
            if(strSplit[i].length > longestWord){
                longestWord = strSplit[i].length;
            }
        }
        return longestWord;
    }
    findLongestWord("The happy cat jumped on the couch when he saw his mom");

};


