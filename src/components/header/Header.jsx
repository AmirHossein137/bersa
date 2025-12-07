import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className="w-full flex flex-col gap-4 py-7 mb-[50px]">
      <div className="w-full max-w-[1220px] px-4 mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"images/bersa-logo.svg"}
            width={112}
            height={40}
            alt="bersa"
          />
        </Link>
        <div className="flex items-center gap-3 rounded-[10px] bg-[#F8F8F8] px-3 py-2">
          <input
            type="text"
            className="bg-transparent border-0 placeholder:text-[#A6A6A6] placeholder:text-xs text-sm outline-none w-[300px] max-w-full"
            placeholder={t("search")}
          />
          <button>
            <Image
              src={"/images/search-icon.svg"}
              width={15}
              height={15}
              alt="search"
            />
          </button>
        </div>
        <div className="bg-shadowBtn p-[3px] rounded-[10px]">
          <button className="bg-primary px-8 py-3 text-xs text-white font-semibold rounded-[10px] w-full">
            {t("login")}
          </button>
        </div>
      </div>
      <div className="w-full bg-[#F0F0F0] h-[1px]"></div>
      <div className="w-full max-w-[1220px] px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-[56px]">
          <button className="flex items-center gap-2 relative z-20">
            <Image
              src={"/images/category-icon.svg"}
              width={14}
              height={14}
              alt="category"
            />
            <span className="text-[#532B07]">{t("productCategories")}</span>
            <Image
              src={"/images/arrow-down-header.svg"}
              width={10}
              height={5}
              alt="Arrow"
            />
            <div className="absolute bottom-1 z-[-1] right-0 w-[90%] bg-[#FFB40273] h-3 rounded-full"></div>
          </button>
          <button className="flex items-center gap-2">
            <span className="text-[#532B07]">{t("services")}</span>
            <Image
              src={"/images/arrow-down-header.svg"}
              width={10}
              height={5}
              alt="Arrow"
            />
          </button>
          <button className="flex items-center gap-2">
            <span className="text-[#532B07]">{t("customerGuide")}</span>
            <Image
              src={"/images/arrow-down-header.svg"}
              width={10}
              height={5}
              alt="Arrow"
            />
          </button>
          <Link href={"/"} className="text-[#532B07]">
            {t("AboutBersa")}
          </Link>
          <Link href={"/"} className="text-[#532B07]">
            {t("educationalMaterials")}
          </Link>
          <Link href={"/"} className="text-[#532B07]">
            {t("becomeAseller")}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
