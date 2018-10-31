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
    let sanitizeString = (str)=>{
        let arr = str.split(' ');
        arr = arr.filter((item)=>{
            return /[A-z]+/g.test(item);
        });
        return arr;
    }
    return (str)=>{
        let arr = sanitizeString(str);
        arr.reduce((prev, curr, index, array)=> {
            return (prev.length > curr.length) ? prev : curr;
        });
        return arr;
    }
};
