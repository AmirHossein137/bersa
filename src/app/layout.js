import './globals.css';
import ClientIntlProvider from '@/components/ClientIntlProvider';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import {getLocale, getMessages} from 'next-intl/server';

export const metadata = {
  title: 'My i18n App',
  description: 'Three-language app without locale in URL'
};

function getDir(locale) {
  return ['fa','ar'].includes(locale) ? 'rtl' : 'ltr';
}

export default async function RootLayout({children}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} dir={getDir(locale)} suppressHydrationWarning>
      <body>
        <ClientIntlProvider locale={locale} messages={messages}>
          <div style={{padding: 16}}>
            <LanguageSwitcher />
          </div>
          {children}
        </ClientIntlProvider>
      </body>
    </html>
  );
}
