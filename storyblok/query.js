import { print } from "graphql/language/printer"

export default async function fetchQuery({ query, type, variables }) {
  query = typeof query === "object" ? print(query) : query

  try {
    const { data } = await fetch(`https://gapi-us.storyblok.com/v1/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: process.env.STORYBLOK_API_TOKEN,
        Version: "published",
      },
      body: JSON.stringify({
        query: query,
        variables: { ...variables },
      }),
    }).then((response) => response.json())

    return data[type]
  } catch (error) {
    console.error(error)
    return false
  }
}
