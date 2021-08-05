import { maxProd, maxProdSort } from "./index";
describe("Maximum Product in an Array", () => {
  it("should return The pair", () => {
    const simpleArray = [1, 2, 3, 4, 5];
    const simpleProd = [4, 5];
    const negativeArray = [-10, -3, 5, 6, -2];
    const negativeProd = [-10, -3];
    const anotherCheck = [-10, -3, 2, 6];

    expect(maxProd(simpleArray)).toEqual(simpleProd);
    expect(maxProd(negativeArray)).toEqual(negativeProd);

    expect(maxProdSort(simpleArray)).toStrictEqual([5, 4]);
    expect(maxProdSort(negativeArray)).toStrictEqual([6, 5]);
    expect(maxProdSort(anotherCheck)).toStrictEqual([-10, -3]);
  });
});
