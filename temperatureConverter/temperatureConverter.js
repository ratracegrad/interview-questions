/***************************************************************
 *                                                             *
 *                       CodePrep.io                           *
 *                                                             *
 *   Function:  temperatureConverter(num, str)                 *
 *   Input:    1 number parameter and 1 string parameter       *
 *   Output:   number to one decimal place                     *
 *                                                             *
 *   Output expectations:                                      *
 *   var myTest = temperatureConverter(80, 'c');               *
 *   console.log(myTest);  // 26.7                             *
 *                                                             *
 *                                                             *
 *   Write the code for the temperatureConverter function      *
 *   that accepts two parameters: a number and a a string.     *
 *   The first parameter is a temperature reading. The         *
 *   second parameter is single character that is the          *
 *   temperature.  The values are either 'F' for Fahrenheit    *
 *   and 'C' if the temperature is in Celsius. The second      *
 *   parameter can be upper or lowercase.                      *
 *                                                             * 
 *   The function will convert the temperature                 *
 *   to the equivalent value in the opposite temperature.      *
 *   (i.e. you convert Fahrenheit to Celsius and vice versa)   *
 *   The function will return the converted value to one       *
 *   decimal place.                                            *
 *                                                             *
 *   If no value is given for second parameter then assume     *
 *   the given temperature is in Fahrenheit and you convert    *
 *   it to Celsius.                                            *
 *                                                             *
 **************************************************************/

module.exports= function temperatureConverter(deg, type = 'f') {
/* YOUR CODE GOES HERE */
    return type === "f"
      ? ((deg - 32) * (5 / 9)).toFixed(1)
      : (deg * (9 / 5) + 32).toFixed(1);

};
