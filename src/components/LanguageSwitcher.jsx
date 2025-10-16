"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "fa", name: "فارسی", flag: "🇮🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage = languages.find((lang) => lang.code === locale);

  // بستن dropdown با کلیک خارج از آن
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale) => {
    setIsLoading(true);
    setTimeout(() => {
      router.replace(pathname, { locale: newLocale });
    }, 1000);
    setIsOpen(false);
    // Loading will stop when page reloads
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* دکمه اصلی */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isLoading}
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading && (
          <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
        )}
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {currentLanguage?.name}
        </span>
        <svg
          className={`w-4 h-4 text-gray-600 dark:text-gray-300 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* منوی dropdown */}
      {isOpen && !isLoading && (
        <div className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              disabled={isLoading}
              className={`w-full flex items-center gap-3 px-4 py-3 text-right hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 ${
                locale === lang.code
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-200"
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="flex-1 text-sm font-medium">{lang.name}</span>
              {locale === lang.code && (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
