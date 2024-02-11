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
      </Head>
      <main className="max-w-screen-xl mx-auto border border-white p-4 lg:p-10 min-h-[50dvh]">
        <Header {...remainingProps} />
        <div className="main-content">
          <Component {...remainingProps} />
        </div>
      </main>
    </>
  )
}
