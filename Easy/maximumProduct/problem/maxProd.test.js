import { prod } from "./index";
describe("Maximum Product in an Array", () => {
  it("should return The pair", () => {
    const simpleArray = [1, 2, 3, 4, 5];
    const simpleProd = [4, 5];
    const negativeArray = [-10, -3, 5, 6, -2];
    const negativeProd = [-10, -3];

    expect(prod(simpleArray)).toEqual(simpleProd);
    expect(prod(negativeArray)).toEqual(negativeProd);
  });
});
