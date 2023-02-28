import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
const GA_TRACKING_ID = process.env.NEXT_GA_TRACKING_ID;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: ` 
            var Tynt = Tynt || [];
            Tynt.push("a_9hpwNGGr7yk5rkHcnnVW");
            (function () {
              var h,
                s = document.createElement("script");
              s.src = "https://cdn.tynt.com/ti.js";
              h = document.getElementsByTagName("script")[0];
              h.parentNode.insertBefore(s, h);
            })();
          `,
          }}
        />
      </Head>
      <body className="bg-white">
        <Script
          id="tawk"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6067fbf6067c2605c0bee399/1f2b30fe6';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
        `,
          }}
          type="text/javascript"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
