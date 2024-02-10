import { getJobs, getGlobals } from "storyblok/api"
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
  const globals = await getGlobals()

  return {
    props: {
      title: "Projects",
      jobs,
      ...globals,
    },
  }
}
