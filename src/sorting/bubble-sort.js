/**
 * bubble sorting(冒泡排序)
 * 
 * runtime: O(n^2)
 * @param {Array|Set} collection 
 */
function bubbleSort(collection) {
    const array = Array.from(collection);
    let swapped = false;
    for (let i = 1; i < array.length; i++) {

        for (current = 0; current < array.length - 1; current++) {
            if (array[current] > array[current + 1]) {
                // 将大的数值后移
                [array[current], array[current + 1]] = [array[current + 1], array[current]];
                swapped = true;
            }
        }

        if (!swapped)  break;
    }
    
    return array;
}

module.exports = bubbleSort;