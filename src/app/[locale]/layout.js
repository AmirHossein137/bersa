import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";
import "./globals.css";
import { peyda } from "@/utils/peydaFont";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "برسا",
  description: "برسا",
  // icons: {
  //   icon: "/images/logo.svg",
  //   shortcut: "/images/logo.svg",
  //   apple: "/images/logo.svg",
  // },
  robots: "noindex, nofollow",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  const dir = locale === "en" ? "ltr" : "rtl";

  return (
    <html lang={locale} dir={dir}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${peyda.variable} antialiased`}>
          <Layout>{children}</Layout>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
