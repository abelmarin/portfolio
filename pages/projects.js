import { getJobs, getContactDetails, getSocialMedia } from "storyblok/api"
import Meta from "components/Meta"
import Job from "components/Job"

export default function Projects({ jobs }) {
  return (
    <>
      <Meta title="Projects" />
      <Job jobs={jobs} />
    </>
  )
}

export async function getStaticProps() {
  const jobs = await getJobs()
  const socialMedia = await getSocialMedia()
  const contactDetails = await getContactDetails()

  return {
    props: {
      jobs,

      socialMedia,
      contactDetails,
    },
  }
}
