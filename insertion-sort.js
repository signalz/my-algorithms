/**
 * The idea is to divide the array into two subsets – sorted subset and unsorted subset.
 * Initially sorted subset consists of only one first element at index 0.
 * Then for each iteration, insertion sort removes next element from the unsorted subset,
 * finds the location it belongs within the sorted subset, and inserts it there.
 * It repeats until no input elements remain.
 */

function insertionSortAsc(array) {
  let sortedArray = array;
  console.log(sortedArray)
  for (let i = 1; i < sortedArray.length; i++) {
    const value = sortedArray[i];
    let j = i;
    while (j > 0 && sortedArray[j - 1] > value) {
      sortedArray[j] = sortedArray[j - 1];
      j--;
    }

    sortedArray[j] = value;
    console.log(sortedArray)
  }

  return sortedArray;
}

function insertionSortDesc(array) {
  let sortedArray = array;
  console.log(sortedArray)
  for (let i = 1; i < sortedArray.length; i++) {
    const value = sortedArray[i];
    let j = i;
    while (j > 0 && sortedArray[j - 1] < value) {
      sortedArray[j] = sortedArray[j - 1];
      j--;
    }

    sortedArray[j] = value;
    console.log(sortedArray)
  }

  return sortedArray;
}

module.exports = {
  insertionSortAsc,
  insertionSortDesc
}
