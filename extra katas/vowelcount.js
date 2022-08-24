/*

Instructions: 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/




/**
 * We're taking a string, splitting it up into an array of characters, iterating through each
 * character, and checking if it's a vowel. If it is, we increment the vowel count.
 * @param str - the string we are passing in
 * @returns The number of vowels in the string.
 */
function getCount(str) {
    let vowelsCount= 0;
  
    const vowels= ["a", "e", "i", "o", "u"]; //define our vowels in an array
    const strArr= str.split("") //taking the spring and splitting up per character, individually
    
    strArr.forEach((el) => { //iterate each element of the string array for each el(element)
      for (let i = 0; i < vowels.length; i++){
        if (el === vowels[i]){
          vowelsCount++;
        }
      }
    });
   
    return vowelsCount;
  }