import Link from "next/link"
import Image from "next/image"
import { render } from "storyblok-rich-text-react-renderer"

export function Project({ title, content, image, url, github, figma }) {
  return (
    <article className="border-b border-white pb-8 last:border-b-0 md:border-b-0">
      <div className="flex flex-col gap-4">
        <Image
          src={image?.filename ? image.filename : "/assets/logo.svg"}
          alt={image.alt}
          width={400}
          height={500}
          className="w-full aspect-video object-cover"
        />

        <div>
          <h2 className="text-l1 mb-2">{title}</h2>
          <div className="flex gap-3">
            {url?.url ? (
              <a href={url.url} target="_blank">
                View Website
              </a>
            ) : null}
            {github?.url ? (
              <a href={github.url} target="_blank">
                View Github
              </a>
            ) : null}
            {figma?.url ? (
              <a href={figma.url} target="_blank">
                View Figma
              </a>
            ) : null}
          </div>
          {render(content) ? <div className="py-3">{render(content)}</div> : null}
        </div>
      </div>
    </article>
  )
}

export default function JobSection({ jobs, currentJob, title, content }) {
  return (
    <>
      <nav className="basis-1/3 flex flex-wrap gap-4 justify-center mx-auto pb-12">
        <Link href="/projects" className="text-m2 w-max">
          All Projects
        </Link>
        {jobs.map((job) => (
          <Link href={job?.slug} key={job?._uid} className="text-m2 w-max">
            {job.title}
          </Link>
        ))}
      </nav>
      {title ? (
        <h2 className="mb-6 px-4 pt-2 pb-3 text-l2 sm:text-xl1 border-2 border-white w-max mx-auto lg:mx-0">{title}</h2>
      ) : null}
      {render(content) ? <div className="pb-8 text-m2 text-center lg:text-left">{render(content)}</div> : null}
      <section className="pb-4 md:pb-8">
        <div className="md:basis-2/3">
          <div className="grid lg:grid-cols-2 gap-8">
            {currentJob?.projects?.map((project) => (
              <Project {...project} key={project._uid} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
