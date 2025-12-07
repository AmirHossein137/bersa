import Image from "next/image";
import Link from "next/link";
import React from "react";

const SupplierOfMicronutrients = () => {
  return (
    <div className="flex flex-col gap-10 mb-16">
      <div className="flex items-center flex-col justify-center">
        <span className="text-Primary text-xl font-semibold">
          شرکت بهین رشدساز آرین (برسا)
        </span>
        <span className="text-Secondary">
          تامین کننده ریز مغذی ها و نهاده های واحدهای دام و طیور
        </span>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Link
          href={"/"}
          className="bg-[#FDF7EE] flex items-center gap-4 rounded-3xl px-8 py-5"
        >
          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-4">
              <Image
                src={"/images/saleProduct.png"}
                width={138}
                height={123}
                alt="SaleProduct"
                className="mix-blend-multiply"
              />
            </div>
            <div className="col-span-8 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-Primary font-semibold text-xl">
                  فروش محصولات شما
                </span>
                <Image
                  src={"/images/arrow-left-green.svg"}
                  width={8}
                  height={5}
                  alt="Arrow "
                />
              </div>
              <span className="text-[#8C490C] text-sm">
                در برسا فروشنده شوید و مشتریان خود را پیدا کنید
              </span>
            </div>
          </div>
        </Link>
        <Link
          href={"/"}
          className="bg-[#FDF7EE] flex items-center gap-4 rounded-3xl px-8 py-5"
        >
          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-4">
              <Image
                src={"/images/visiting-farm.png"}
                width={123}
                height={123}
                alt="SaleProduct"
                className="mix-blend-multiply"
              />
            </div>
            <div className="col-span-8 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-Primary font-semibold text-xl">
                  بازدید از فارم و طیور
                </span>
                <Image
                  src={"/images/arrow-left-green.svg"}
                  width={8}
                  height={5}
                  alt="Arrow"
                />
              </div>
              <span className="text-[#8C490C] text-sm">
                مشاوره و نظارت و کمک به تولید شما
              </span>
            </div>
          </div>
        </Link>
        <Link
          href={"/"}
          className="bg-[#FDF7EE] flex items-center gap-4 rounded-3xl px-8 py-5"
        >
          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-4">
              <Image
                src={"/images/selling-units.png"}
                width={138}
                height={123}
                alt="SaleProduct"
                className="mix-blend-multiply"
              />
            </div>
            <div className="col-span-8 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-Primary font-semibold text-xl">
                  خرید و فروش واحد ها
                </span>
                <Image
                  src={"/images/arrow-left-green.svg"}
                  width={8}
                  height={5}
                  alt="Arrow "
                />
              </div>
              <span className="text-[#8C490C] text-sm">
                خدمات معاملاتی و کارشناسی واحد های دامی و طیوری
              </span>
            </div>
          </div>
        </Link>
        <Link
          href={"/"}
          className="bg-[#FDF7EE] flex items-center gap-4 rounded-3xl px-8 py-5"
        >
          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-4">
              <Image
                src={"/images/hen.png"}
                width={138}
                height={123}
                alt="SaleProduct"
              />
            </div>
            <div className="col-span-8 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-Primary font-semibold text-xl">
                  درخواست جیره نویسی
                </span>
                <Image
                  src={"/images/arrow-left-green.svg"}
                  width={8}
                  height={5}
                  alt="Arrow "
                />
              </div>
              <span className="text-[#8C490C] text-sm">
                بهره گیری از مجربترین کارشناسان جیره نویسی طیور
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SupplierOfMicronutrients;
