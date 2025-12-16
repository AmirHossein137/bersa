"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Cart from "../modules/Cart";
import Image from "next/image";

//assets
import "swiper/css";



const BestSelling = () => {
  const swiperRef = useRef(null);

  return (
    <div className="flex flex-col gap-8 mb-16">
      <div className="flex items-center gap-5">
        <div className="flex items-center text-xl font-semibold gap-1">
          <span className="text-Primary">محصولات</span>
          <span className="text-Secondary">پرفروش</span>
        </div>
        <div className="w-full flex-1 bg-[#F0F0F0] h-[1px]"></div>
        <Link href={"/"} className="text-Secondary">
          مشاهده بیشتر
        </Link>
      </div>

      <div className="bg-[#F8F8F8] rounded-[30px] px-14 py-8 relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={4}
          spaceBetween={20}
          className="my-swiper"
        >
          {[...Array(7)].map((_, i) => (
            <SwiperSlide key={i}>
              <Cart background="#FCFDFF"/>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* دکمه راست */}
        <div className="absolute right-[-30px] top-1/2 flex items-center justify-center -translate-y-1/2 w-14 h-14 rounded-full bg-white">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Image
              src={"/images/arrow-swiper.svg"}
              width={8}
              height={5}
              alt="Arrow"
            />
          </button>
        </div>

        {/* دکمه چپ */}
        <div className="absolute left-[-30px] top-1/2 flex items-center justify-center -translate-y-1/2 w-14 h-14 rounded-full bg-white">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="rotate-180"
          >
            <Image
              src={"/images/arrow-swiper.svg"}
              width={8}
              height={5}
              alt="Arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
