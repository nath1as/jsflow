function repeat(string, times) {
  var new_string = ''
 for (var i = 0; i < times; i++) {
    new_string += string;
 }
 console.log(new_string);
}

console.log(repeat('abc', 3));
