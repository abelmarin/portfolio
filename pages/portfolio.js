import Project from "components/Project"
import { getJobs } from "storyblok/api"

export default function Portfolio({ jobs }) {
  return (
    <>
      <main>
        <h1 className="text-center pt-6">Projects</h1>
        {jobs.map((job) => (
          <section className="px-6 py-6 " key={job._uid}>
            <div className="max-w-screen-lg bg- mx-auto shadow-section rounded-xl px-6 py-8">
              <h2 className="">{job.title}</h2>
              {job?.projects?.map((project) => (
                <Project {...project.content} key={project._uid} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const jobs = await getJobs()

  return {
    props: {
      jobs,
    },
  }
}
