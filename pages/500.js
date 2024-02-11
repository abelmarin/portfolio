import { getGlobals } from "storyblok/api"

export default function Page() {
  return (
    <section>
      <h1>500 Internal Server Error</h1>
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
