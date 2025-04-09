'use client';

import React from 'react';

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Investor Dashboard</h1>
      <p className="text-gray-700 mb-6">
        Welcome to the MYKS investor dashboard. Here you can track your token holdings, monthly profit distributions, and account status.
      </p>

      {/* Token Overview Section */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Token Overview</h2>
        <ul className="space-y-2 text-gray-800">
          <li><strong>Total MYKS Token Supply:</strong> 100,000 MYKS</li>
          <li><strong>Your MYKS Balance:</strong> --</li>
          <li><strong>KYC Status:</strong> --</li>
        </ul>
      </div>

      {/* Profit Distribution Rules */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Profit Distribution Policy</h2>
        <p className="text-gray-700 mb-2">
          MYKS investors are eligible to receive monthly profit shares in <strong>USDC</strong>, based on the following business performance tiers:
        </p>
        <ul className="list-disc ml-6 text-gray-800 space-y-2">
          <li>
            <strong>17%</strong> of total monthly profit will be distributed if monthly revenue is at least <strong>IDR 140,000,000</strong>.
          </li>
          <li>
            <strong>29%</strong> of total monthly profit will be distributed if monthly revenue reaches <strong>IDR 250,000,000</strong> or more.
          </li>
        </ul>
      </div>

      {/* Placeholder for Future Features */}
      <div className="bg-gray-50 border border-dashed rounded-xl p-6 text-center text-gray-500">
        Wallet integration, profit history, and downloadable reports coming soon...
      </div>
    </div>
  );
}
