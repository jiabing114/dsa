/**
 * 1. 选择一个值作为pivot，将所有小于其的值放在左侧，
 * 大于其的值放在右侧。
 * 2. 这里选择将最后一位，作为pivot
 * 
 * @param {array} array 
 * @param {number} start
 * @param {number} end 
 */
function partition(array, start, end) {
    const pivot = array[end];
    let partitionIndex = start;
    for (let i = start; i < end; i++) {
        // 如果当前访问值小于pivot，则将其与partitionIndex所在的值交换
        if (array[i] < pivot) {
            [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]];
            partitionIndex++;
        }
    }
    // 最后将pivot与partitionIndex所在值交换
    [array[end], array[partitionIndex]] = [array[partitionIndex], array[end]];

    return partitionIndex;
}


/**
 * 
 * @param {Array} array 
 * @param {number} start 
 * @param {number} end 
 */
function quickSort(array, start = 0, end = array.length - 1) {
    if (start < end) {
        const partitionIndex = partition(array, start, end);
        quickSort(array, start, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, end);
    }
    return array
}

module.exports = quickSort;