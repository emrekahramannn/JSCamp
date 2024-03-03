/* FİRST QUESTİON */
function isPrime(num) {
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
}

function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    result = isPrime(numbers[i]);

    if (result) {
      console.log(numbers[i]);
    }
  }
}

findPrime(2, 5, 8, 21, 13);
findPrime(3, 5);
findPrime(2, 4, 8, 15, 17, 21, 23, 35, 40, 41, 50, 67, 71, 80, 100, 101);

/* SECOND QUESTION */
function sumOfPositiveDividers(num) {
  /* calculate the sum of positive dividers of given number (exclude number itself) */
  let total = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      total += i;
    }
  }
  return total;
}

function isFriends(num1, num2) {
  let num1_positive_dividers = sumOfPositiveDividers(num1);
  let num2_positive_dividers = sumOfPositiveDividers(num2);

  if (num1 === num2_positive_dividers && num2 === num1_positive_dividers) {
    console.log(`${num1} and ${num2} are friend numbers`);
  } else {
    console.log(`${num1} and ${num2} are not friend numbers`);
  }
}

isFriends(220, 284);
isFriends(1184, 1210);
isFriends(2620, 2924);
isFriends(5020, 5564);
isFriends(6232, 6368);
isFriends(10744, 10856);

/* THIRD QUESTION */
function isPerfectNumber(num) {
  if (num <= 1) {
    return false;
  }
  let total = sumOfPositiveDividers(num);
  if (num === total) {
    return true;
  }
}

for (let i = 0; i <= 1000; i++) {
  result = isPerfectNumber(i);
  if (result) console.log(`${i} is a perfect number`);
}

/* FOURTH QUESTION */
for (let i = 0; i <= 1000; i++) {
  result = isPrime(i);

  if (result) {
    console.log(i);
  }
}
