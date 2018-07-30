function generatePattern(n) {
  var j = [];

  function strings(a) {
    var string = ''

    for(var i = 0; i < a; i++) {
      string += '*';
    }
    return string;
  }

  for(var i = 1; i <= n; i++){
    j.push(i)
    console.log(j.join('') + strings(n-i));
  }
}


generatePattern(7);
