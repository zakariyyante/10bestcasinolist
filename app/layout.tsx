import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "10 Best Casino List | UK's Premier Casino Review Hub 2026",
  description: "Expert-reviewed UK casino sites, exclusive bonuses, and rapid payouts. Find the best licensed online casinos in the UK.",
  icons: {
    icon: "/favicon.png",
  },
};

const GA_MEASUREMENT_ID = "AW-18181597015";
const CONVERSION_LABEL = "AW-18181597015/F-xRCOefr7ccENfO1N1D";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');

            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': '${CONVERSION_LABEL}',
                'value': 1.0,
                'currency': 'USD',
                'transaction_id': '',
                'event_callback': callback
              });
              return false;
            };
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-full flex flex-col bg-[#050a05] text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
