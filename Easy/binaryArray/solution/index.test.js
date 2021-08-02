import { sort } from "./index";
describe("Binary Array Solution Test", () => {
  it("should return binary array in linear time", () => {
    const array = [0, 1, 1, 1, 1, 0];
    const array2 = [0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1];
    expect(sort(array)).toEqual([0, 0, 1, 1, 1, 1]);
    expect(sort(array2)).toEqual([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ]);
  });
});
