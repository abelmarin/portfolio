import query from "storyblok/query"
import { JobItems, ContactDetails, SocialMedia } from "storyblok/graphql"

export async function getJobs() {
  const data = await query({ query: JobItems, type: "JobItems" }).then((res) =>
    res.items.map((item) => ({
      ...item.content,
      projects: item.content.projects
        .map(({ content }) => content)
        .sort((a, b) => {
          if (a.title > b.title) return 1
          if (b.title > a.title) return -1
          return 0
        }),
    })),
  )

  return data
}

export async function getContactDetails() {
  const data = await query({ query: ContactDetails, type: "DatasourceEntries" })

  return data.items.reduce((acc, { name, value }) => ({ [name]: value, ...acc }), {})
}

export async function getSocialMedia() {
  const data = await query({ query: SocialMedia, type: "DatasourceEntries" })

  return data.items.reduce((acc, { name, value }) => ({ [name]: value, ...acc }), {})
}
