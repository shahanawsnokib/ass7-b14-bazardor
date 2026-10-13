import React, { useState } from 'react';

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left p-6">
            {/* ট্রিপার বাটন / প্রোফাইল হেডার */}
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 cursor-pointer bg-white border border-gray-200 rounded-full py-1.5 px-3 shadow-sm hover:bg-gray-50 transition-all"
            >
                <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                    alt="Profile"
                    className="h-8 w-8 rounded-full object-cover border border-green-500"
                />
                <span className="font-semibold text-gray-800 text-sm">Rezwan</span>
                <span className="text-xs text-gray-500">▼</span>
            </div>

            {/* ড্রপডাউন মেনু */}
            {isOpen && (
                <div className="absolute right-0 mt-3 w-64 origin-top-right rounded-2xl bg-white shadow-xl border border-gray-100 p-4 z-50 transition-all">
                    {/* ইউজার ইনফো */}
                    <div className="border-b border-gray-100 pb-3 mb-3">
                        <p className="font-bold text-gray-900 text-base">Rezwan Ahmed</p>
                        <p className="text-xs text-gray-500 mt-0.5">rezwanahmed@gmail.com</p>
                    </div>

                    {/* মেনু অপশনসমূহ */}
                    <div className="space-y-1">
                        <a
                            href="#profile"
                            className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-colors font-medium"
                        >
                            <span className="text-gray-500">👤</span> আমার প্রোফাইল
                        </a>

                        <a
                            href="#signout"
                            className="flex items-center gap-2.5 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium"
                        >
                            <span>↩</span> সাইন আউট
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;