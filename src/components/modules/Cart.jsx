import { numberFormat } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = ({ background = "#fff", borderColor = "transparent" }) => {
  return (
    <div className="flex flex-col gap-5 items-center border border-[borderColor] w-full py-5 bg-[background] px-6 rounded-3xl">
      <Link
        href={"/"}
        className="relative w-[85px] h-[132px] flex items-center justify-center"
      >
        <Image src={"/img/product.png"} fill alt="Product" />
      </Link>
      <div className="flex flex-col items-center">
        <Link href={"/"} className="font-bold">
          پروبیوتیک بوکسل - ۱۶٪ مانا پرو
        </Link>
        <Link href={"/"} className="text-[#A3A3A3] text-sm">
          محصولات طیوری
        </Link>
      </div>
      <div className="w-full flex flex-col gap-1">
        <span className="text-[#A3A3A3] text-xs">قیمت واحد:</span>
        <div className="flex items-center justify-between">
          <span>{numberFormat(889500)}</span>
          <span className="text-sm">تومان</span>
        </div>
      </div>
      <Link href={"/"} className="w-full bg-shadowBtn p-[3px] rounded-[10px] text-center">
        <div className="bg-primary px-8 py-3 text-xs text-white font-semibold rounded-[10px] w-full">
          مشاهده و سفارش
        </div>
      </Link>
    </div>
  );
};

export default Cart;
