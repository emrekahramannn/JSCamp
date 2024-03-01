function perfectNumber(num) {
  for (let i = 1; i < num; i++) {
    let sumDividers = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j == 0) {
        sumDividers += j;
      }
    }
    if (sumDividers == i) {
      console.log(`${i} bir mükemmel sayıdır`);
    }
  }
}

perfectNumber(10000);
