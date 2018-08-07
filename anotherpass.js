while ( password !== 'correctpassword' ) {
var attempt = 0;
password = prompt('Enter pass: ')
attempt++;

if (password === 'correctpassword') {
  console.log('You have successfully logged in.');
  break;
} else if (password !== 'correctpassword' && attempt > 2) {
  console.log('You have been denied access.');
  break;
} else {
  console.log('Wrong password.');
}
}
