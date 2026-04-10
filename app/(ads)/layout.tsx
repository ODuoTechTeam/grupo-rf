import type { Metadata } from "next";
import AdsTopBar from "@/components/ads/AdsTopBar";
import AdsFooter from "@/components/ads/AdsFooter";

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
  // E inserir o <noscript> do GTM antes do AdsTopBar.
  return (
    <>
      <AdsTopBar
        whatsappMessage="Olá, tenho interesse nos serviços da RF Engenharia."
        lpSlug="generic"
      />
      <main>{children}</main>
      <AdsFooter />
    </>
  );
}
