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

export default function Job({ title, content, projects }) {
  const [currentProject, setCurrentProject] = useState(projects[0])

  return (
    <section id={title} className="pb-12 last:pb-0 flex">
      <div className="md:basis-1/2">
        <h2 className="pb-4 text-xl1">{title}</h2>
        <div className="pb-8">{render(content)}</div>
        <div className="flex">
          <Project {...currentProject} />
        </div>
        {/* {projects?.map((project) => (
            <Project {...project.content} key={project._uid} />
        ))} */}
      </div>
      <nav className="basis-1/2 hidden md:flex flex-col text-right">
        {projects.map((project) => (
          <button onClick={() => setCurrentProject(project)} key={project?._uid} className="text-right">
            {project.title}
          </button>
        ))}
      </nav>
    </section>
  )
}
