
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "../../../lib/auth-client";
import toast from "react-hot-toast";

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    const formData = new FormData(e.currentTarget);

    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "");

    setIsLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || "সাইন ইন ব্যর্থ হয়েছে");
        return;
      }

      if (data) {
        toast.success("সাইন ইন সফল হয়েছে");
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      toast.error("সাইন ইন ব্যর্থ হয়েছে");
    } finally {
      setIsLoading(false);
    }
  };

  const socialSignIn = async (provider) => {
    if (socialLoading) return;

    setSocialLoading(provider);

    try {
      const { error } = await authClient.signIn.social({
        provider,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "সাইন ইন ব্যর্থ হয়েছে");
      }
    } catch (error) {
      console.error(error);
      toast.error("সোশ্যাল সাইন ইন ব্যর্থ হয়েছে");
    } finally {
      setSocialLoading(null);
    }
  };

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-6 text-[#26352b] sm:py-10">
      <div className="mx-auto w-full max-w-[400px]">

        {/* Header */}
        <header className="mb-6 text-center">
          <h1 className="text-[26px] font-extrabold leading-tight">
            সাইন ইন
          </h1>

          <p className="mt-2 text-[12px] leading-relaxed text-[#525e54]">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে
            অ্যাকাউন্টে ঢুকুন।
          </p>
        </header>

        {/* Login Card */}
        <div className="rounded-[16px] border border-[#e1e9e1] bg-[#fbfdfb] px-6 py-6 shadow-sm sm:px-7">

          <Form
            onSubmit={onSubmit}
            className="flex w-full flex-col gap-4"
          >
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ) {
                  return "সঠিক ইমেইল ঠিকানা লিখুন";
                }
                return null;
              }}
            >
              <Label className="mb-1.5 text-[13px] font-medium text-[#26352b]">
                ইমেইল
              </Label>

              <Input
                placeholder="you@example.com"
                autoComplete="email"
                disabled={isLoading}
                className="h-[40px] w-full rounded-[8px] border border-[#dce6dc] bg-transparent px-3 text-[13px] outline-none transition-colors focus:border-green-600"
              />

              <FieldError className="mt-1 text-xs text-red-600" />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type="password"
              className="w-full"
            >
              <Label className="mb-1.5 text-[13px] font-medium text-[#26352b]">
                পাসওয়ার্ড
              </Label>

              <Input
                placeholder="কমপক্ষে ৮ অক্ষর"
                autoComplete="current-password"
                disabled={isLoading}
                className="h-[40px] w-full rounded-[8px] border border-[#dce6dc] bg-transparent px-3 text-[13px] outline-none transition-colors focus:border-green-600"
              />

              <FieldError className="mt-1 text-xs text-red-600" />
            </TextField>

            {/* Sign In Button */}
            <Button
              type="submit"
              isDisabled={isLoading || !!socialLoading}
              className="mt-1 h-[42px] w-full rounded-[8px] bg-[#008b43] text-[14px] font-semibold text-white shadow-[0_3px_0_#006c34] transition-colors hover:bg-[#007a3b]"
            >
              {isLoading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
            </Button>
          </Form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-[2px] flex-1 bg-[#656e65]" />
            <span className="text-[12px] text-[#59635a]">
              অথবা
            </span>
            <div className="h-[2px] flex-1 bg-[#656e65]" />
          </div>

          {/* Social Sign In */}
          <div className="grid grid-cols-2 gap-2">

            {/* Google */}
            <Button
              type="button"
              variant="outline"
              isDisabled={isLoading || !!socialLoading}
              onPress={() => socialSignIn("google")}
              className="flex h-[40px] w-full items-center justify-center gap-2 rounded-[7px] border border-[#dce6dc] bg-transparent px-2 text-[11px] font-medium text-[#26352b] hover:bg-[#f2f7f2]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  fill="#FFC107"
                  d="M43.6 20.5H42V20H24v8h11.3A12 12 0 1 1 32 15.1l5.7-5.7A20 20 0 1 0 44 24c0-1.2-.1-2.4-.4-3.5Z"
                />
                <path
                  fill="#FF3D00"
                  d="m6.3 14.7 6.6 4.8A12 12 0 0 1 32 15.1l5.7-5.7A20 20 0 0 0 6.3 14.7Z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44a20 20 0 0 0 13.4-5.2l-6.2-5.3A12 12 0 0 1 12.8 28l-6.6 5A20 20 0 0 0 24 44Z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.5l6.2 5.3C41.6 35 44 29.8 44 24c0-1.2-.1-2.4-.4-3.5Z"
                />
              </svg>
              <span>
                Google দিয়ে চালিয়ে যান
              </span>
            </Button>

            {/* GitHub */}
            <Button
              type="button"
              variant="outline"
              isDisabled={isLoading || !!socialLoading}
              onPress={() => socialSignIn("github")}
              className="flex h-[40px] w-full items-center justify-center gap-2 rounded-[7px] border border-[#dce6dc] bg-transparent px-2 text-[11px] font-medium text-[#26352b] hover:bg-[#f2f7f2]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1 1.57-.72 1.95-1.1.1-.72.39-1.2.7-1.48-2.5-.29-5.12-1.25-5.12-5.56 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.03 0 4.32-2.63 5.26-5.14 5.55.4.35.75 1.03.75 2.08v3.1c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"/>
              </svg>
              <span>
                GitHub দিয়ে চালিয়ে যান
              </span>
            </Button>
          </div>

          {/* Sign Up */}
          <p className="mt-5 text-center text-[12px] text-[#485549]">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-[#008b43] hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>

        {/* Back Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-[12px] text-[#566257] transition-colors hover:text-[#008b43]"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}
