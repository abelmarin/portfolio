import Link from "next/link"
import { getGlobals } from "storyblok/api"

export default function Home() {
  return (
    <section>
      <h1 className="pb-3">Welcome</h1>
      <div className="pb-4">JavaScript | HTML | CSS | React.js | Next.js</div>
      <p className="pb-4 max-w-2xl">
        My name is Abel Marin. I am a web developer based in the Midwest. I work primarily with Next.js and related
        technologies.
      </p>
      <div className="flex gap-4">
        <Link href="/projects">View My Projects</Link>
        <Link href="/contact">Contact Information</Link>
      </div>
    </section>
  )
}

export async function getStaticProps() {
  const globals = await getGlobals()

  return {
    props: {
      title: "Home",
      ...globals,
    },
  }
}
