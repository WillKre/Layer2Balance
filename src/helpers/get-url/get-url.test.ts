import { getUrl } from "./get-url";
import { Network } from "../../types";

const DEFAULT_URL = "0x0000000000000000000000000000000000000000";

describe("getUrl", () => {
  describe("arbitrum", () => {
    it("should resolve to the correct url", () => {
      expect(getUrl(Network.Arbitrum, DEFAULT_URL)).toBe(
        `https://api.arbiscan.io/api?module=account&action=balance&address=${DEFAULT_URL}&tag=latest&apikey=`
      );

      expect(getUrl(Network.Arbitrum, "0x3e8476dd0276ecc918ff0768fa37561c25f3e3fa")).toBe(
        `https://api.arbiscan.io/api?module=account&action=balance&address=0x3e8476dd0276ecc918ff0768fa37561c25f3e3fa&tag=latest&apikey=`
      );
    });
  });

  describe("ethereum", () => {
    it("should resolve to the correct url", () => {
      expect(getUrl(Network.Ethereum, DEFAULT_URL)).toBe(
        `https://api.etherscan.io/api?module=account&action=balance&address=${DEFAULT_URL}&tag=latest&apikey=`
      );

      expect(getUrl(Network.Ethereum, "0x14CDb29162D30bf60e4Bd849Fcad54ee6424770B")).toBe(
        `https://api.etherscan.io/api?module=account&action=balance&address=0x14CDb29162D30bf60e4Bd849Fcad54ee6424770B&tag=latest&apikey=`
      );
    });
  });

  describe("optimism", () => {
    it("should resolve to the correct url", () => {
      expect(getUrl(Network.Optimism, DEFAULT_URL)).toBe(
        `https://api-optimistic.etherscan.io/api?module=account&action=balance&address=${DEFAULT_URL}&tag=latest&apikey=`
      );

      expect(getUrl(Network.Optimism, "0x868ce42217b8e62ea80b4b6e2e42aeb76f2f7900")).toBe(
        `https://api-optimistic.etherscan.io/api?module=account&action=balance&address=0x868ce42217b8e62ea80b4b6e2e42aeb76f2f7900&tag=latest&apikey=`
      );
    });
  });

  describe("polygon", () => {
    it("should resolve to the correct url", () => {
      expect(getUrl(Network.Polygon, DEFAULT_URL)).toBe(
        `https://api.polygonscan.com/api?module=account&action=balance&address=${DEFAULT_URL}&tag=latest&apikey=`
      );

      expect(getUrl(Network.Polygon, "0x27313635E6B7AA3CC8436E24BE2317D4A0e56BeB")).toBe(
        `https://api.polygonscan.com/api?module=account&action=balance&address=0x27313635E6B7AA3CC8436E24BE2317D4A0e56BeB&tag=latest&apikey=`
      );
    });
  });
});
