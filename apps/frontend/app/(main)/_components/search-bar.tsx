"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="コースを検索..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-full border border-gray-300 bg-white py-2 pl-4 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-blue-500"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}
