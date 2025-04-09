"use client";
import { useAddress, useContract, useContractWrite, ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";
import { MYKS_TOKEN_ADDRESS } from "@/lib/constants";
import { getCurrentPhase, getTokenPrice } from "@/lib/utils";

export default function BuyPage() {
  const address = useAddress();
  const { contract } = useContract(MYKS_TOKEN_ADDRESS);
  const { mutateAsync: transfer } = useContractWrite(contract, "transfer");
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState("");

  const handleBuy = async () => {
    const phase = getCurrentPhase();
    const pricePerToken = getTokenPrice(phase);
    const totalCost = amount * pricePerToken;
    setStatus("Processing...");
    await transfer({ to: address, amount });
    setStatus("Success!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Buy MYKS Token</h1>
      <ConnectWallet />
      {address && (
        <div className="mt-4 space-y-4">
          <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="border p-2 rounded w-full" />
          <button onClick={handleBuy} className="bg-blue-500 text-white px-4 py-2 rounded">
            Buy Now
          </button>
          <p>{status}</p>
        </div>
      )}
    </div>
  );
}
