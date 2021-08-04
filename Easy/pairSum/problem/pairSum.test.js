import { pairFind } from "./index";
describe("Pair Sum Solution Test", () => {
  it("should return The pair", () => {
    const sum = 10;
    const arrayWithPair = [8, 7, 2, 5, 3, 1];
    const arrayWithoutPair = [8, 1, 6, 3, 6, 8];
    // Bruteforce
    expect(pairFind(arrayWithPair, sum)).toStrictEqual([8, 2]);
    expect(pairFind(arrayWithoutPair, sum)).toBeFalsy();
  });
});
