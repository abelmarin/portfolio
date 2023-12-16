import Head from "next/head"

export default function Meta({ title }) {
  return (
    <Head>
      <title>{`${title} | Abel Marin Jr.`}</title>
      <meta property="og:title" content={`${title} | Abel Marin Jr.`} />
      <meta property="twitter:title" content={`${title} | Abel Marin Jr.`} />
    </Head>
  )
}
