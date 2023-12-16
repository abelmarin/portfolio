import { getContactDetails, getSocialMedia } from "storyblok/api"

export default function Page() {
  return (
    <main>
      <section className="px-6 py-8 max-w-screen-lg mx-auto shadow-section rounded-3xl mt-12">
        <div>
          <h1>404 Not Found</h1>
        </div>
      </section>
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
