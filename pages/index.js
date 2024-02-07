import { getContactDetails, getSocialMedia } from "storyblok/api"
import Meta from "components/Meta"

export default function Home({ jobs }) {
  return (
    <>
      <Meta title="Home" />
    </>
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
