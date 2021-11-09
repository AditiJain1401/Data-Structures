function runningSum(nums) {
  const newArray = [];
  newArray.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    const lastElement = newArray[newArray.length - 1];
    newArray.push(lastElement + nums[i]);
  }
  return newArray;
}
