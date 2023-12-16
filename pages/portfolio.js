import Meta from "components/Meta"
import Project from "components/Project"
import { getJobs, getContactDetails, getSocialMedia } from "storyblok/api"

export default function Portfolio({ jobs }) {
  return (
    <main className="pb-12">
      <Meta title="Home" />
      <h1 className="text-center pt-6">Project Portfolio</h1>
      {jobs.map((job) => (
        <section className="py-6" id={job.title} key={job._uid}>
          <div className="max-w-screen-lg bg- mx-auto shadow-section rounded-xl px-6 py-8">
            <h2 className="pb-8">{job.title}</h2>
            {job?.projects?.map((project) => (
              <Project {...project.content} key={project._uid} />
            ))}
          </div>
        </section>
      ))}
    </main>
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
