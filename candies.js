function kidsWithCandies(candies, extraCandies) {
  const higherCandies = [];
  let maxNum = 0;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > maxNum) {
      maxNum = candies[i];
    }
  }
  for (i = 0; i < candies.length; i++) {
    const totalCandies = candies[i] + extraCandies;
    if (totalCandies >= maxNum) {
      higherCandies.push(true);
    } else {
      higherCandies.push(false);
    }
  }
  return higherCandies;
}
console.log(kidsWithCandies([10, 2, 4, 8, 9, 5], 2));
