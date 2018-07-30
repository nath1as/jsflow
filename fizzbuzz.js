function fizzbuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
}

fizzbuzz();


// consise
//
// function fizzbuzz() {
//   var message;
//   var i;

//   for (i = 1; i <= 100; i += 1) {
//     message = '';

//     if (i % 3 === 0) {
//       message += 'Fizz';
//     }

//     if (i % 5 === 0) {
//       message += 'Buzz';
//     }

//     console.log(message || i);
//   }
// }
