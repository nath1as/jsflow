function logOddNumbers(num) {
  for(var i = 1; i <= num; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

logOddNumbers(19);
