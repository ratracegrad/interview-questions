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
    /* YOUR CODE GOES HERE */

    function titleCase(str) {
        //Place the string in lower case first
        string = string.toLowerCase();
        // str = "I love to swim on a hot day".toLowerCase();
        // str = "I love to swim on a hot day";

        // Split the string into an array
        string = string.split(' ');
        // str = ["i", "love", "to", "swim", "on", "a", "hot", "day"];

        //For loop to go through each time to capitalize the first letter
        for (var i = 0; i < str.length; i++) {
            string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);

            titleCase();

        };
    }

    return str.join(' '); // ["I", "Love", "To", "Swim", "On", "A", "Hot", "Day"].join(' ')
}

titleCase("I love to swim on a hot day");