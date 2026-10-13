"use client";

import Link from "next/link";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function Page() {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formEntries = Object.fromEntries(formData.entries());

    console.log(formEntries);
  };

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-8 text-[#26352b]">
      <div className="mx-auto w-full max-w-md">
        {/* Heading */}
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-extrabold">সাইন ইন</h1>

          <p className="mt-2 text-sm text-gray-600">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </header>

        {/* Login card */}
        <div className="rounded-2xl border border-[#e0e8e0] bg-[#fbfdfb] p-6 shadow-sm sm:p-7">
          <Form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ) {
                  return "সঠিক ইমেইল ঠিকানা লিখুন";
                }

                return null;
              }}
            >
              <Label>ইমেইল</Label>
              <Input
                placeholder="you@example.com"
                autoComplete="email"
                className="border-[#dce6dc]"
              />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
                }

                return null;
              }}
            >
              <Label>পাসওয়ার্ড</Label>
              <Input
                placeholder="কমপক্ষে ৮ অক্ষর"
                autoComplete="current-password"
              />
              <FieldError />
            </TextField>

            <Button
              type="submit"
              className="mt-1 w-full bg-green-700 font-bold text-white shadow-md hover:bg-green-800"
            >
              সাইন ইন
            </Button>
          </Form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-0.5 flex-1 bg-gray-300" />
            <span className="text-sm text-gray-600">অথবা</span>
            <div className="h-0.5 flex-1 bg-gray-300" />
          </div>

          {/* Social login */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Button
              type="button"
              variant="outline"
              className="w-full border-[#dce6dc] bg-transparent"
              onPress={() => alert("Google sign-in এখনো যুক্ত করা হয়নি।")}
            >
              <span className="font-bold text-blue-600">G</span>
              Google দিয়ে চালিয়ে যান
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full border-[#dce6dc] bg-transparent"
              onPress={() => alert("GitHub sign-in এখনো যুক্ত করা হয়নি।")}
            >
              <span className="font-bold">◉</span>
              GitHub দিয়ে চালিয়ে যান
            </Button>
          </div>

          {/* Sign up */}
          <p className="mt-5 text-center text-sm">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-green-700 hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>

        {/* Back to home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-green-700"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}