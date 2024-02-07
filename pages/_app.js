import Header from "components/Header"
import "styles.css"
import "@fontsource/zen-maru-gothic/300.css"
import "@fontsource/zen-maru-gothic/400.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className="max-w-screen-xl mx-auto border border-white p-4 lg:p-10">
        <Header {...pageProps} />
        <Component {...pageProps} />
      </main>
    </>
  )
}
