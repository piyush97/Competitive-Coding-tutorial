/**
 * Brute Force method for finding Pair Sums
 * Time Complexity O(n^2)
 * @param {[]} array
 * @param {number} sum
 */
export const pairFind = (array, sum) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j <= array.length; j++) {
      if (array[i] + array[j] === sum) {
        return [array[i], array[j]];
      }
    }
  }
  return false;
};

/**
 * pair find with sorted Array
 * Time complexity is O(n.log(n))
 * @param {*} array
 * @param {*} sum
 * @return {*}
 */
export const pairFindWithSorting = (array, sum) => {
  // sort the array in ascending order
  array.sort();

  // maintain two indices pointing to endpoints of the array
  let low = 0;
  let high = array.length - 1;

  //  loop till the search space is exhausted
  while (low < high) {
    // if sum is found, return the pair
    if (array[low] + array[high] === sum) {
      // Sum Found
      return [array[low], array[high]];
    }
    //   increment `low` index if the total is less than the desired sum;
    // decrement `high` index if the total is more than the desired sum

    if (array[low] + array[high] < sum) {
      low = low + 1;
    } else high = high - 1;
  }
  return false;
};

// Using Hashing or JSON

/**
 * pair find with hashing
 * Time complexity is O(n)
 *
 * @param {*} array
 * @param {*} sum
 * @return {*}
 */
export const pairFindWithHash = (array, sum) => {
  let hash = {};
  let index = 0;

  let results = [];

  for (index in array) {
    if (hash[array[index]]) {
      results.push([hash[array[index]], array[index]]);
    } else {
      hash[sum - array[index]] = array[index];
    }
  }
  return results;
};
