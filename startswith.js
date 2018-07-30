function startsWith(string, searchString) {
  var testString = '';

  for (var i = 0; i < searchString.length; i++) {
    if (string[i] === searchString[i]) {
    testString += searchString[i]; 
  }
}
  console.log(testString === searchString);
}
var str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false
