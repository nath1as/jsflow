function isPrime(number) {
  var divisor;

  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  divisor = 3;

  while (divisor < number) {
    if (number % divisor === 0) {
      return false;
    }

    divisor += 2;
  }

  return true;
}

console.log(isPrime(55));
