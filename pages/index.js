import { getContactDetails, getSocialMedia } from "storyblok/api"

export default function Home({ jobs }) {
  return (
    <>
      <section></section>
    </>
  )
}

export async function getStaticProps() {
  const socialMedia = await getSocialMedia()
  const contactDetails = await getContactDetails()

  return {
    props: {
      title: "Home",
      socialMedia,
      contactDetails,
    },
  }
}
