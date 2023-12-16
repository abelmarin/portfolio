import Header from "components/Header"
import "styles.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header {...pageProps} />
      <Component {...pageProps} />
    </>
  )
}
