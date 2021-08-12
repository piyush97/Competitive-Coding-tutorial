import { findEquilibirumIndex } from "./index";
describe("Equilibrium Index Solution Test", () => {
  it("should return Indices", () => {
    const array = [0, -3, 5, -4, -2, 3, 1, 0];

    expect(findEquilibirumIndex(array)).toEqual([7, 3, 0]);
    expect(findEquilibirumIndex(array).length).toBe(3);
  });
});
