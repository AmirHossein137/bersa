import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full max-w-[1220px] flex flex-col gap-5 px-4 mx-auto mb-8">
      <div className="bg-[#023617] py-9 rounded-[30px]">
        <div className="flex items-center justify-between mb-7 px-11">
          <div className="flex flex-col gap-3 w-[60%]">
            <h1 className="text-white font-bold">
              شرکت بهین رشد ساز آرین ( برسا )
            </h1>
            <p className="text-white text-xs font-medium leading-7">
              شرکت بهین رشد ساز آرین در جهت تهیه ریز مغذی ها و نهاده های واحدهای
              دام و طیور از سال ۱۳۸۳ شروع به فعالیت نمود. این شرکت بزرگترین
              افتخار خود را همراهی با مشتریان جهت دستیابی به حداکثر بهره وری و
              کسب نتایج اقتصادی مطلوب در فرآیند پرورش و تولید می داند.
            </p>
          </div>
          <Image
            src={"/images/certificates.svg"}
            width={158}
            height={104}
            alt="Image"
          />
        </div>
        <div className="bg-secondary py-7 px-11 flex items-center justify-between mb-8">
          <div className="w-[60%] flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 text-white">
                <Image
                  src={"/images/phone.svg"}
                  width={15}
                  height={15}
                  alt="Phone"
                />
                <span className="text-sm font-semibold">تلفن:</span>
              </div>
              <Link className="text-white text-sm" href={"tel:0212354235"}>
                ۰۲۱-۲۳۵۴۲۳۵
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 text-white">
                <Image
                  src={"/images/time-work.svg"}
                  width={15}
                  height={15}
                  alt="Phone"
                />
                <span className="text-sm font-semibold">ساعات کاری:</span>
              </div>
              <span className="text-white text-sm">
                روزهای کاری از ۸ صبح تا ۱۰ شب | ایام تعطیل از ۹ صبح تا ۴ بعد از
                ظهر
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={"/"}
              className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#F5D9B2]"
            >
              <Image
                src={"/images/linkedin.svg"}
                width={16}
                height={16}
                alt="Linkedin"
              />
            </Link>
            <Link
              href={"/"}
              className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#F5D9B2]"
            >
              <Image
                src={"/images/instagram.svg"}
                width={16}
                height={16}
                alt="instagram"
              />
            </Link>
            <Link
              href={"/"}
              className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#F5D9B2]"
            >
              <Image
                src={"/images/whatsapp.svg"}
                width={16}
                height={16}
                alt="whatsapp"
              />
            </Link>
            <Link
              href={"/"}
              className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#F5D9B2]"
            >
              <Image
                src={"/images/telegram.svg"}
                width={16}
                height={16}
                alt="telegram"
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 px-11">
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold">خدمات برسا</span>
            <ul className="flex flex-col text-white gap-4 text-sm">
              <li>
                <Link href={"/"}>جیره نویسی</Link>
              </li>
              <li>
                <Link href={"/"}>بازید فارم دامی و طیوری</Link>
              </li>
              <li>
                <Link href={"/"}>همکاری در تولید و فروش</Link>
              </li>
              <li>
                <Link href={"/"}>مشاوره و ارزیابی اولیه</Link>
              </li>
              <li>
                <Link href={"/"}>مشاوره و ارزیابی تخصصی </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold">صفحات برسا</span>
            <ul className="flex flex-col text-white gap-4 text-sm">
              <li>
                <Link href={"/"}>فروشگاه آنلاین</Link>
              </li>
              <li>
                <Link href={"/"}>پنل مشتریان</Link>
              </li>
              <li>
                <Link href={"/"}>پنل تامین کنندگان</Link>
              </li>
              <li>
                <Link href={"/"}>فروشنده شوید</Link>
              </li>
              <li>
                <Link href={"/"}>پیگیری سفارشات</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold">صفحات تکمیلی </span>
            <ul className="flex flex-col text-white gap-4 text-sm">
              <li>
                <Link href={"/"}>تماس با ما</Link>
              </li>
              <li>
                <Link href={"/"}>درباره ما</Link>
              </li>
              <li>
                <Link href={"/"}>قوانین و مقررات</Link>
              </li>
              <li>
                <Link href={"/"}>حریم خصوصی کاربران</Link>
              </li>
              <li>
                <Link href={"/"}>مطالب آموزشی</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold">پشتیبانی برسا</span>
            <ul className="flex flex-col text-white gap-4 text-sm">
              <li>
                <Link href={"/"}>سوالات متداول</Link>
              </li>
              <li>
                <Link href={"/"}>راهنمای مشتریان</Link>
              </li>
              <li>
                <Link href={"/"}>مرکز پشتیبانی تلفنی</Link>
              </li>
              <li>
                <Link href={"/"}>تیکت و پشتیبانی</Link>
              </li>
              <li>
                <Link href={"/"}>راهنمای دریافت خدمات</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span>تمامی حقوق این وب‌سایت برای این مجموعه محفوظ می‌باشد.</span>
        <Link href={'http://hirkaweb.com/'} target="_blank" className="text-[#079441]">توسعه توسط هیرکاوب</Link>
      </div>
    </div>
  );
};

export default Footer;
