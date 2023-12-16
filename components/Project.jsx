import Image from "next/image"
import { render } from "storyblok-rich-text-react-renderer"

export default function Project({ title, content, approximate_date, image }) {
  return (
    <article className="">
      <div className="flex flex-col lg:flex-row">
        <div className="basis-1/2 lg:border-r-2 lg:border-r-black lg:pr-8 pb-8 lg:pb-12">
          <h2 className=" mb-2">{title}</h2>
          <time className="block mb-2">{approximate_date}</time>
          <div>{render(content)}</div>
        </div>
        <div className="lg:basis-1/2 lg:pl-8">
          {image?.filename ? (
            <Image src={image?.filename} alt={image.alt} width={400} height={500} className="w-full" />
          ) : null}
        </div>
      </div>
    </article>
  )
}
