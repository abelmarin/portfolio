import { render } from "storyblok-rich-text-react-renderer"
import { getGlobals, getJob, getJobPaths } from "storyblok/api"
import JobSection from "components/JobSection"

export default function JobPage({ jobs, job }) {
  return (
    <>
      {job?.title ? <h2 className="pb-4 text-xl1">{job?.title}</h2> : null}
      {render(job?.content) ? <div className="pb-8">{render(job?.content)}</div> : null}
      <JobSection jobs={jobs} currentJob={job} />
    </>
  )
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
