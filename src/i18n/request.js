import {cookies} from 'next/headers';
import {getRequestConfig} from 'next-intl/server';

const DEFAULT_LOCALE = 'fa';

export default getRequestConfig(async () => {
  const store = await cookies();
  const cookieLocale = store.get('locale')?.value;
  const locale = cookieLocale || DEFAULT_LOCALE;

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return { locale, messages };
});
