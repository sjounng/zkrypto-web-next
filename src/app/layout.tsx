import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

export const metadata: Metadata = {
  icons: { icon: "/assets/zkrypto-favicon.png" },
};

// Set the theme before first paint to avoid a flash. Mirrors script.js:
// stored theme wins; otherwise product pages default to light and the home
// page follows the OS preference.
const themeBootstrap = `(function(){try{var s=localStorage.getItem('zkrypto-theme');var p=location.pathname.indexOf('/products/')===0;var t=(s==='dark'||s==='light')?s:(p?'light':(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
