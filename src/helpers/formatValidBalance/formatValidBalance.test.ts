import { formatValidBalance } from "./formatValidBalance";

describe("formatValidBalance", () => {
  describe("given a valid address", () => {
    it("should return the correct balance", () => {
      expect(
        formatValidBalance({
          status: "1",
          message: "OK",
          result: "11486002130900342664604",
        })
      ).toBe("11486002130900342664604");
    });
  });

  describe("given an invalid address", () => {
    it("should return '0' as a placeholder", () => {
      expect(
        formatValidBalance({
          status: "0",
          message: "NOTOK",
          result: "Error! Invalid address format",
        })
      ).toBe("0");
    });
  });
});
