import type { Metadata } from "next";
import "./globals.css";
import { cookies } from 'next/headers';
import Script from 'next/script'; // تمت إضافة هذا السطر

export const metadata: Metadata = {
  title: "منصة OFPPT الرقمية | Plateforme OFPPT",
  description: "مكتبتك الشاملة لجميع التخصصات والدروس بصيغة PDF",
  icons: {
    icon: '/icon.svg',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || 'ar';
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={lang} dir={dir}>
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen">
        
        {/* كود جوجل أدسنس الموضوع هنا */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5784292688116531"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
