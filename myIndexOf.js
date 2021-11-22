Array.prototype.myIndexOf = function (element) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == element) {
      return i;
    }
  }
  return -1;
};
