/* File: app/page.tsx */

"use client";

import { useState } from "react";

export default function Home() {
  const [ticker, setTicker] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticker.trim()) return;
    setResults((prev) => [...prev, `Results for: ${ticker.toUpperCase()}`]);
    setTicker("");
  };

  return (
    <main className="flex flex-col h-screen bg-[#121212] text-[#e0e0e0]">
      <header className="p-4 text-center text-7xl font-semibold border-b border-gray-700">
        Summit
      </header>

      <section className="flex-1 overflow-y-auto p-4 space-y-4">
        {results.map((result, idx) => (
          <div
            key={idx}
            className="bg-[#1e1e1e] p-4 rounded-lg shadow-md border border-gray-700"
          >
            <h2 className="text-lg font-bold">{result}</h2>
            <p className="text-sm mt-2">This is where the stock analysis will be displayed.</p>
          </div>
        ))}
      </section>

      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-gray-700 bg-[#1e1e1e] flex items-center"
      >
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder="Enter stock ticker (e.g., AAPL)"
          className="flex-1 px-4 py-2 rounded-md bg-[#2a2a2a] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="ml-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Analyze
        </button>
      </form>
    </main>
  );
}