"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function Page() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString();
    const confirmPassword = formData
      .get("confirmPassword")
      ?.toString();

    setError("");
    setSuccess("");

    if (password.length < 8) {
      setError("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }

    if (password !== confirmPassword) {
      setError("দুটি পাসওয়ার্ড মিলছে না।");
      return;
    }

    const formEntries = Object.fromEntries(formData.entries());

    console.log({
      name,
      email,
      ...formEntries,
    });

    setSuccess("ফর্মটি সঠিকভাবে পূরণ করা হয়েছে!");
  };

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-8 text-[#26352b]">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-extrabold">
            অ্যাকাউন্ট তৈরি করুন
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <div className="rounded-2xl border border-[#e0e8e0] bg-[#fbfdfb] p-6 shadow-sm sm:p-7">
          <Form onSubmit={onSubmit} className="w-full">
            <FieldGroup className="gap-4">
              <TextField isRequired name="name">
                <Label>নাম</Label>
                <Input
                  placeholder="যেমন: রহিম উদ্দিন"
                  autoComplete="name"
                  className="border-[#dce6dc]"
                />
                <FieldError />
              </TextField>

              <TextField isRequired name="email" type="email">
                <Label>ইমেইল</Label>
                <Input
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                <FieldError />
              </TextField>

              <TextField isRequired name="password">
                <Label>পাসওয়ার্ড</Label>
                <Input
                  type="password"
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  autoComplete="new-password"
                />
                <FieldError />
              </TextField>

              <TextField isRequired name="confirmPassword">
                <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
                <Input
                  type="password"
                  placeholder="আবার লিখুন"
                  autoComplete="new-password"
                />
                <FieldError />
              </TextField>
            </FieldGroup>

            {error && (
              <p className="mt-3 text-sm text-red-600" role="alert">
                {error}
              </p>
            )}

            {success && (
              <p className="mt-3 text-sm text-green-700" role="status">
                {success}
              </p>
            )}

            <Button
              type="submit"
              className="mt-5 w-full bg-green-700 font-bold text-white shadow-md hover:bg-green-800"
            >
              অ্যাকাউন্ট তৈরি করুন
            </Button>
          </Form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-0.5 flex-1 bg-gray-300" />
            <span className="text-sm text-gray-600">অথবা</span>
            <div className="h-0.5 flex-1 bg-gray-300" />
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Button
              type="button"
              variant="outline"
              className="w-full border-[#dce6dc] bg-transparent"
              onPress={() => alert("Google authentication এখনো যুক্ত করা হয়নি।")}
            >
              🌐 Google দিয়ে চালিয়ে যান
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full border-[#dce6dc] bg-transparent"
              onPress={() => alert("GitHub authentication এখনো যুক্ত করা হয়নি।")}
            >
              ◉ GitHub দিয়ে চালিয়ে যান
            </Button>
          </div>

          <p className="mt-5 text-center text-sm">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-green-700 hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>

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