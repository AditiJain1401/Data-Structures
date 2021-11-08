function twoSum(arr, target) {
  let index = 0; //index =0
  const map = {}; //map{}
  while (index < arr.length) {
    //true, true, true
    const remaining = target - arr[index]; //0-3=-3
    if (remaining in map) {
      //false, false, true
      return [index, map[remaining]]; //[2,1]
    }
    map[arr[index]] = index; //{3:0}, {3:0,2:1}

    index += 1; //index:1, index:2
  }
}
console.log(twoSum([-3, 4, 3, 90], 0));
