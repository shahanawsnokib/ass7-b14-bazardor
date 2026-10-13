import React from "react";

const Page = ({ product: data }) => {
  // Validate product data
  if (!data || !Array.isArray(data.markets) || data.markets.length === 0) {
    return (
      <div className="min-h-screen bg-[#f4f7f4] p-8">
        <div className="max-w-5xl mx-auto rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-red-500">
            বাজারের তথ্য পাওয়া যায়নি।
          </p>
        </div>
      </div>
    );
  }

  // Validate and prepare market prices
  const validMarkets = data.markets.filter(
    (market) =>
      Number.isFinite(Number(market.min)) &&
      Number.isFinite(Number(market.max)) &&
      Number(market.min) <= Number(market.max)
  ).map((market) => ({
    ...market,
    min: Number(market.min),
    max: Number(market.max),
  }));

  if (validMarkets.length === 0) {
    return (
      <div className="min-h-screen bg-[#f4f7f4] p-8">
        <p className="text-red-500">
          বৈধ বাজারের দামের তথ্য পাওয়া যায়নি।
        </p>
      </div>
    );
  }

  // Lowest price and market
  const lowestPrice = Math.min(
    ...validMarkets.map((market) => market.min)
  );

  const lowestMarket = validMarkets.find(
    (market) => market.min === lowestPrice
  );

  // Highest price and market
  const highestPrice = Math.max(
    ...validMarkets.map((market) => market.max)
  );

  const highestMarket = validMarkets.find(
    (market) => market.max === highestPrice
  );

  // Average of each market's minimum and maximum prices
  const totalAvg =
    validMarkets.reduce(
      (total, market) =>
        total + (market.min + market.max) / 2,
      0
    ) / validMarkets.length;

  // Format numbers
  const formatPrice = (price) =>
    new Intl.NumberFormat("bn-BD", {
      maximumFractionDigits: 1,
    }).format(price);

  return (
    <div className="min-h-screen bg-[#f4f7f4] p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Product details and today's price */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
              {data.image}
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {data.nameBn}
              </h1>

              <p className="text-sm text-gray-500 mt-0.5">
                প্রতি কেজি - {data.categoryNameBn}
              </p>

              {data.change?.amount != null && (
                <p className={`text-xs mt-1 font-medium ${
                  Number(data.change.amount) > 0
                    ? "text-red-500"
                    : Number(data.change.amount) < 0
                    ? "text-green-600"
                    : "text-gray-500"
                }`}>
                  {Number(data.change.amount) > 0
                    ? "গতকালের তুলনায় আজ দাম বেড়েছে "
                    : Number(data.change.amount) < 0
                    ? "গতকালের তুলনায় আজ দাম কমেছে "
                    : "গতকালের তুলনায় আজ দাম অপরিবর্তিত"}
                  {Number(data.change.amount) !== 0 &&
                    `${formatPrice(Math.abs(Number(data.change.amount)))} টাকা`}
                </p>
              )}
            </div>
          </div>

          <div className="bg-[#f8faf8] border border-gray-100 rounded-2xl p-4 text-center min-w-[140px] shadow-sm">
            <span className="text-xs text-gray-500 block">
              আজকের দাম
            </span>

            <span className="text-3xl font-extrabold text-gray-900 my-1 block">
              {data.today != null
                ? formatPrice(Number(data.today))
                : "—"}
            </span>

            <span className="text-xs text-gray-600 block">
              টাকা / কেজি
            </span>

            {data.change?.pct != null && (
              <span className={`text-xs font-semibold mt-1 inline-block ${
                Number(data.change.pct) > 0
                  ? "text-red-500"
                  : Number(data.change.pct) < 0
                  ? "text-green-600"
                  : "text-gray-500"
              }`}>
                {Number(data.change.pct) > 0
                  ? "▲"
                  : Number(data.change.pct) < 0
                  ? "▼"
                  : "—"}{" "}
                {formatPrice(Math.abs(Number(data.change.pct)))}%
              </span>
            )}
          </div>
        </div>

        {/* Price summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
          <h2 className="text-lg font-bold text-gray-900">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Lowest price */}
            <div className="border border-gray-100 bg-gray-50/50 rounded-xl p-4 flex flex-col justify-between">
              <span className="text-xs text-gray-500">
                সর্বনিম্ন দাম
              </span>

              <div className="my-2">
                <span className="text-2xl font-bold text-green-600">
                  {formatPrice(lowestPrice)} টাকা
                </span>
              </div>

              <span className="text-xs text-gray-500">
                সবচেয়ে কম দামের বাজার ({lowestMarket?.market ?? "—"})
              </span>
            </div>

            {/* Highest price */}
            <div className="border border-gray-100 bg-gray-50/50 rounded-xl p-4 flex flex-col justify-between">
              <span className="text-xs text-gray-500">
                সর্বাধিক দাম
              </span>

              <div className="my-2">
                <span className="text-2xl font-bold text-red-600">
                  {formatPrice(highestPrice)} টাকা
                </span>
              </div>

              <span className="text-xs text-gray-500">
                সবচেয়ে বেশি দামের বাজার ({highestMarket?.market ?? "—"})
              </span>
            </div>

            {/* Average price */}
            <div className="border border-gray-100 bg-gray-50/50 rounded-xl p-4 flex flex-col justify-between">
              <span className="text-xs text-gray-500">
                গড় দাম
              </span>

              <div className="my-2">
                <span className="text-2xl font-bold text-green-600">
                  {formatPrice(totalAvg)} টাকা
                </span>
              </div>

              <span className="text-xs text-gray-500">
                প্রতি কেজির গড় দাম
              </span>
            </div>

          </div>
        </div>

        {/* Market-wise price table */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
          <h2 className="text-lg font-bold text-gray-900">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase">
                  <th className="py-3 px-4 font-semibold">
                    বাজার
                  </th>
                  <th className="py-3 px-4 font-semibold">
                    বিভাগ
                  </th>
                  <th className="py-3 px-4 font-semibold">
                    সর্বনিম্ন
                  </th>
                  <th className="py-3 px-4 font-semibold">
                    সর্বাধিক
                  </th>
                  <th className="py-3 px-4 font-semibold text-right">
                    গড়
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50 text-sm text-gray-700">
                {validMarkets.map((item, index) => {
                  const avg = (item.min + item.max) / 2;

                  return (
                    <tr
                      key={`${item.market}-${index}`}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-3.5 px-4 font-medium text-gray-900">
                        {item.market}
                      </td>

                      <td className="py-3.5 px-4 text-gray-500">
                        {item.division ?? "—"}
                      </td>

                      <td className="py-3.5 px-4 font-medium">
                        {formatPrice(item.min)} টাকা
                      </td>

                      <td className="py-3.5 px-4 font-medium">
                        {formatPrice(item.max)} টাকা
                      </td>

                      <td className="py-3.5 px-4 font-semibold text-right text-green-700">
                        {formatPrice(avg)} টাকা
                      </td>
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

export default Page;