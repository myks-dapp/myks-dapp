// Smart contract address of MYKS token on Polygon
export const MYKS_TOKEN_ADDRESS = "0xbae14e5a05030f6Bcff900Be3C02A260C96e5D6c";

// Owner wallet address for profit distribution and admin functions
export const OWNER_WALLET_ADDRESS = "0x8cDf6d7f383D69A4800eA035E35eD440a8054Ca8";

// Token price per phase (in approximate USD, based on IDR to USD estimation)
export const TOKEN_PRICES_USD = {
  phase1: 0.063, // ~IDR 1,000
  phase2: 0.31,  // ~IDR 5,000
  phase3: 0.63,  // ~IDR 10,000
};

// Token sale phase schedule
export const SALE_PHASES = {
  phase1: {
    start: new Date("2025-04-10T00:00:00Z"),
    end: new Date("2025-04-19T23:59:59Z"),
  },
  phase2: {
    start: new Date("2025-04-20T00:00:00Z"),
    end: new Date("2025-04-29T23:59:59Z"),
  },
  phase3: {
    start: new Date("2025-04-30T00:00:00Z"),
    end: new Date("2025-05-14T23:59:59Z"),
  },
};

// Supported tokens for purchasing MYKS
export const SUPPORTED_PAYMENT_TOKENS = ["MATIC", "ETH", "BTC", "USDC"];
