function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        if (min != i) {
            swap(array, i, min);
        }
    }
    return array;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
console.log(selectionSort([1, 66, 333, 141, 90, 39]));