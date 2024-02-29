import { getGlobals, getJob, getJobPaths } from "storyblok/api"
import JobSection from "components/JobSection"

export default function JobPage({ jobs, job }) {
  return <JobSection jobs={jobs} currentJob={job} title={job?.title} content={job?.content} />
}

export async function getStaticProps({ params: { job } }) {
  const globals = await getGlobals()
  const jobItem = await getJob(`jobs/${job}`)

  return {
    props: {
      job: jobItem ?? null,
      title: jobItem.title,
      ...globals,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: await getJobPaths(),
    fallback: false,
  }
}
