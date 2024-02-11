import { getGlobals } from "storyblok/api"

export default function Page() {
  return (
    <section>
      <h1>404 Not Found</h1>
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
