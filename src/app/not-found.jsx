
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f0f5f0] px-4 py-10 text-[#26352b]">
      <div className="w-full max-w-[460px] text-center">

        {/* 404 Illustration */}
        <div className="relative mx-auto mb-7 flex h-40 w-64 items-center justify-center">
          {/* Decorative Circles */}
          <div className="absolute left-3 top-5 h-12 w-12 rounded-full bg-green-100" />
          <div className="absolute right-5 bottom-4 h-16 w-16 rounded-full bg-green-100/80" />
          <div className="absolute right-10 top-3 h-3 w-3 rounded-full bg-green-400" />
          <div className="absolute bottom-6 left-10 h-2 w-2 rounded-full bg-green-500" />

          {/* 404 Text */}
          <h1 className="relative z-10 text-[110px] font-black leading-none tracking-[-8px] text-[#008b43] drop-shadow-sm sm:text-[125px]">
            404
          </h1>
        </div>

        {/* Content Card */}
        <div className="rounded-2xl border border-[#e1e9e1] bg-[#fbfdfb] px-6 py-9 shadow-sm sm:px-10">

          {/* Error Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#e5f5e9] px-4 py-1.5 text-xs font-semibold text-[#008b43]">
            <span className="h-2 w-2 rounded-full bg-[#008b43]" />
            পেজ খুঁজে পাওয়া যায়নি
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-extrabold leading-snug sm:text-[28px]">
            উফ! পেজটি পাওয়া যায়নি
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-[330px] text-sm leading-7 text-[#647067]">
            আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে,
            ঠিকানা পরিবর্তন হয়েছে অথবা লিংকটি সঠিক নয়।
          </p>

          {/* Actions */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-[#008b43] px-5 text-sm font-semibold text-white shadow-[0_3px_0_#006c34] transition-all hover:bg-[#007a3b] hover:shadow-[0_2px_0_#006c34]"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m3 10 9-7 9 7" />
                <path d="M5 9v12h14V9" />
                <path d="M9 21v-7h6v7" />
              </svg>
              হোম পেজে ফিরে যান
            </Link>

            <Link
              href="/sign-in"
              className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-[#dce6dc] bg-white px-5 text-sm font-semibold text-[#26352b] transition-colors hover:bg-[#f0f5f0]"
            >
              সাইন ইন করুন
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-xs text-[#758176]">
          কোনো সমস্যা হলে হোম পেজ থেকে আবার চেষ্টা করুন।
        </p>
      </div>
    </main>
  );
}
