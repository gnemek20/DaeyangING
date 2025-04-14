import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>대양ING | 고품질 지퍼 및 의류 부자재 맞춤 제작</title>
        <meta name="description" content="지퍼를 통해 패션에 새로운 날개를 달다 - 대양ING는 고품질 지퍼와 의류 부자재를 빠르게, 원하는 방식으로 제작해 드립니다." />
        <meta property="og:title" content="대양ING" />
        <meta property="og:description" content="패션에 새로운 날개를 달다, 대양ING" />
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
