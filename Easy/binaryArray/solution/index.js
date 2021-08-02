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
