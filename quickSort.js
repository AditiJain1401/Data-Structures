//Working of sort function
function quickSort(arr, lb = 0, ub = arr.length - 1) {
    if (lb < ub) {
        let result = partition(arr, lb, ub)
        quickSort(arr, lb, result - 1)
        quickSort(arr, result + 1, ub)
    }
    return arr
}

function partition(array, lb, ub) {
    let pivot = array[lb];
    let start = lb;
    let end = ub;
    while (start < end) {
        while (array[start] <= pivot) {
            start++
        }
        while (array[end] > pivot) {
            end--;
        }
        if (start < end) {
            swap(array, start, end)
        }
    }
    swap(array, lb, end)
    return end;
}

function swap(array, element1, element2) {
    let temp = array[element1];
    array[element1] = array[element2];
    array[element2] = temp;
    console.log(array)
}

console.log(quickSort([7, 3, 5, 12, 7, 33, 1, 10, 15]))