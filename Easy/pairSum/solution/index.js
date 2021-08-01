/**
 * Brute Force method for finding Pair Sums
 * Time Complexity O(n^2)
 * @param {[]} array
 * @param {number} sum
 */
const pairFind = (array, sum) => {
  console.log(`Pair find with brute force method`);
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j <= array.length; j++) {
      if (array[i] + array[j] === sum) {
        console.log(`Pair found (${array[i]}, ${array[j]})`);
        return;
      }
    }
  }
  console.log(`Pair not found`);
};

/**
 * pair find with sorted Array
 * Time complexity is O(n.log(n))
 * @param {*} array
 * @param {*} sum
 * @return {*}
 */
const pairFindWithSorting = (array, sum) => {
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
      console.log(`Pair found (${array[low]}, ${array[high]})`);
      return;
    }
    //   increment `low` index if the total is less than the desired sum;
    // decrement `high` index if the total is more than the desired sum

    if (array[low] + array[high] < sum) {
      low = low + 1;
    } else high = high - 1;
  }
  console.log("Pair not found");
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
const pairFindWithHash = (array, sum) => {
  let hash = {};
  let index = 0;

  let results = [];

  for (index in array) {
    if (hash[array[index]]) {
      results.push([hash[array[index]], array[index]]);
      console.log(`Pair found ${hash[array[index]]}, ${array[index]}`);
    } else {
      hash[sum - array[index]] = array[index];
    }
  }
  results === [] && console.log("Pair not found");
};
console.time(`With Brute Force`);
pairFind([8, 7, 2, 5, 3, 1], 10);
console.timeEnd(`With Brute Force`);
console.time(`With Sorting`);
pairFindWithSorting([8, 7, 2, 5, 3, 1], 10);
console.timeEnd(`With Sorting`);
console.time(`With Hash`);
pairFindWithHash([8, 7, 2, 5, 3, 1], 10);
console.timeEnd(`With Hash`);
