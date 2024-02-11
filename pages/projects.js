import { getGlobals } from "storyblok/api"
import JobSection from "components/JobSection"

export default function Projects({ jobs, allJobs }) {
  return (
    <>
      <JobSection jobs={jobs} currentJob={allJobs} />
    </>
  )
}

export async function getStaticProps() {
  const globals = await getGlobals()

  const allJobs = {
    projects: globals?.jobs
      .reduce((prev, curr) => [...curr.projects, ...prev], [])
      .sort((a, b) => {
        if (a.title > b.title) return 1
        if (b.title > a.title) return -1
        return 0
      }),
  }

  return {
    props: {
      title: "Projects",
      allJobs,
      ...globals,
    },
  }
}
