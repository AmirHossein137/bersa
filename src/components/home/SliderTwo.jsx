"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

//assets
import "swiper/css";

const SliderTwo = () => {
  const [activeOneIndex, setActiveOneIndex] = useState(0);
  const [activeTwoIndex, setActiveTwoIndex] = useState(0);
  const swiperOneRef = useRef(null);
  const swiperTwoRef = useRef(null);
  const totalOneSlides = 4;
  const totalTwoSlides = 5;

  return (
    <div className="grid grid-cols-2 gap-7 mb-16">
      <div className="relative w-full">
        <Swiper
          onSwiper={(swiper) => (swiperOneRef.current = swiper)}
          onSlideChange={(swiper) => setActiveOneIndex(swiper.activeIndex)}
          slidesPerView={1}
          spaceBetween={20}
          className="w-full"
        >
          <SwiperSlide>
            <Link href={"/"}>
              <Image
                src={"/images/Slider-01.webp"}
                width={1000}
                height={350}
                alt="Image"
                className="rounded-2xl"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"}>
              <Image
                src={"/images/Slider-01.webp"}
                width={1000}
                height={350}
                alt="Image"
                className="rounded-2xl"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"}>
              <Image
                src={"/images/Slider-01.webp"}
                width={1000}
                height={350}
                alt="Image"
                className="rounded-2xl"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"}>
              <Image
                src={"/images/Slider-01.webp"}
                width={1000}
                height={350}
                alt="Image"
                className="rounded-2xl"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
        <div className="absolute -bottom-2 px-3 py-1 rounded-full bg-white left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {[...Array(totalOneSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => swiperOneRef.current?.slideTo(index)}
                className={`h-[6px] rounded-full transition-all duration-300 ${
                  activeOneIndex === index
                    ? "bg-[#D99206] w-[6px]"
                    : "bg-[#BCBCBC] w-[6px]"
                }`}
              />
            ))}
          </div>
        <div className="right-arrow">
          <button onClick={() => swiperOneRef.current?.slidePrev()}>
            <Image
              src={"/images/arrow-swiper.svg"}
              width={8}
              height={5}
              alt="Arrow"
            />
          </button>
        </div>
        <div className="left-arrow">
          <button onClick={() => swiperOneRef.current?.slideNext()}>
            <Image
              src={"/images/arrow-swiper.svg"}
              width={8}
              height={5}
              alt="Arrow"
            />
          </button>
        </div>
      </div>
      <div className="relative w-full">
        <Swiper
          onSwiper={(swiper) => (swiperTwoRef.current = swiper)}
          onSlideChange={(swiper) => setActiveTwoIndex(swiper.activeIndex)}
          slidesPerView={1}
          spaceBetween={20}
          className="w-full"
        >
          <SwiperSlide>
            <Link href={"/"}>
              <Image
                src={"/images/Slider-02.webp"}
                width={1000}
                height={350}
                alt="Image"
                className="rounded-2xl"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"}>
              <Image
                src={"/images/Slider-02.webp"}
                width={1000}
                height={350}
                alt="Image"
                className="rounded-2xl"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"}>
              <Image
                src={"/images/Slider-02.webp"}
                width={1000}
                height={350}
                alt="Image"
                className="rounded-2xl"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"}>
              <Image
                src={"/images/Slider-02.webp"}
                width={1000}
                height={350}
                alt="Image"
                className="rounded-2xl"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"}>
              <Image
                src={"/images/Slider-02.webp"}
                width={1000}
                height={350}
                alt="Image"
                className="rounded-2xl"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
        <div className="absolute -bottom-2 px-3 py-1 rounded-full bg-white left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {[...Array(totalTwoSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => swiperTwoRef.current?.slideTo(index)}
                className={`h-[6px] rounded-full transition-all duration-300 ${
                  activeTwoIndex === index
                    ? "bg-[#D99206] w-[6px]"
                    : "bg-[#BCBCBC] w-[6px]"
                }`}
              />
            ))}
          </div>
        <div className="right-arrow">
          <button onClick={() => swiperTwoRef.current?.slidePrev()}>
            <Image
              src={"/images/arrow-swiper.svg"}
              width={8}
              height={5}
              alt="Arrow"
            />
          </button>
        </div>
        <div className="left-arrow">
          <button onClick={() => swiperTwoRef.current?.slideNext()}>
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

export default SliderTwo;
