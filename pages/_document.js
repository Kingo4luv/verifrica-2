
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <link
            rel="preload"
            href="/font/PlusJakartaDisplay-Regular.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href = "/font/PlusJakartaDisplay-Medium.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href = "/font/PlusJakartaDisplay-Bold.otf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body style={{fontFamily: `Plus Jakarta Sans, sans-serif`}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;