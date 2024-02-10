import { getJobs, getContactDetails, getSocialMedia } from "storyblok/api"
import Job from "components/Job"

export default function Projects({ jobs }) {
  return (
    <>
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
      title: "Projects",
      jobs,
      socialMedia,
      contactDetails,
    },
  }
}
