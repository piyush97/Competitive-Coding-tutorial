/**
 * Linear Time Soluiton
 * Time complexity O(n)
 *
 * @param {*} arr
 * @return {*}
 */
export const findEquilibirumIndex = (arr) => {
  let left = [],
    equilibriumIndices = [],
    right = 0;
  left[0] = 0;

  for (let i = 1; i < arr.length; i++) {
    left[i] = left[i - 1] + arr[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (left[i] === right) {
      equilibriumIndices.push(i);
    }
    right += arr[i];
  }
  return equilibriumIndices;
};
