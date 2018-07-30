function toLowerCase(string) {
  var new_string = '';

  for (var i = 0; i < string.length; i++) {
    if (string[i] >= 'A' && string[i] <= 'Z') {
      new_string += String.fromCharCode(string.charCodeAt(i) + 32);
    } else {
      new_string += string[i];
    }
  }
  console.log(new_string);
}


toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('abcDEF');      // "abcdef"
toLowerCase('123');         // "123"
