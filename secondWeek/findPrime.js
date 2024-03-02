function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let flag = true;

    if (numbers[i] < 1) {
      flag = false;
    }

    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j === 0) {
        flag = false;
        break;
      }
    }

    if (flag) {
      console.log(`${numbers[i]} is a prime number`);
    } else {
      console.log(`${numbers[i]} is not a prime number`);
    }
  }
}

findPrime(-1, 0, 2, 5, 8, 21, 13);
findPrime(3, 5);
