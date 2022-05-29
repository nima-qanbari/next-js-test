import Document ,{ Html, Head, Main, NextScript } from 'next/document'



export default class MyDocument extends Document {
  render(){
  return (
    <Html lang="fa" dir='rtl'>
      <Head>
      {this.props.emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
  }
}

