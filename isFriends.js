function isFriends(num1, num2) {
  let num1_sum = 0;
  let num2_sum = 0;

  for (let i = 1; i < num1; i++) {
    if (num1 % i == 0) {
      num1_sum += i;
    }
  }

  for (let j = 1; j < num2; j++) {
    if (num2 % j == 0) {
      num2_sum += j;
    }
  }

  if (num1_sum === num2 && num2_sum == num1) {
    console.log(`${num1} ve ${num2} arkadaş sayılardır.`);
  } else {
    console.log(`${num1} ve ${num2} arkadaş sayı değillerdir.`);
  }
}

isFriends(220, 284);
