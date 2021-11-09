function smallerNumbersThanCurrent(nums) {
  const smallerNums = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (j != i && nums[j] < nums[i]) {
        count = count + 1;
      }
    }
    smallerNums.push(count);
  }
  return smallerNums;
}
console.log(smallerNumbersThanCurrent([8, 1, 2, 3, 4]));
