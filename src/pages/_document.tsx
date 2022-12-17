import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head />
        <body className="transition-colors">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
