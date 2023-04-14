import { add } from "./add-test";

describe("add", () => {
  it("should add correctly", () => {
    const x = 1;
    const y = 2;
    const expected = 3;
    expect(add(x, y)).toEqual(expected);
  });
});
