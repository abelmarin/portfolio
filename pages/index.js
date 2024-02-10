import { getGlobals } from "storyblok/api"

export default function Home({ jobs }) {
  return (
    <>
      <section></section>
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
