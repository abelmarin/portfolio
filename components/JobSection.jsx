import Image from "next/image"
import Link from "next/link"
import { render } from "storyblok-rich-text-react-renderer"

export function Project({ title, content, image, url, github, figma }) {
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
            {figma?.url ? (
              <Link href={figma.url} target="_blank">
                View Figma
              </Link>
            ) : null}
          </div>
          <div>{render(content)}</div>
        </div>
      </div>
    </article>
  )
}

export default function JobSection({ jobs, currentJob }) {
  return (
    <>
      {currentJob?.title ? <h2 className="pb-4 text-xl1">{currentJob?.title}</h2> : null}
      {currentJob?.content ? <div className="pb-8">{render(currentJob?.content)}</div> : null}
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
    </>
  )
}
