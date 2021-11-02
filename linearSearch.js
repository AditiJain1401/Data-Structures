//this program shows the functioning of linear search  
function linearSearch(array, element) {
    for (let index in array) {
        if (array[index] == element) {
            return index; //returns the index at which element is found
        }
    }
    return null; //returns null if element is not found in array
}
console.log(linearSearch([1, 2, 3], 3));