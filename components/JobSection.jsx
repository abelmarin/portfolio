import Image from "next/image"
import Link from "next/link"
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

export default function JobSection({ jobs, currentJob }) {
  return (
    <section className="pb-4 md:pb-8 flex">
      <div className="md:basis-2/3">
        <div className="grid lg:grid-cols-2 gap-8">
          {currentJob?.projects?.map((project) => (
            <Project {...project} key={project._uid} />
          ))}
        </div>
      </div>
      <nav className="basis-1/3 hidden md:flex flex-col items-end sticky top-12">
        <Link href="/projects" className="text-right w-max hover:underline">
          All Projects
        </Link>
        {jobs.map((job) => (
          <Link href={job?.slug} key={job?._uid} className="text-right w-max hover:underline">
            {job.title}
          </Link>
        ))}
      </nav>
    </section>
  )
}
