import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TRACKING: quando tiver GTM, inserir aqui:
  //   import Script from "next/script";
  //   <Script id="gtm" strategy="afterInteractive">{`...`}</Script>
  // E inserir o <noscript> do GTM antes de {children}.
  return <>{children}</>;
}
