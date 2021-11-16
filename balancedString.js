function balancedStringSplit(s) {
  let rCount = 0;
  let lCount = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "R") {
      rCount += 1;
    } else {
      lCount += 1;
    }
    if (rCount == lCount) count += 1;
  }
  return count;
}
