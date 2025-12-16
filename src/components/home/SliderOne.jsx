"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

//assets
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

const SliderOne = () => {
  const swiperRef = useRef(null);
  const swiperMiniRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexMini, setActiveIndexMini] = useState(0);
  const totalSlides = 4;
  const totalSlidesMini = 4;
  return (
    <div className="w-full grid grid-cols-12 gap-7 mb-16 ">
      <div className="col-span-9">
        <div className="relative w-full">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            slidesPerView={1}
            spaceBetween={20}
            className="w-full"
          >
            <SwiperSlide>
              <Link href={"/"}>
                <Image
                  src={"/images/Slider-Wide.webp"}
                  width={1000}
                  height={1000}
                  alt="Image"
                  className="rounded-2xl"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"}>
                <Image
                  src={"/images/Slider-Wide.webp"}
                  width={1000}
                  height={1000}
                  alt="Image"
                  className="rounded-2xl"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"}>
                <Image
                  src={"/images/Slider-Wide.webp"}
                  width={1000}
                  height={1000}
                  alt="Image"
                  className="rounded-2xl"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"}>
                <Image
                  src={"/images/Slider-Wide.webp"}
                  width={1000}
                  height={1000}
                  alt="Image"
                  className="rounded-2xl"
                />
              </Link>
            </SwiperSlide>
          </Swiper>
          <div className="absolute -bottom-2 px-3 py-1 rounded-full bg-white left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideTo(index)}
                className={`h-[6px] rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#D99206] w-[6px]"
                    : "bg-[#BCBCBC] w-[6px]"
                }`}
              />
            ))}
          </div>
          <div className="right-arrow">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <Image
                src={"/images/arrow-swiper.svg"}
                width={8}
                height={5}
                alt="Arrow"
              />
            </button>
          </div>
          <div className="left-arrow">
            <button onClick={() => swiperRef.current?.slideNext()}>
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
      <div className="col-span-3 h-full">
        <div className="relative h-full">
          <Swiper
            onSwiper={(swiper) => (swiperMiniRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndexMini(swiper.activeIndex)}
            slidesPerView={1}
            spaceBetween={20}
            className="w-full h-full"
          >
            <SwiperSlide>
              <Link href={"/"}>
                <Image
                  src={"/images/Slider-Mini.webp"}
                  width={1000}
                  height={1000}
                  alt="Image"
                  className="rounded-2xl w-full h-full"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"}>
                <Image
                  src={"/images/Slider-Mini.webp"}
                  width={1000}
                  height={1000}
                  alt="Image"
                  className="rounded-2xl w-full h-full"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"}>
                <Image
                  src={"/images/Slider-Mini.webp"}
                  width={1000}
                  height={1000}
                  alt="Image"
                  className="rounded-2xl w-full h-full"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"}>
                <Image
                  src={"/images/Slider-Mini.webp"}
                  width={1000}
                  height={1000}
                  alt="Image"
                  className="rounded-2xl w-full h-full"
                />
              </Link>
            </SwiperSlide>
          </Swiper>
          <div className="absolute -bottom-2 px-3 py-1 rounded-full bg-white left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {[...Array(totalSlidesMini)].map((_, index) => (
              <button
                key={index}
                onClick={() => swiperMiniRef.current?.slideTo(index)}
                className={`h-[6px] rounded-full transition-all duration-300 ${
                  activeIndexMini === index
                    ? "bg-[#D99206] w-[6px]"
                    : "bg-[#BCBCBC] w-[6px]"
                }`}
              />
            ))}
          </div>
          <div className="right-arrow">
            <button onClick={() => swiperMiniRef.current?.slidePrev()}>
              <Image
                src={"/images/arrow-swiper.svg"}
                width={8}
                height={5}
                alt="Arrow"
              />
            </button>
          </div>
          <div className="left-arrow">
            <button onClick={() => swiperMiniRef.current?.slideNext()}>
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
    </div>
  );
};

export default SliderOne;
