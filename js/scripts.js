var piglatin = function(str) {
 /**********************
 The var firstVowel will find the numeric position of the first vowel.
 The var firstLetters is specifically for the instance where the first vowel is a u preceded by a q. It slices from the U and everything before it.
 The var firstConsts slices up to but not including the first vowel.
 ******************/
  var firstVowel = str.search(/[aeiou].*/);
  var firstLetters = str.slice(0,firstVowel + 1);
  var firstConsts = str.slice(0,firstVowel);


  if (str.substring(0,1) === "a") {
    return str.concat("ay");
  } else if (str.substring(0,1) === "e") {
    return str.concat("ay");
  } else if (str.substring(0,1) === "i") {
    return str.concat("ay");
  } else if (str.substring(0,1) === "o") {
    return str.concat("ay");
  } else if (str.substring(0,1) === "u") {
    return str.concat("ay");
  }

    else if (str.charAt(firstVowel) === "u") {
      if (str.charAt(firstVowel - 1) === "q") {
        return str.slice(firstVowel + 1, str.length).concat(firstLetters, "ay");
      }
    }

    else { return str.slice(firstVowel, str.length).concat(firstConsts, "ay");
  }
};










//
// This is an alternate way to write the if else statement
//  1. "string".substring(0, "string".search(/[aeiou].*/));
//
//  2.   switch(str.substring(0,1)){
//     //   case "a" : return str.concat("ay"); break;
//     //   case "e" : return str.concat("ay"); break;
//     //   case "i" : return str.concat("ay"); break;
//     //   case "o" : return str.concat("ay"); break;
//     //   case "u" : return str.concat("ay"); break;
//     // }
//     // if str
