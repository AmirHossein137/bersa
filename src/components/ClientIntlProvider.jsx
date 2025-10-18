'use client';

import {NextIntlClientProvider} from 'next-intl';
import {useEffect} from 'react';

const RTL = new Set(['fa', 'ar']);

export default function ClientIntlProvider({locale, messages, children}) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL.has(locale) ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
