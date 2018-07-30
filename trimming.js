
function trimleft(str) {
  var i;
  var leftindex = 0;

  for (i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      leftindex = i;
      break;
    }
  }

  return leftindex;
}

function trimright(str) {
  var i;
  var rigthindex = 0;

  for (i = str.length; i >= 0; i--) {
    if (str[i] !== ' ') {
      rightindex = i;
      break;
    }
  }

  return rightindex;
}

function trim(str) {
  var leftindex = trimleft(str);
  var rightindex = trimright(str);
  var trimmed = []

  for (var i = 0; i < str.length; i++) {
    if (i >= leftindex && i < rightindex) {
      trimmed.push(str[i]); 
    }
  }
  return trimmed.join('');
}
console.log(trim('  abc  '));
console.log(trim('abc  '));
console.log(trim('  abc'));
console.log(trim(' a b c  '));
console.log(trim('   '));
 
