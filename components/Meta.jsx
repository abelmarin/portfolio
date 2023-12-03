import { Head } from "next/head"

export default function Meta({ title, description, image }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
