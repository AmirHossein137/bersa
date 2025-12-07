import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoriesVsited = () => {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  const isFa = locale === "fa";
  return (
    <div className="flex flex-col gap-7 mb-16">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 font-semibold">
          <span className="text-Primary">
            {isFa ? t("categories") : t("mostVisited")}
          </span>
          <span className="text-Secondary">
            {isFa ? t("mostVisited") : t("categories")}
          </span>
        </div>
        <div className="w-full flex-1 h-[1px] bg-[#F0F0F0]"></div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <Link
          href={"/"}
          className="flex flex-col items-center justify-center gap-3 p-5 bg-[#F8F8F8] rounded-3xl"
        >
          <Image
            src={"/images/egg.png"}
            width={123}
            height={110}
            alt="egg"
            className="mix-blend-multiply"
          />
          <div className="flex items-center gap-2">
            <span className="text-Primary font-semibold">
              {t("wholesaleEggs")}
            </span>
            <Image
              src={"/images/arrow-left-yellow.svg"}
              width={10}
              height={5}
              alt="Arrow"
            />
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex flex-col items-center justify-center gap-3 p-5 bg-[#F8F8F8] rounded-3xl"
        >
          <Image
            src={"/images/One-day-old-chick.png"}
            width={123}
            height={110}
            alt="egg"
            className="mix-blend-multiply"
          />
          <div className="flex items-center gap-2">
            <span className="text-Primary font-semibold">
              {t("One-day-old-chick")}
            </span>
            <Image
              src={"/images/arrow-left-yellow.svg"}
              width={10}
              height={5}
              alt="Arrow"
            />
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex flex-col items-center justify-center gap-3 p-5 bg-[#F8F8F8] rounded-3xl"
        >
          <Image
            src={"/images/Pullet-Breeds.png"}
            width={123}
            height={110}
            alt="egg"
            className="mix-blend-multiply"
          />
          <div className="flex items-center gap-2">
            <span className="text-Primary font-semibold">
              {t("typesOfPulletBreeds")}
            </span>
            <Image
              src={"/images/arrow-left-yellow.svg"}
              width={10}
              height={5}
              alt="Arrow"
            />
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex flex-col items-center justify-center gap-3 p-5 bg-[#F8F8F8] rounded-3xl"
        >
          <Image
            src={"/images/Poultry-products.png"}
            width={123}
            height={110}
            alt="egg"
            className="mix-blend-multiply"
          />
          <div className="flex items-center gap-2">
            <span className="text-Primary font-semibold">
              {t("poultryProducts")}
            </span>
            <Image
              src={"/images/arrow-left-yellow.svg"}
              width={10}
              height={5}
              alt="Arrow"
            />
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex flex-col items-center justify-center gap-3 p-5 bg-[#F8F8F8] rounded-3xl"
        >
          <Image
            src={"/images/Livestock-products.png"}
            width={123}
            height={110}
            alt="egg"
            className="mix-blend-multiply"
          />
          <div className="flex items-center gap-2">
            <span className="text-Primary font-semibold">
              {t("livestockProducts")}
            </span>
            <Image
              src={"/images/arrow-left-yellow.svg"}
              width={10}
              height={5}
              alt="Arrow"
            />
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex flex-col items-center justify-center gap-3 p-5 bg-[#F8F8F8] rounded-3xl"
        >
          <Image
            src={"/images/Machine-and-equipment.png"}
            width={123}
            height={110}
            alt="egg"
            className="mix-blend-multiply"
          />
          <div className="flex items-center gap-2">
            <span className="text-Primary font-semibold">
              {t("machineAndEquipment")}
            </span>
            <Image
              src={"/images/arrow-left-yellow.svg"}
              width={10}
              height={5}
              alt="Arrow"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesVsited;
