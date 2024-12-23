import { sum } from "../sum";

test("Sum Function Should calculate sum of 2 Numbers", () => {
  const result = sum(9, 9);

  expect(result).toBe(18); //Assertion
});
