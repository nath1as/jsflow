function isPrime(num) {
  var prime = true;

  if (num <= 1) {
    prime = false;
  }

  for(var i= num -1; i > 1; i--) {
    if (num % i !== 0) {
      prime = true;
    } else if (num % i === 0) {
      prime = false;
      break;
    }
}
  console.log(String(prime));
}

isPrime(43);
isPrime(55);
isPrime(1);
isPrime(3);
isPrime(7);
isPrime(11);

