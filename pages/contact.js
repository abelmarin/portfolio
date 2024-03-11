import Link from "next/link"
import GitHub from "public/assets/github.svg"
import LinkedIn from "public/assets/linkedin.svg"
import { getGlobals } from "storyblok/api"

export default function Contact({ socialMedia, contactDetails }) {
  return (
    <section>
      <a
        href="/Abel-Marin-Jr-Resume.docx"
        download
        className="mb-6 px-4 pt-2 pb-3 text-m3 lg:text-l2 border-2 border-white w-max mx-auto lg:mx-0 !no-underline inline-block"
      >
        Download My Resume
      </a>

      <div>
        Email: <Link href={`mailto:${contactDetails?.Email}`}>{contactDetails?.Email}</Link>
      </div>
      <div>
        Phone: <Link href={`tel:${contactDetails?.Phone}`}>{contactDetails?.Phone}</Link>
      </div>

      <div className="flex gap-4 pt-8">
        <a href={socialMedia?.GitHub} target="_blank">
          <GitHub className="w-8 h-8 aspect-square" />
        </a>
        <a href={socialMedia?.LinkedIn} target="_blank">
          <LinkedIn className="w-8 h-8 aspect-square" />
        </a>
      </div>
    </section>
  )
}

export async function getStaticProps() {
  const globals = await getGlobals()

  return {
    props: {
      title: "Contact",
      ...globals,
    },
  }
}
