import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/icons/dlogo.ico" />
      </Head>
      <body className="overflow-x-hidden scrollbar-hide">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
