import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <link rel="icon" type="image/png" href="weather.png" />
      <title>Weather App</title>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
