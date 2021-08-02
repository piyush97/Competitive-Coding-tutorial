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
