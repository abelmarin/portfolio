import query from "storyblok/query"
import { JobItems, ContactDetails, SocialMedia, JobPaths, Job } from "storyblok/graphql"

export async function getJobPaths() {
  const data = await query({ query: JobPaths, type: "JobItems" })

  return data?.items?.map(({ slug }) => ({ params: { job: slug } }))
}

export async function getJob(slug) {
  const data = await query({ query: Job, type: "JobItem", variables: { slug } })

  return {
    ...data.content,
    slug: `/projects/${data?.slug}`,
    projects: data.content.projects
      .map(({ content }) => content)
      .sort((a, b) => {
        if (a.title > b.title) return 1
        if (b.title > a.title) return -1
        return 0
      }),
  }
}

export async function getGlobals() {
  const contactDetails = await query({ query: ContactDetails, type: "DatasourceEntries" })
  const socialMedia = await query({ query: SocialMedia, type: "DatasourceEntries" })

  const jobs = await query({ query: JobItems, type: "JobItems" }).then((res) =>
    res.items.map((item) => ({
      ...item.content,
      slug: `/projects/${item?.slug}`,
      projects: item.content.projects
        .map(({ content }) => content)
        .sort((a, b) => {
          if (a.title > b.title) return 1
          if (b.title > a.title) return -1
          return 0
        }),
    })),
  )

  return {
    jobs,
    contactDetails: contactDetails.items.reduce((acc, { name, value }) => ({ [name]: value, ...acc }), {}),
    socialMedia: socialMedia.items.reduce((acc, { name, value }) => ({ [name]: value, ...acc }), {}),
  }
}
