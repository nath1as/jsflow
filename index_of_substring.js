function indexOf(str1, str2) {
  var index = [];
  var i;
  var j;

  for (i = 0; i < str1.length; i++) {
    var match = 0;

    for (j = 0; j < str2.length; j++) {
      if (str1[i + j] === str2[j]) {
        match++;
      } else {
        break;
      }
    }
    if (match == str2.length) {
      return i;
    }
    
  }
  return -1;
}
console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                   // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));     

function lastIndexOf(str1, str2) {
  var index = [];
  var i;
  var j;

  for (i = str1.length; i >= 0; i--) {
    var match = 0;

    for (j = 0; j < str2.length; j++) {
      if (str1[i + j] === str2[j]) {
        match++;
      } else {
        break;
      }
    }
    if (match == str2.length) {
      return i;
    }
    
  }
  return -1;
}


console.log(
lastIndexOf('Some strings', 's'),
lastIndexOf('Blue Whale, Killer Whale', 'Whale'),
lastIndexOf('Blue Whale, Killer Whale', 'all'),
);
