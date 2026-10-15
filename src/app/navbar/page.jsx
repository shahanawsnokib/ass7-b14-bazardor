"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CATEGORY_API =process.env.NEXT_PUBLIC_CATEGORY_API_NAV;

export default function Navbar() {
  const [dateTime, setDateTime] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(CATEGORY_API, {cache:'no-cache'});

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid category data");
        }

        setCategories(data);
      } catch (err) {
        console.error("Category fetch error:", err);
        setError("ক্যাটাগরি লোড করা যায়নি");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Update Bangladesh date and time
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const date = new Intl.DateTimeFormat("bn-BD", {
        timeZone: "Asia/Dhaka",
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(now);

      const time = new Intl.DateTimeFormat("bn-BD", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);

      setDateTime(`${date} | ${time}`);
    };

    updateDateTime();

    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#fbfdfb] text-[#18251d] shadow-sm">
      {/* Logo, Date & Authentication */}
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-3 sm:px-5 md:gap-4 md:px-6">
        <Link
          href="/"
          aria-label="বাজার দর হোম"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-700 text-2xl text-white transition hover:bg-green-800 sm:h-12 sm:w-12"
        >
          🛒
        </Link>

        <div className="min-w-0 flex-1">
          <Link
            href="/"
            className="block truncate text-xl font-extrabold leading-tight sm:text-2xl"
          >
            বাজার দর
          </Link>

          <p className="mt-1 text-[10px] leading-relaxed text-gray-600 sm:text-xs">
            {dateTime || "তারিখ ও সময় লোড হচ্ছে..."}
          </p>
        </div>

        {/* Authentication Links */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Link
            href="/sign-in"
            className="rounded-lg border border-green-700 px-2.5 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-50 sm:px-4 sm:text-sm"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="rounded-lg bg-green-700 px-2.5 py-2 text-xs font-semibold text-white transition hover:bg-green-800 sm:px-4 sm:text-sm"
          >
            সাইন আপ
          </Link>
        </div>
      </div>

      {/* Dynamic Category Navigation */}
      <nav
        aria-label="পণ্যের ক্যাটাগরি"
        className="border-t border-gray-200/70"
      >
        <div className="mx-auto max-w-7xl">
          <ul className="flex items-center gap-4 overflow-x-auto px-3 py-3 text-sm font-semibold whitespace-nowrap sm:gap-6 sm:px-5 md:px-6">
            {loading ? (
              <li className="text-gray-500">ক্যাটাগরি লোড হচ্ছে...</li>
            ) : error ? (
              <li className="text-red-600">{error}</li>
            ) : (
              categories.map((category) => (
                <li key={category.id} className="shrink-0">
                  <Link
                    href={`/category/${category.slug}`}
                    className="flex items-center gap-1.5 rounded-md py-1 text-gray-700 transition-colors hover:text-green-700"
                  >
                    <span aria-hidden="true">{category.icon}</span>
                    <span>{category.nameBn}</span>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}