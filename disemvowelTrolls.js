//long solution
function disemvowel(str) {
  var newStr = "";
  for (i = 0; i <= str.length; i++) {
    if (str.charAt(i) != "a" || str.charAt(i) != "e" || str.charAt(i) != "i" || str.charAt(i) != "o" || str.charAt(i) != "u") {
      newStr += str.charAt(i)
    }
    return newStr;
  }
}

//one liner

  const disemvowel = str => str.replace(/[aeiouAEIOU]/g, '');

