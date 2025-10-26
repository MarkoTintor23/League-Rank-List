"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [summonerName, setSummonerName] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!summonerName) return;
    // preusmeri na /players/[name]
    router.push(`/players/${encodeURIComponent(summonerName)}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-white">
      <h1 className="text-3xl font-bold mb-6">Enter your Summoner Name:</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="text"
          value={summonerName}
          onChange={(e) => setSummonerName(e.target.value)}
          placeholder="Summoner Name"
          className="px-4 py-2 rounded-lg text-white w-64 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-bold"
        >
          Search
        </button>
      </form>
    </div>
  );
}
