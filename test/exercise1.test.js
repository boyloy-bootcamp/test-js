const variableManipulation = require("./../excercise/exercise1");

test("swapping variables a and b", () => {
  let a = 5;
  let b = 10;

  variableManipulation(a, b);

  expect(a).toBe(10);
  expect(b).toBe(5);
});
