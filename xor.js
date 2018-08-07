function isXor(bool1, bool2) {
  if ((bool1 && !bool2) || (!bool1 && bool2)) {
    console.log('true')
  } else {
    console.log('false')
  }
}

isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false
