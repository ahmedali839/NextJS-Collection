import { getBillingData } from "../lib/data";

export default async function CachePrivateBilling() {
  const data = await getBillingData();

  if (data.error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded">{data.error}</div>
    );
  }

  return (
    <div className="p-6 bg-black text-green-400 font-mono rounded-xl border border-zinc-800 shadow-2xl">
      <p className="text-sm text-zinc-500">AICY Encrypted Vault</p>
      <p className="text-4xl mt-2">{data.user.balance}</p>
      <p className="text-xs text-zinc-600 mt-4">
        Authorized for: {data.user.owner}
      </p>
      <p className="text-xs text-zinc-600">
        Decrypted at: {data.lastDecrypted}
      </p>
    </div>
  );
}
