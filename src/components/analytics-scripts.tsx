"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID;
const HOTJAR_SV = process.env.NEXT_PUBLIC_HOTJAR_SV ?? "6";

export const AnalyticsScripts = () => {
  if (!GA_ID && !HOTJAR_ID) {
    return null;
  }

  return (
    <>
      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      ) : null}

      {HOTJAR_ID ? (
        <Script id="hotjar-init" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${HOTJAR_ID},hjsv:${HOTJAR_SV}};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src='https://static.hotjar.com/c/hotjar-'+h._hjSettings.hjid+'.js?sv='+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document);
          `}
        </Script>
      ) : null}
    </>
  );
};
