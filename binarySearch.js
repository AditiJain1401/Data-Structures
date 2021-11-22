// this program shows the functioning of Binary Search
function binarySearch(array, element, start = 0, end = array.length - 1) {
    let index = Math.floor(start + end / 2);
    let value = array[index]; //value -> item stored at index index of the given array
    if (value == element) {
        return index; //return the index at which element is found
    } else if (element < value) {
        end = index - 1
        binarySearch(array, element, start, end);
    } else if (element > value) {
        start = index + 1
        binarySearch(array, element, start, end);
    } else {
        return -1; //return -1 if element is not in the given array
    }
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
