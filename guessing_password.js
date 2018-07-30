var guess;
var tries = 0;
var password = 'password'

while (tries < 3) {
 guess = prompt('What is hte password: ')
 tries++;

if (guess == password) {
  console.log('You have successfully logged in.');
  break;
} else if (guess != password && tries < 3) {
  console.log('You have been denied access.')
  tries += 1;
} else {
  console.log('You have been denied access.')
  break;
}
}
