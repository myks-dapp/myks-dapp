"use client";
import { useContract, useContractWrite, useAddress, ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";
import { MYKS_TOKEN_ADDRESS } from "@/lib/constants";
import { uploadToIPFS } from "@/lib/utils";

export default function AdminPage() {
  const address = useAddress();
  const { contract } = useContract(MYKS_TOKEN_ADDRESS);
  const { mutateAsync: distribute } = useContractWrite(contract, "distributeProfit");
  const [file, setFile] = useState<File | null>(null);
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const handleUploadAndDistribute = async () => {
    if (!file || !amount) return;
    setStatus("Uploading...");
    const ipfsUrl = await uploadToIPFS(file);
    setStatus("Distributing...");
    await distribute({ amount, ipfsUrl });
    setStatus("Done!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <ConnectWallet />
      {address && (
        <div className="space-y-4 mt-4">
          <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} />
          <input type="number" placeholder="USDC amount" className="border p-2 w-full" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <button onClick={handleUploadAndDistribute} className="bg-green-600 text-white px-4 py-2 rounded">
            Upload & Distribute
          </button>
          <p>{status}</p>
        </div>
      )}
    </div>
  );
}
