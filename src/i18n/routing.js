import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fa', 'en', 'ar'],
  defaultLocale: 'fa',
  localePrefix: 'never',      // ⬅️ بدون نام زبان در URL
  localeDetection: false,     // ⬅️ تشخیص خودکار غیرفعال (کنترل با کوکی)
  localeCookie: {
    name: 'locale',
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
    sameSite: 'lax'
  }
});
