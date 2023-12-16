import Meta from "components/Meta"
import Link from "next/link"
import GitHub from "public/assets/github.svg"
import LinkedIn from "public/assets/linkedin.svg"
import { getContactDetails, getSocialMedia } from "storyblok/api"

export default function Contact({ socialMedia, contactDetails }) {
  return (
    <main>
      <Meta title="Contact" />
      <h1 className="text-center pt-6">Contact Info</h1>
      <section className="px-6 py-6 max-w-screen-lg mx-auto shadow-section rounded-3xl mt-12">
        <div>
          Email: <Link href={`mailto:${contactDetails?.Email}`}>{contactDetails?.Email}</Link>
        </div>
        <div>
          Phone: <Link href={`tel:${contactDetails?.Phone}`}>{contactDetails?.Phone}</Link>
        </div>

        <div className="flex gap-4 pt-4">
          <Link href={socialMedia?.GitHub} target="_blank">
            <GitHub className="w-8 aspect-square" />
          </Link>
          <Link href={socialMedia?.LinkedIn} target="_blank">
            <LinkedIn className="w-8 aspect-square" />
          </Link>
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
