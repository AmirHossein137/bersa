import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutBersa = () => {
  return (
    <div className="bg-[#FFF9F1] px-11 py-8 mb-16 relative">
      <div className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-8">
          <div className="flex flex-col text-[#532B07]">
            <span className="font-semibold text-2xl block mb-5">
              شرکت بهین رشد ساز آرین
            </span>
            <p>
              شرکت بهین رشد ساز آرین در جهت تهیه ریز مغذی ها و نهاده های واحدهای
              دام و طیور از سال ۱۳۸۳ شروع به فعالیت نمود. این شرکت بزرگترین
              افتخار خود را همراهی با مشتریان جهت دستیابی به حداکثر بهره وری و
              کسب نتایج اقتصادی مطلوب در فرآیند پرورش و تولید می داند.
            </p>
            <p>
              کارشناسان مجرب این شرکت با همراهی مداوم از لحظه آغاز دوره تا
              انتهای دوره پرورش در فارم جهت تهیه مناسب ترین فرمول دان، انتخاب
              بهترین افزودنیها (آنزیم، محرک ها و…)، نهاده های اصلی جیره، ارائه
              خدمات مشاوره در امر مدیریت فارم، بازدید و نظارت فنی فارم در خدمت
              مشتریان خود می باشند.
            </p>
          </div>
        </div>
        <div className="col-span-4">
          <Image
            src={"/images/awards.webp"}
            width={1000}
            height={1000}
            alt="Image"
          />
        </div>
      </div>
      <div className="absolute bottom-[-51px] left-1/2 -translate-x-1/2">
        <Link
          href={"/"}
          className="bg-shadowBtn p-[3px] rounded-[10px] text-center"
        >
          <div className="bg-secondary px-11 py-3 text-sm text-white font-semibold rounded-[10px] w-full">
           درباره شرکت
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutBersa;
