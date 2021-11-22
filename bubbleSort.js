//polyfill of sort function
function swap(arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp;
    return arr
}

function sort(array) {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j + 1] < array[j]) {
            array = swap(array, j, j + 1);
        }
    }
    return array;
}
console.log(sort([8, 95, 46, 20, 27, 100]));