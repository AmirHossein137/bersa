// src/i18n/request.js
import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';


export default getRequestConfig(async () => {
  const c = await cookies();

  const localeFromCookie = c.get('locale')?.value;
  const locale = localeFromCookie || routing.defaultLocale;

  const messages = (await import(`@/messages/${locale}.json`)).default;
  return { locale, messages };
});
