import Link from 'next/link';
import { Suspense } from 'react';

const Card = ({ product }) => {


  const isUp = product.today > product.yesterday;
  const isDown = product.today < product.yesterday;
  const percentage = ((product.today - product.yesterday) / product.yesterday) * 100;

    return (
     
        <Suspense fallback='Loding Bazar....'>
          <Link href={`/product/${product.id}`}> <div
              key={product.id}
              className="rounded-xl border border-[#e0e8e0] bg-[#fbfdfb] p-3 transition hover:shadow-md"
            >
              {/* Product information */}
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-2xl">
                  {product.image &&
                  !/^[\p{L}\p{N}\s]+$/u.test(product.image)
                    ? product.image
                    : "🍚"}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#26352b]">
                    {product.nameBn}
                  </h3>

                  <p className="text-xs text-gray-500">
                    প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                  </p>
                </div>
              </div>

              {/* Price and change */}
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <p className="text-xs text-gray-500">
                    আজকের দাম
                  </p>

                  <p className="mt-0.5 text-base font-extrabold text-[#26352b]">
                    {product.today} টাকা
                  </p>
                </div>

                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold ${
                    isDown
                      ? "bg-green-50 text-green-700"
                      : isUp
                        ? "bg-red-50 text-red-600"
                        : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {isDown ? (
                    <>
                      <span>▼</span>
                      {Math.abs(percentage).toLocaleString("bn-BD")}%
                    </>
                  ) : isUp ? (
                    <>
                      <span>▲</span>
                      {Math.abs(percentage).toLocaleString("bn-BD")}%
                    </>
                  ) : (
                    <>
                      <span>—</span>
                      ০.০%
                    </>
                  )}
                </span>
              </div>
            </div></Link>
        </Suspense>
    );
};

export default Card;