/**
 * Maximum product in an array
 *
 * @param {*} array
 * @return {*}
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
