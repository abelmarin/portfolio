import { getGlobals } from "storyblok/api"

export default function Home({ jobs }) {
  return (
    <>
      <section>
        <div>JavaScript | HTML | CSS | React.js | Next.js</div>
      </section>
    </>
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
