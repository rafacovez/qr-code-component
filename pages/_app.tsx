import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="Main">
      <Head>
        <title>QR Code Component</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Frontend Mentor challenge" />
        <meta
          name="keywords"
          content="NextJS, TypeScript, Tailwind, Challenge"
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
