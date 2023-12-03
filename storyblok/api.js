export async function getJobs() {
  const data = await fetch(`https://gapi-us.storyblok.com/v1/api`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Token: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
      Version: "published",
    },
    body: JSON.stringify({
      query: `#graphql
        query GetAllJobItems {
            JobItems {
                items {
                content {
                    title
                    projects {
                    content
                    }
                    end
                    content
                    beginning
                    _uid
                }
                }
            }
            }
      `,
    }),
  })
    .then((response) => response.json())
    .then((res) =>
      res.data.JobItems.items.map((item) => ({ projects: item.content.projects.reverse(), ...item.content })),
    )

  return data
}
