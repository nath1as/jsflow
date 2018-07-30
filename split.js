function splitString(string, delimiter) {
  var tempString = '';
  var i;

  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  for (i = 0; i < string.length; i += 1) {
    if (string[i] === delimiter) {
      console.log(tempString);
      tempString = '';
    } else if (delimiter === '') {
      console.log(string[i]);
    } else {
      tempString += string[i];
    }
  }

  if (tempString != '') {
    console.log(tempString);
  }
}

console.log(splitString('abc,123,hello', ','));
