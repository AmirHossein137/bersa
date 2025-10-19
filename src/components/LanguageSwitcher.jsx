'use client';

import { useRef, useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/navigation';

const LANGS = [
  { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

function writeLocaleCookie(code) {
  const maxAge = 60 * 60 * 24 * 365;
  const value = encodeURIComponent(JSON.stringify({
    code, flag: true
  }
  ));
  document.cookie = `locale=${encodeURIComponent(code)}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export default function LanguageSwitcher() {
  const router = useRouter();
  const btnRef = useRef(null);
  const listRef = useRef(null);

  const [open, setOpen] = useState(false);
  const locale = useLocale(); // از Provider می‌آید (سروری)

  useEffect(() => {
    if (!open) return;
    function onDocClick(e) {
      const t = e.target;
      if (!listRef.current?.contains(t) && !btnRef.current?.contains(t)) setOpen(false);
    }
    function onEsc(e) { if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus(); } }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  function changeLocale(next) {
    if (next === locale) { setOpen(false); return; }
    writeLocaleCookie(next);
    setOpen(false);
    btnRef.current?.blur();
    router.refresh(); // ⬅️ صفحات سروری با زبان جدید رندر می‌شوند
  }

  const current = LANGS.find(l => l.code === locale) ?? LANGS[0];

  return (
    <div className="relative inline-block">
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <span className="text-lg">{current.flag}</span>
        <span className="text-sm font-medium text-gray-800 dark:text-gray-100">{current.name}</span>
        <svg className={`w-4 h-4 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          className="absolute z-50 mt-2 w-56 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg"
        >
          {LANGS.map(l => {
            const selected = l.code === locale;
            return (
              <button
                key={l.code}
                role="option"
                aria-selected={selected}
                onClick={() => changeLocale(l.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-right transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 ${selected ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'
                  }`}
              >
                <span className="text-xl">{l.flag}</span>
                <span className="flex-1 text-sm font-medium">{l.name}</span>
                {selected && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
