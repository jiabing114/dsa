/**
 * selection sort
 * 
 * runtime: O(n^2)
 * @param {array|set} collection 
 */
function selectionSort(collection) {
    const array = Array.from(collection);

    for (let left = 0; left < array.length; left++) {
        let selection = left;

        for (let right = left + 1; right < array.length; right++) {
            if (array[selection] > array[right]) {
                selection = right;
            }
        }

        // 如果right中，有小于当前selection值的，进行交换
        if (selection !== left) {
            [array[left], array[selection]] = [array[selection], array[left]];
        }
    }

    return array;
}

module.exports = selectionSort;
