/**
 * Brute Force method to sort a binary array in linear time
 * Time Complexity O(n)
 * @param {[]} array
 */
export const sort = (array) => {
  // count number of 0's
  let zeros = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      zeros++;
    }
  }

  // put 0's at the beginning
  // Can be replaced with a for loop too make
  // sure to keep the idex global for solving in linear time
  let k = 0;
  while (zeros--) {
    array[k++] = 0;
  }

  // fill all remaining elements by 1
  while (k < array.length) {
    array[k++] = 1;
  }
  return array;
};
/**
 * Instead of counting the total number of zeroes,
 * if the current element is 0, we can place 0 at the next available position in the array.
 * After all elements in the array are processed, we fill all remaining indices by 1.
 *
 */
export const sort2 = (array) => {
  // j stores the index of the next available position
  let j = 0;
  let index = 0;
  for (index in array) {
    // if the current element is zero, put 0 at the next free
    // position in the array
    if (array[index] === 0) array[j++] = 0;
  }
  // fill all remaining indices by 1
  for (let i = j; i < array.length; i++) {
    array[j++] = 1;
  }
  return array;
};

// We can also solve this problem in linear time by using the partitioning logic of Quicksort
// The idea is to use 1 as a pivot element and make one pass of the partition process.
//  The resultant array will be sorted.

/**
 * Utility function to swap elements i and j in an array
 *
 * @param {[]} array
 * @param {number} i element
 * @param {number} j elemnt
 */
const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

export const sort3 = (array, n) => {
  // choosing pivot as 1, so making the zeros on the left side of 1, if you choose pivot as 1 then
  // make the condition as array[i]> pivot
  let pivot = 1;
  // j is another index to track
  let j = 0;

  // each time we encounter a 0, `j` is incremented, and
  // 0 is placed before the pivot
  let i = 0;
  for (i in array) {
    if (array[i] < pivot) {
      swap(array, i, j);
      j++;
    }
  }
  return array;
};
