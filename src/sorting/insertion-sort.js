/**
 * insertion sort 插入排序
 * 
 * runtime: O(n^2)
 * @param {Array|Set} collection 
 */
function insertionSort(collection) {
    const array = Array.from(collection);
    for (let i = 1; i < array.length; i++) {
        const value = array[i];
        let hole = i;  // 作为左右的分界
        while(hole > 0 && array[hole - 1] > value) {
            array[hole] = array[hole - 1];
            hole--;
        }
        array[hole] = value;
    }

    return array;
}

module.exports = insertionSort;
