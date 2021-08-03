import { sort } from "./index";
describe("Binary Array Solution Test", () => {
  it("should return binary array in linear time", () => {
    const array = [0, 1, 1, 1, 1, 0];
    const array2 = [0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1];
    const sortedArray = [0, 0, 1, 1, 1, 1];
    const sortedArray2 = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];

    expect(sort(array)).toEqual(sortedArray);
    expect(sort(array).length).toBe(sortedArray.length);
    expect(sort(array2)).toStrictEqual(sortedArray2);
    expect(sort(array2).length).toBe(sortedArray2.length);
  });
});
