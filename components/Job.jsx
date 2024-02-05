import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { render } from "storyblok-rich-text-react-renderer"

function Project({ title, content, image, url, github }) {
  return (
    <article className="group">
      <div className="flex flex-col gap-12">
        <div className="">
          {image?.filename ? (
            <Image src={image?.filename} alt={image.alt} width={400} height={500} className="w-full max-w-xl" />
          ) : null}
        </div>
        <div className="pb-8 group-last:pb-0 lg:pb-12">
          <h2 className="text-l1 mb-2">{title}</h2>
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
          <div>{render(content)}</div>
        </div>
      </div>
    </article>
  )
}

export default function Job({ title, content, projects }) {
  const [currentProject, setCurrentProject] = useState(projects[0])

  return (
    <section id={title} className="pb-12 last:pb-0">
      <div>
        <h2 className="pb-4 text-xl1">{title}</h2>
        <div className="pb-8">{render(content)}</div>
        <div>
          <Project {...currentProject} />
        </div>
        {/* {projects?.map((project) => (
          <Project {...project.content} key={project._uid} />
        ))} */}
      </div>
    </section>
  )
}
