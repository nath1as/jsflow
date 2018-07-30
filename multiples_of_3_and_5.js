function multiplesOfThreeAndFive() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 && i % 5) {
      console.log(String(i) + '!');

    } else if (i % 3 || i % 5) {
      console.log(String(i));
    }
  }
}
multiplesOfThreeAndFive();
