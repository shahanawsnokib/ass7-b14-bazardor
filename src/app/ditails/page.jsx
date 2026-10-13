import React from 'react';

const MarketPricePage = () => {
    // প্রদত্ত এপিআই ডাটা
    const data = {
      "id": 1,
      "slug": "sorno-machi-chal",
      "nameBn": "স্বর্ণমাছি চাল",
      "category": "chal",
      "categoryNameBn": "চাল",
      "categoryIcon": "🍚",
      "unit": "kg",
      "image": "🍚",
      "today": 148,
      "yesterday": 145,
      "lastWeek": 142,
      "lastMonth": 138,
      "change": {
        "dir": "up",
        "pct": 2.1
      },
      "markets": [
        { "market": "কারওয়ান বাজার", "division": "ঢাকা", "min": 146, "max": 165 },
        { "market": "গ্রীন মার্কেট, মিরপুর", "division": "ঢাকা", "min": 143, "max": 159 },
        { "market": "চৌদগ্রাম বাজার", "division": "চট্টগ্রাম", "min": 142, "max": 163 },
        { "market": "আমতলী বাজার", "division": "চট্টগ্রাম", "min": 138, "max": 155 },
        { "market": "সদর বাজার", "division": "রাজশাহী", "min": 134, "max": 148 },
        { "market": "বাসারহাট বাজার", "division": "রাজশাহী", "min": 135, "max": 152 },
        { "market": "মাঠ বাজার", "division": "ময়মনসিংহ", "min": 132, "max": 146 },
        { "market": "চৌর বাজার", "division": "ময়মনসিংহ", "min": 135, "max": 155 },
        { "market": "বাজারহাট", "division": "খুলনা", "min": 134, "max": 151 },
        { "market": "ডবলগেট বাজার", "division": "খুলনা", "min": 139, "max": 154 },
        { "market": "আমবাজার", "division": "সিলেট", "min": 143, "max": 165 },
        { "market": "চৌরাস্তা বাজার", "division": "সিলেট", "min": 141, "max": 158 }
      ]
    };

    // সর্বনিম্ন এবং সর্বাধিক দাম এবং বাজার বের করার জন্য লজিক
    const allMins = data.markets.map(m => m.min);
    const allMaxs = data.markets.map(m => m.max);
    
    const lowestPrice = Math.min(...allMins);
    const lowestMarket = data.markets.find(m => m.min === lowestPrice);

    const highestPrice = Math.max(...allMaxs);
    const highestMarket = data.markets.find(m => m.max === highestPrice);

    // সকল বাজারের গড় দামের হিসাব
    const totalAvg = data.markets.reduce((acc, m) => acc + (m.min + m.max) / 2, 0) / data.markets.length;

    return (
        <div className="min-h-screen bg-[#f4f7f4] p-4 md:p-8 font-sans">
            <div className="max-w-5xl mx-auto space-y-6">
                
                {/* টপ কার্ড: পণ্যের বিবরণ ও আজকের দাম */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
                            {data.image}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{data.nameBn}</h1>
                            <p className="text-sm text-gray-500 mt-0.5">প্রতি কেজি - {data.categoryNameBn}</p>
                            <p className="text-xs text-red-500 mt-1 font-medium">
                                গতকালের তুলনায় আজ দাম বেড়েছে ৩ টাকা
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#f8faf8] border border-gray-100 rounded-2xl p-4 text-center min-w-[140px] shadow-sm">
                        <span className="text-xs text-gray-500 block">আজকের দাম</span>
                        <span className="text-3xl font-extrabold text-gray-900 my-1 block">{data.today}</span>
                        <span className="text-xs text-gray-600 block">টাকা / কেজি</span>
                        <span className="text-xs font-semibold text-red-500 mt-1 inline-block">
                            ▲ {data.change.pct}%
                        </span>
                    </div>
                </div>

                {/* দামের সারসংক্ষেপ সেকশন */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                    <h2 className="text-lg font-bold text-gray-900">দামের সারসংক্ষেপ</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* সর্বনিম্ন দাম */}
                        <div className="border border-gray-100 bg-gray-50/50 rounded-xl p-4 flex flex-col justify-between">
                            <span className="text-xs text-gray-500">সর্বনিম্ন দাম</span>
                            <div className="my-2">
                                <span className="text-2xl font-bold text-green-600">{lowestPrice} টাকা</span>
                            </div>
                            <span className="text-xs text-gray-500">সবচেয়ে কম দামের বাজার ({lowestMarket?.market})</span>
                        </div>

                        {/* সর্বাধিক দাম */}
                        <div className="border border-gray-100 bg-gray-50/50 rounded-xl p-4 flex flex-col justify-between">
                            <span className="text-xs text-gray-500">সর্বাধিক দাম</span>
                            <div className="my-2">
                                <span className="text-2xl font-bold text-red-600">{highestPrice} টাকা</span>
                            </div>
                            <span className="text-xs text-gray-500">সবচেয়ে বেশি দামের বাজার ({highestMarket?.market})</span>
                        </div>

                        {/* গড় দাম */}
                        <div className="border border-gray-100 bg-gray-50/50 rounded-xl p-4 flex flex-col justify-between">
                            <span className="text-xs text-gray-500">গড় দাম</span>
                            <div className="my-2">
                                <span className="text-2xl font-bold text-green-600">{totalAvg.toFixed(1)} টাকা</span>
                            </div>
                            <span className="text-xs text-gray-500">প্রতি কেজি-এর হিসেবে</span>
                        </div>
                    </div>
                </div>

                {/* বাজারভিত্তিক আজকের দাম টেবিল */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                    <h2 className="text-lg font-bold text-gray-900">বাজারভিত্তিক আজকের দাম</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase">
                                    <th className="py-3 px-4 font-semibold">বাজার</th>
                                    <th className="py-3 px-4 font-semibold">বিভাগ</th>
                                    <th className="py-3 px-4 font-semibold">সর্বনিম্ন</th>
                                    <th className="py-3 px-4 font-semibold">সর্বাধিক</th>
                                    <th className="py-3 px-4 font-semibold text-right">গড়</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 text-sm text-gray-700">
                                {data.markets.map((item, index) => {
                                    const avg = ((item.min + item.max) / 2).toFixed(1);
                                    return (
                                        <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-3.5 px-4 font-medium text-gray-900">{item.market}</td>
                                            <td className="py-3.5 px-4 text-gray-500">{item.division}</td>
                                            <td className="py-3.5 px-4 font-medium">{item.min} টাকা</td>
                                            <td className="py-3.5 px-4 font-medium">{item.max} টাকা</td>
                                            <td className="py-3.5 px-4 font-semibold text-right text-green-700">{avg} টাকা</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MarketPricePage;