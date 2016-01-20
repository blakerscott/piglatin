var piglatin = function(str) {

  var firstVowel = str.search(/[aeiou].*/);

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
        var firstLetters = str.slice(0,firstVowel + 1);
      }
      return str.slice(firstVowel + 1, str.length).concat(firstLetters, "ay");
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
