
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="my-4 flex min-h-[250px] flex-col items-center justify-between gap-8 rounded-3xl border border-gray-200 bg-[#f9fcfa] px-6 py-8 sm:px-10 md:flex-row">
      {/* Left Content */}
      <div className="flex-1">
        <div className="mb-3 h-6 w-36 rounded-full bg-green-700"></div>

        <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
          আজকের বাজারের দাম এক নজরে
        </h1>

        <p className="mb-6 max-w-xl text-sm leading-6 text-gray-700">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <Link
          href="/product"
          className="inline-block rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-800"
        >
          সব পণ্য দেখুন
        </Link>
      </div>

      {/* Right Illustration */}
      <div className="flex w-full items-center justify-center md:w-60 md:shrink-0">
        <svg
          viewBox="0 0 240 200"
          className="w-52 sm:w-60"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="রঙিন সবজির ঝুড়ি"
        >
          {/* Shadow */}
          <ellipse cx="120" cy="180" rx="94" ry="12" fill="#e5e7e5" />

          {/* Basket */}
          <path
            d="M48 105 L192 105 L177 170 Q175 178 165 178 L75 178 Q65 178 63 170 Z"
            fill="#b95b13"
          />
          <path d="M48 105 L192 105 L187 124 L53 124 Z" fill="#99400e" />

          {/* Basket Stripes */}
          <g stroke="#853b11" strokeWidth="3" strokeLinecap="round">
            <path d="M67 126 L75 170" />
            <path d="M90 127 L94 172" />
            <path d="M120 127 L120 173" />
            <path d="M150 127 L146 172" />
            <path d="M173 126 L165 170" />
          </g>

          {/* Red Vegetable */}
          <path d="M86 72 Q74 43 94 33 Q111 26 122 48 Q133 72 117 92 Z" fill="#ef4444" />
          <path d="M94 37 Q94 22 110 17" fill="none" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="91" cy="57" rx="6" ry="10" fill="#fca5a5" transform="rotate(25 91 57)" />

          {/* Green Vegetable */}
          <path d="M122 76 Q112 42 135 30 Q159 23 170 48 Q180 73 161 91 Z" fill="#22c55e" />
          <path d="M145 32 Q143 14 128 8" fill="none" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
          <path d="M145 30 Q151 12 164 7" fill="none" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="135" cy="51" rx="6" ry="10" fill="#86efac" transform="rotate(25 135 51)" />

          {/* Orange Vegetable */}
          <circle cx="112" cy="82" r="18" fill="#f97316" />
          <path d="M112 65 Q118 57 127 59" fill="none" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />

          {/* Purple Vegetable */}
          <circle cx="55" cy="87" r="18" fill="#a855f7" />

          {/* Yellow Vegetable */}
          <path d="M157 83 Q155 62 174 62 Q194 66 191 86 Q186 103 169 100 Q158 97 157 83Z" fill="#f59e0b" />
          <path d="M175 62 Q180 51 190 49" fill="none" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
};

export default Page;
