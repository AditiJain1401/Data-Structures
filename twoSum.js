function twoSum(arr, target) {
  let index = 0; //index =0
  const map = {}; //map{}
  while (index < arr.length) {
    const remaining = target - arr[index]; //0-3=-3
    if (remaining in map) {
      return [index, map[remaining]]; 
    }
    map[arr[index]] = index; 

    index += 1; //index:1, index:2
  }
}
console.log(twoSum([-3, 4, 3, 90], 0));
