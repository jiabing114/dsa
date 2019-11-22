/**
 * merge 将两个有序数组，有序的合并
 * 
 * @param {array} array1 
 * @param {array} array2 
 */
function merge(array1, array2 = []) {
    const mergedLength = array1.length + array2.length;
    const mergedArray = new Array(mergedLength);

    // 合并两个有序数组，按照大小排序
    let i = 0, j = 0, k = 0;  // i代表第一个数组指针，j代表第二个数组指针，k代表合并数组指针
    while(i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            mergedArray[k] = array1[i];
            i++;
            k++;
        } else {
            mergedArray[k] = array2[j];
            j++;
            k++;
        }
    }
    while(i === array1.length && k < mergedLength) {
        mergedArray[k] = array2[j];
        j++;
        k++;
    }
    while(j === array2.length && k < mergedLength) {
        mergedArray[k] = array1[i];
        i++;
        k++;
    }

    return mergedArray;
}

function splitSort(array) {
    const size = array.length;
    // base condition
    if (size < 2) {
        return array;
    }
    // split in half
    const half = Math.ceil(size / 2);
    return merge(
        splitSort(array.slice(0, half)),
        splitSort(array.slice(half))
    );
}

/**
 * merge sort
 * 
 * runtime: O(nlgn)
 * @param {Array|Set} collection 
 */
function mergeSort(collection) {
    const array = Array.from(collection);

    return splitSort(array);
}

module.exports = mergeSort;
