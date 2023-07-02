import Document, { DocumentContext, DocumentInitialProps, Html, Main, Head, NextScript } from 'next/document'
import { JSX } from 'react'
 
class DrupalshipDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>  
      </Html>
    )
  }

}
 
export default DrupalshipDocument
