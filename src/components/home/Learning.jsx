"use client";

import { useState, useRef, useEffect } from "react";

const tabs = [
  {
    id: "overview",
    label: "ثبت نام مشتریان",
    subTabs: [
      { id: "sub1", label: "اضافه کردن محصولات به سبدخرید و ثبت سفارش", content: "محتوای زیرتب ۱" },
      { id: "sub2", label: "تایید تامیین سفارش و ارسال لینک پرداخت", content: "محتوای زیرتب ۲" },
      { id: "sub3", label: "پرداخت توسط شما و ارسال رسید پرداخت", content: "محتوای زیرتب ۳" },
      { id: "sub4", label: "تایید پرداخت و ثبت نهایی سفارش", content: "محتوای زیرتب ۳" },
      { id: "sub5", label: "آماده سازی سفارش و ارسال", content: "محتوای زیرتب ۳" },
    ],
  },
  {
    id: "analytics",
    label: " سفارش محصول",
    subTabs: [
      { id: "sub1", label: "نمودارها", content: "محتوای نمودارها" },
      { id: "sub2", label: "گزارشات", content: "محتوای گزارشات" },
    ],
  },
  {
    id: "reports",
    label: "درخواست   جیره نویسی",
    subTabs: [
      { id: "sub1", label: "روزانه", content: "گزارش روزانه" },
      { id: "sub2", label: "ماهانه", content: "گزارش ماهانه" },
      { id: "sub3", label: "سالانه", content: "گزارش سالانه" },
    ],
  },
  {
    id: "settings",
    label: " درخواست بازدید فارم",
    subTabs: [
      { id: "sub1", label: "عمومی", content: "تنظیمات عمومی" },
      { id: "sub2", label: "امنیت", content: "تنظیمات امنیتی" },
    ],
  },
  {
    id: "overview1",
    label: " درخواست مشاوره",
    subTabs: [
      { id: "sub1", label: "زیرتب ۱", content: "محتوای زیرتب ۱" },
      { id: "sub2", label: "زیرتب ۲", content: "محتوای زیرتب ۲" },
    ],
  },
  {
    id: "analytics2",
    label: "مراحل  فروشنده شدن",
    subTabs: [
      { id: "sub1", label: "نمودارها", content: "محتوای نمودارها" },
      { id: "sub2", label: "گزارشات", content: "محتوای گزارشات" },
    ],
  },
  {
    id: "reports3",
    label: "گزارشات",
    subTabs: [
      { id: "sub1", label: "روزانه", content: "گزارش روزانه" },
      { id: "sub2", label: "ماهانه", content: "گزارش ماهانه" },
    ],
  },
  {
    id: "settings4",
    label: "تنظیمات",
    subTabs: [
      { id: "sub1", label: "عمومی", content: "تنظیمات عمومی" },
      { id: "sub2", label: "امنیت", content: "تنظیمات امنیتی" },
    ],
  },
];

export default function Learning() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeSubTab, setActiveSubTab] = useState({});
  const [indicatorStyle, setIndicatorStyle] = useState({ right: 0, width: 0 });
  const tabsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const activeIndex = tabs.findIndex((t) => t.id === activeTab);
    const activeElement = tabsRef.current[activeIndex];
    
    if (activeElement && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const elementOffsetLeft = activeElement.offsetLeft;
      
      // محاسبه right برای RTL
      const right = containerWidth - elementOffsetLeft - 194;
      
      setIndicatorStyle({
        right: right,
        width: 194,
      });
    }
  }, [activeTab]);

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;
  const currentTab = tabs.find((t) => t.id === activeTab);
  const currentSubTab = activeSubTab[activeTab] || currentTab?.subTabs?.[0]?.id;

  return (
    <div className="flex items-center justify-center p-4" dir="rtl">
      <div className="w-full">
        {/* Tab Headers */}
        <div className="relative bg-[#F8F8F8] rounded-2xl">
          <div 
            ref={containerRef}
            className="relative flex gap-2 p-2 pb-4"
            style={{ 
              overflowX: 'scroll',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'thin'
            }}
          >
            {/* Animated Background */}
            <div
              className="absolute rounded-xl transition-all duration-300 ease-out bg-primary pointer-events-none"
              style={{
                right: `${indicatorStyle.right}px`,
                width: '194px',
                height: '44px',
                top: '8px',
              }}
            />

            {/* Tab Buttons */}
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={(el) => (tabsRef.current[index] = el)}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  minWidth: '194px',
                  maxWidth: '194px',
                  width: '194px',
                  height: '44px',
                }}
                className={`
                  relative rounded-xl flex-shrink-0
                  transition-all duration-300 ease-out font-medium text-sm
                  ${
                    activeTab === tab.id
                      ? "text-white"
                      : "bg-white border border-[#ECECEC] text-[#777777]"
                  }
                `}
              >
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6 rounded-2xl p-8">
          <div key={activeTab} className="animate-fadeIn">
            {/* Sub Tabs */}
            {currentTab?.subTabs && currentTab.subTabs.length > 0 && (
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2 border-b border-slate-600/50 pb-2">
                  {currentTab.subTabs.map((subTab) => (
                    <button
                      key={subTab.id}
                      onClick={() => setActiveSubTab({ ...activeSubTab, [activeTab]: subTab.id })}
                      className={`px-4 py-2 rounded-t transition-all ${
                        currentSubTab === subTab.id
                          ? "bg-slate-700 text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {subTab.label}
                    </button>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-slate-700/30 rounded">
                  <p className="text-slate-300">
                    {currentTab.subTabs.find((st) => st.id === currentSubTab)?.content}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}