"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "../modules/Cart";
import { Swiper, SwiperSlide } from "swiper/react";

//assetss
import "swiper/css";

const Specials = () => {
  return (
    <div className="flex items-center gap-5 overflow-hidden rounded-3xl bg-[#991029] relative mb-10">
      <div className="w-full grid grid-cols-12 gap-6 items-center">
        <div className="col-span-3 flex flex-col gap-6">
          <div className="flex flex-col gap-4 pt-6 pr-6">
            <div className="flex flex-col items-center gap-1 text-white pt-6">
              <span className="text-[32px] font-semibold">محصولات طیوری</span>
              <span className="text-2xl">داخلـــــــــی و خارجــــــــی</span>
            </div>
            <Link
              href={"/"}
              className="flex items-center rounded-xl text-white justify-center gap-3 py-2"
              style={{
                background:
                  "radial-gradient(103.23% 445.95% at 50% 50%, #970F28 0%, #4F1820 100%)",
                border: "1px solid white",
              }}
            >
              <span>مشاهده همه</span>
              <Image
                src={"/images/arrow-left-white.svg"}
                width={8}
                height={5}
                alt="Arrow"
              />
            </Link>
          </div>
          <div className="relative w-full h-[240px]">
            <Image src={"/images/Poultry.png"} fill alt="Poultry" />
          </div>
        </div>
        <div className="col-span-9">
          <Swiper slidesPerView={3.3} spaceBetween={20} className="mySwiper">
            <SwiperSlide>
              <Cart />
            </SwiperSlide>
            <SwiperSlide>
              <Cart />
            </SwiperSlide>
            <SwiperSlide>
              <Cart />
            </SwiperSlide>
            <SwiperSlide>
              <Cart />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Specials;
