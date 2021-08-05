/**
 * Maximum product in an array
 * Time Complexity is O(n^2)
 *
 * @param {*} array
 * @return {[]}
 */
export const maxProd = (array) => {
  let maxProd = 0,
    maxIndex = -1,
    maxNext = -1;

  for (let index = 0; index < array.length - 1; index++) {
    for (let next = index + 1; next < array.length; next++) {
      if (maxProd < array[index] * array[next]) {
        maxProd = array[index] * array[next];
        maxIndex = index;
        maxNext = next;
      }
    }
  }
  return [array[maxIndex], array[maxNext]];
};

/**
 * Maximum product in an array
 * Time Complexity is O(n.log(n))
 *
 * @param {*} array
 * @return {[]}
 */
export const maxProdSort = (array) => {
  array.sort();
  if (array[0] * array[1] > array[array.length - 1] * array[array.length - 2]) {
    return [array[0], array[1]];
  } else return [array[array.length - 1], array[array.length - 2]];
};
