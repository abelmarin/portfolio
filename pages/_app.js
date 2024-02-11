import Header from "components/Header"
import Head from "next/head"
import "styles.css"
import "@fontsource/zen-maru-gothic/300.css"
import "@fontsource/zen-maru-gothic/400.css"

export default function App({ Component, pageProps: { title, ...remainingProps } }) {
  return (
    <>
      <Head>
        <title>{`${title} | Abel Marin Jr.`}</title>
        <meta property="og:title" content={`${title} | Abel Marin Jr.`} />
        <meta property="twitter:title" content={`${title} | Abel Marin Jr.`} />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#0d0d0d" />
        <meta name="theme-color" content="#0d0d0d" />
      </Head>
      <main className="max-w-screen-xl mx-auto border border-white px-4 pt-4 pb-8 lg:p-10">
        <Header {...remainingProps} />
        <div className="main-content">
          <Component {...remainingProps} />
        </div>
      </main>
    </>
  )
}
