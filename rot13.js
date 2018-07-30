function rot13(string) {
  var code = '';
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var i;

  for (i = 0; i < string.length; i++) {
    if (alphabet.indexOf(string[i]) === -1 &&
        alphabetUpper.indexOf(string[i]) === -1) {
          code += string[i];
    } else if (alphabet.indexOf(string[i]) !== undefined && 
        alphabet.indexOf(string[i]) !== -1) {
          code += alphabet[((alphabet.indexOf(string[i])) + 13) % 26];
    } else if (alphabetUpper.indexOf(string[i]) !== undefined && 
             alphabetUpper.indexOf(string[i]) !== -1) {
               code += alphabetUpper[((alphabetUpper.indexOf(string[i])) + 13) % 26];
    }
  }
  console.log(code);
  return code;
}

rot13("lalala");
rot13("la la la");
rot13("LA LA LA");
rot13("nynyn");
rot13('Teachers open the door, but you must enter by yourself.');
rot13('    ');
rot13(rot13('Teachers open the door, but you must enter by yourself.'));
