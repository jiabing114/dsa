const selectionSort = require('./selection-sort');
const bubbleSort = require('./bubble-sort');
const insertionSort = require('./insertion-sort');
const mergeSort = require('./merge-sort');
const quickSort = require('./quick-sort');


const unsortedArray = [5,2,1,4,6,8,3,7];

const selectionSortedArray = selectionSort(unsortedArray);
const bubbleSortedArray = bubbleSort(unsortedArray);
const insertionSortedArray = insertionSort(unsortedArray);
const mergeSortedArray = mergeSort(unsortedArray);
const quickSortedArray = quickSort(unsortedArray);
console.log(quickSortedArray);