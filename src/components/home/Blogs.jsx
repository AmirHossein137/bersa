import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div className="flex flex-col gap-8 mb-16">
      <div className="flex items-center gap-5">
        <div className="flex items-center text-xl font-semibold gap-1">
          <span className="text-Primary">مطالب</span>
          <span className="text-Secondary">آموزشی</span>
        </div>
        <div className="w-full flex-1 bg-[#F0F0F0] h-[1px]"></div>
        <Link href={"/"} className="text-Secondary">
          مشاهده بیشتر
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-[#FFF9F1] rounded-3xl flex items-center gap-6 overflow-hidden pl-4">
          <Link href={"/"}>
            <Image
              src={"/images/blog-01.webp"}
              width={251}
              height={251}
              alt="Image"
              className=""
            />
          </Link>
          <div className="flex flex-col flex-1">
            <div className="flex flex-col gap-3 mb-6">
              <span className="text-[#532B07] font-bold text-xl">
                خوراک مرغ مادر در فارم سنتی
              </span>
              <p className="text-justify text-[#D99206] text-sm min-h-[60px] text-sm line-clamp-3">
                بیشترین تاثیر در روند افزایش رشد طیور در فارم های سنتی میتوانید
                تاثیر ذرت در جیره ‌ی مرغ مادر باشد، چراکه ...
              </p>
            </div>
            <div className="flex items-center gap-7 mb-6">
              <div className="flex items-center gap-2 text-[#8C490C] text-xs">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/images/date.svg"}
                    width={15}
                    height={15}
                    alt="Date"
                  />
                  <span>تاریخ انتشار:</span>
                </div>
                <span className="font-bold">۲ روز پیش</span>
              </div>
              <div className="flex items-center gap-2 text-[#8C490C] text-xs">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/images/clock.svg"}
                    width={15}
                    height={15}
                    alt="Date"
                  />
                  <span>زمان مطالعه:</span>
                </div>
                <span className="font-bold">۵ دقیقه</span>
              </div>
            </div>
            <div className="flex">
              <Link
                href={"/"}
                className="bg-shadowBtn p-[3px] rounded-[10px] text-center"
              >
                <div className="bg-secondary px-11 py-3 text-sm text-white font-semibold rounded-[10px] w-full">
                  مطالعه کنید
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF9F1] rounded-3xl flex items-center gap-6 overflow-hidden pl-4">
          <Link href={"/"}>
            <Image
              src={"/images/blog-02.webp"}
              width={251}
              height={251}
              alt="Image"
              className=""
            />
          </Link>
          <div className="flex flex-col flex-1">
            <div className="flex flex-col gap-3 mb-6">
              <span className="text-[#532B07] font-bold text-xl">
                تغذیه مرغ مادر در سیستم صنعتی
              </span>
              <p className="text-justify text-[#D99206] min-h-[60px] text-sm line-clamp-3">
                در سیستم‌های صنعتی، جیره‌ی مرغ مادر با استفاده از پروتئین‌های
                گیاهی و مکمل‌های معدنی اصلاح می‌شود تا بهینه‌ترین رشد و تولید
                تخم‌مرغ را فراهم آورد.
              </p>
            </div>
            <div className="flex items-center gap-7 mb-6">
              <div className="flex items-center gap-2 text-[#8C490C] text-xs">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/images/date.svg"}
                    width={15}
                    height={15}
                    alt="Date"
                  />
                  <span>تاریخ انتشار:</span>
                </div>
                <span className="font-bold">۱ روز پیش</span>
              </div>
              <div className="flex items-center gap-2 text-[#8C490C] text-xs">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/images/clock.svg"}
                    width={15}
                    height={15}
                    alt="Date"
                  />
                  <span>زمان مطالعه:</span>
                </div>
                <span className="font-bold">۷ دقیقه</span>
              </div>
            </div>
            <div className="flex">
              <Link
                href={"/"}
                className="bg-shadowBtn p-[3px] rounded-[10px] text-center"
              >
                <div className="bg-secondary px-11 py-3 text-sm text-white font-semibold rounded-[10px] w-full">
                  مطالعه کنید
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF9F1] rounded-3xl flex items-center gap-6 overflow-hidden pl-4">
          <Link href={"/"}>
            <Image
              src={"/images/blog-03.webp"}
              width={251}
              height={251}
              alt="Image"
              className=""
            />
          </Link>
          <div className="flex flex-col flex-1">
            <div className="flex flex-col gap-3 mb-6">
              <span className="text-[#532B07] font-bold text-xl">
                مدیریت بهداشت در فارم‌های مرغ مادر
              </span>
              <p className="text-justify text-[#D99206] min-h-[60px] text-sm line-clamp-3">
                مدیریت بهداشت مرغ مادر شامل واکسیناسیون، کنترل بیماری‌ها و بهبود
                وضعیت زندگی در فارم است که تاثیر زیادی بر تولید دارد.
              </p>
            </div>
            <div className="flex items-center gap-7 mb-6">
              <div className="flex items-center gap-2 text-[#8C490C] text-xs">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/images/date.svg"}
                    width={15}
                    height={15}
                    alt="Date"
                  />
                  <span>تاریخ انتشار:</span>
                </div>
                <span className="font-bold">۴ روز پیش</span>
              </div>
              <div className="flex items-center gap-2 text-[#8C490C] text-xs">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/images/clock.svg"}
                    width={15}
                    height={15}
                    alt="Date"
                  />
                  <span>زمان مطالعه:</span>
                </div>
                <span className="font-bold">۷ دقیقه</span>
              </div>
            </div>
            <div className="flex">
              <Link
                href={"/"}
                className="bg-shadowBtn p-[3px] rounded-[10px] text-center"
              >
                <div className="bg-secondary px-11 py-3 text-sm text-white font-semibold rounded-[10px] w-full">
                  مطالعه کنید
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF9F1] rounded-3xl flex items-center gap-6 overflow-hidden pl-4">
          <Link href={"/"}>
            <Image
              src={"/images/blog-04.webp"}
              width={251}
              height={251}
              alt="Image"
              className=""
            />
          </Link>
          <div className="flex flex-col flex-1">
            <div className="flex flex-col gap-3 mb-6">
              <span className="text-[#532B07] font-bold text-xl">
                تاثیر ویتامین‌ها در جیره مرغ مادر
              </span>
              <p className="text-justify text-[#D99206] min-h-[60px] text-sm line-clamp-3">
                ویتامین‌ها نقش حیاتی در سلامت و عملکرد مرغ مادر دارند و به ویژه
                ویتامین D برای جذب کلسیم ضروری است که به تخم‌گذاری کمک می‌کند.{" "}
              </p>
            </div>
            <div className="flex items-center gap-7 mb-6">
              <div className="flex items-center gap-2 text-[#8C490C] text-xs">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/images/date.svg"}
                    width={15}
                    height={15}
                    alt="Date"
                  />
                  <span>تاریخ انتشار:</span>
                </div>
                <span className="font-bold">۳ روز  پیش</span>
              </div>
              <div className="flex items-center gap-2 text-[#8C490C] text-xs">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/images/clock.svg"}
                    width={15}
                    height={15}
                    alt="Date"
                  />
                  <span>زمان مطالعه:</span>
                </div>
                <span className="font-bold">۶ دقیقه</span>
              </div>
            </div>
            <div className="flex">
              <Link
                href={"/"}
                className="bg-shadowBtn p-[3px] rounded-[10px] text-center"
              >
                <div className="bg-secondary px-11 py-3 text-sm text-white font-semibold rounded-[10px] w-full">
                  مطالعه کنید
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
