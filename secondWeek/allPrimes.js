function allPrimes(range) {
  for (let i = 2; i <= range; i++) {
    let isPrime = true;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${i} is a prime number`);
    }
  }
}

allPrimes(1000);
