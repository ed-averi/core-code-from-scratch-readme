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

//Solution #2
/**
 * It loops through the string and checks if each character is a vowel. If it is, it adds one to the
 * vowel count.
 * @param str - the string we want to count the vowels in
 * @returns The number of vowels in the string.
 */
  function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }

  // Solution #3
  //https://youtu.be/zFhhf7XzhYo

/**
 * It loops through the string and checks if the character is a vowel. If it is, it increments the
 * counter
 * @param str - the string to search
 * @returns The number of vowels in the string.
 */
  function getCount(str){
    let vowelsCount= 0;

    for(let i = 0; i <str.length; i++){
        switch (str[i]){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowelsCount++;
                break;
                default:
                break;
        }
    }
   return vowelsCount;
  }