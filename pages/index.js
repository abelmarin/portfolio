import Meta from "components/Meta"
import { getContactDetails, getSocialMedia } from "storyblok/api"

export default function Home() {
  return (
    <main>
      <Meta title="Home" />
      home
    </main>
  )
}

export async function getStaticProps() {
  const socialMedia = await getSocialMedia()
  const contactDetails = await getContactDetails()

  return {
    props: {
      socialMedia,
      contactDetails,
    },
  }
}
