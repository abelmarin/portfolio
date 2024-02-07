import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { render } from "storyblok-rich-text-react-renderer"

function Project({ title, content, image, url, github }) {
  return (
    <article>
      <div className="flex flex-col gap-4">
        <div>
          {image?.filename ? (
            <Image src={image?.filename} alt={image.alt} width={400} height={500} className="w-full max-w-xl" />
          ) : null}
        </div>
        <div>
          <h2 className="text-l1 mb-2">{title}</h2>
          <div className="flex gap-3 pb-3">
            {url?.url ? (
              <Link href={url.url} target="_blank">
                View Website
              </Link>
            ) : null}
            {github?.url ? (
              <Link href={github.url} target="_blank">
                View Github
              </Link>
            ) : null}
          </div>
          <div>{render(content)}</div>
        </div>
      </div>
    </article>
  )
}

export default function Job({ jobs }) {
  const [currentJob, setCurrentJob] = useState(jobs[0])

  return (
    <section className="pb-4 md:pb-8 flex">
      <div className="md:basis-2/3">
        <h2 className="pb-4 text-xl1">{currentJob?.title}</h2>
        <div className="pb-8">{render(currentJob?.content)}</div>

        <div className="grid lg:grid-cols-2 gap-8">
          {currentJob?.projects?.map((project) => (
            <Project {...project} key={project._uid} />
          ))}
        </div>
      </div>
      <nav className="basis-1/3 hidden md:flex flex-col items-end sticky top-12">
        {jobs.map((job) => (
          <button onClick={() => setCurrentJob(job)} key={job?._uid} className="text-right w-max hover:underline">
            {job.title}
          </button>
        ))}
      </nav>
    </section>
  )
}
