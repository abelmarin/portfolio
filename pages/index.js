import { getJobs, getContactDetails, getSocialMedia } from "storyblok/api"
import Meta from "components/Meta"
import Job from "components/Job"

export default function Home({ jobs }) {
  return (
    <>
      <Meta title="Home" />
      <div className="divide-y divide-white">
        {jobs.map((job) => (
          <Job {...job} key={job?._uid} />
        ))}
      </div>
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
