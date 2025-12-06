"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const languages = [
  { code: "ar", name: "العربية", flag: "/images/arb.svg" },
  { code: "en", name: "English", flag: "/images/en.svg" },
  { code: "fa", name: "فارسی", flag: "/images/iran.svg" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  const handleLanguageChange = (newLocale) => {
    if (locale === newLocale) return;
    setIsLoading(true);
    setTimeout(() => {
      router.replace(pathname, { locale: newLocale });
    }, 500);
  };

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          disabled={isLoading}
          className={`relative p-1 rounded-full transition-all disabled:opacity-50`}
        >
          <Image
            src={lang.flag}
            width={25}
            height={25}
            alt={lang.name}
            className={`rounded-full`}
          />
        </button>
      ))}
    </div>
  );
}
