import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="og:description" content="패션의 완성 대양ING" />
        <meta property="og:image" content="https://llpb2hr4wxbuf0dj.public.blob.vercel-storage.com/DaeYang-ceGeJm40N8tOMcF6PzPhUwwzHrrpvp.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=6kbpgfbf8d"
        />
      </body>
    </Html>
  );
}
