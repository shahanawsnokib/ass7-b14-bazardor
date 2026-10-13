"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const categories = [
  { name: "চাল", icon: "🌐", href: "/category/chal" },
  { name: "ডাল", icon: "◻️", href: "/category/dal" },
  { name: "তেল", icon: "◻️", href: "/category/tel" },
  { name: "সবজি", icon: "🥬", href: "/category/shobji" },
  { name: "মাছ", icon: "🐟", href: "/category/mach" },
  { name: "মাংস", icon: "🍗", href: "/category/mangsho" },
  { name: "ডিম-দই", icon: "🥛", href: "/category/dim-dui" },
  { name: "মসলা", icon: "◻️", href: "/category/moshla" },
];

// const categories = async () => {
//     const categoriesData = await fetch("https://api.api-store.workers.dev/api/bazardor/categories")
//     const rescategories = await categoriesData.json()
//     return rescategories
//     console.log(rescategories);
    
// }

export default function Navbar() {


  const [dateTime, setDateTime] = useState("");

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
    <header className="w-full mx-auto bg-[#fbfdfb] text-[#18251d]">
      {/* Logo and Dynamic Date & Time */}
      <div className="flex items-center gap-2.5 px-4 py-3 md:px-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-700 text-2xl text-white">
          🛒
        </div>

        <div className="flex flex-1 items-center justify-between gap-2.5">
         <div>
             <Link
            href="/"
            className="block text-2xl font-extrabold leading-tight"
          >
            বাজার দর
          </Link>

          <p className="mt-1 text-xs text-gray-700">
            {dateTime || "তারিখ ও সময় লোড হচ্ছে..."}
          </p>
         </div>
         <div>
             <div className="flex items-center gap-2">
      {/* Sign In */}
      <Link
        href="/login"
        className="rounded-lg border border-green-700 px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50"
      >
        সাইন ইন
      </Link>

      {/* Sign Up */}
      <Link
        href="/register"
        className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
      >
        সাইন আপ
      </Link>
    </div>
         </div>
        </div>
      </div>

      {/* Category Navigation */}
      <nav className="border-t border-gray-200/70">
        <ul className="flex items-center justify-start gap-5 overflow-x-auto px-5 py-3.5 text-sm font-semibold whitespace-nowrap">
          {categories.map((category) => (
            <li key={category.name} className="shrink-0">
              <Link
                href={category.href}
                className="flex items-center  gap-1.5 transition-colors hover:text-green-700"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}