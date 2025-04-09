import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Polygon } from "@thirdweb-dev/chains";
import { Token } from "@thirdweb-dev/sdk";

// Inisialisasi SDK pakai Client ID kamu dan jaringan Polygon
const sdk = new ThirdwebSDK(Polygon, {
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID, // <- Client ID dari Thirdweb Dashboard
});

// Alamat smart contract token MYKS
const MYKS_TOKEN_ADDRESS = "0xbae14e5a05030f6Bcff900Be3C02A260C96e5D6c";

// Fungsi untuk ambil instance token MYKS
export const getMYKSTokenContract = async (): Promise<Token> => {
  const contract = await sdk.getToken(MYKS_TOKEN_ADDRESS);
  return contract;
};

export default sdk;
