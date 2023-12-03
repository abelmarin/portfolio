import Image from "next/image"
import { render } from "storyblok-rich-text-react-renderer"

export default function Project({ title, content, approximate_date, image }) {
  return (
    <article className="py-4">
      <div className="flex">
        <div className="basis-1/2">
          <h2 className="uppercase">{title}</h2>
          <time>{approximate_date}</time>
          <div>{render(content)}</div>
        </div>
        <div className="basis-1/2">
          {image?.filename ? <Image src={image?.filename} alt={image.alt} width={400} height={500} /> : null}
        </div>
      </div>
    </article>
  )
}
