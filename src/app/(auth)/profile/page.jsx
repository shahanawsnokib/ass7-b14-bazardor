"use client";

import {Button, Form, Input, Label, TextField} from "@heroui/react";
// import { defaultAc } from "better-auth/plugins/organization/access";

export default function Page() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formEntries = Object.formEntries(formData.entries())
    console.log(formEntries);
    

   

    alert(`আপডেট করা হয়েছে: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="min-h-screen bg-[#f0f2f0] p-8 md:p-16">
      <div className="mx-auto max-w-3xl flex flex-col gap-6">
        {/* Header Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h1>
          <p className="text-sm text-gray-600 mt-1">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* User Card */}
        <div className="flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-100/80">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces"
              alt="Profile"
              className="h-16 w-16 rounded-2xl object-cover"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900">Rezwan Ahmed</h2>
              <p className="text-sm text-gray-500">rezwanahmed@gmail.com</p>
            </div>
          </div>
          <Button
            variant="bordered"
            className="border-red-400 text-red-500 hover:bg-red-50 font-medium rounded-xl px-4 py-2 text-sm flex items-center gap-1.5"
          >
            <span className="text-base">↩</span> সাইন আউট
          </Button>
        </div>

        {/* Info Section */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100/80">
          <h3 className="text-base font-bold text-gray-900 mb-6">তথ্য</h3>

          <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <TextField name="name">
              <Label className="text-sm font-semibold text-gray-900 mb-2 block">
                নাম
              </Label>
              <Input
                placeholder=""
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-gray-800 focus:outline-none focus:border-green-600 transition-colors bg-white"
              />
            </TextField>

            <Button
              type="submit"
              className="w-full bg-[#00873e] hover:bg-[#007335] text-white font-semibold py-3 rounded-xl shadow-sm transition-all text-sm"
            >
              আপডেট
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}