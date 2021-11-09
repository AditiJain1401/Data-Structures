function numJewelsinStones(jewels, stones) {
  let count = 0;
  for (i = 0; i < jewels.length; i++) {
    for (j = 0; j < stones.length; j++) {
      if (stones[j] === jewels[i]) {
        count += 1;
      }
    }
  }
  return count;
}
console.log(numJewelsinStones("aA", "aAbbBA"));
