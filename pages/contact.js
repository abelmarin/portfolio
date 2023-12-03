import Head from "next/head"
import Link from "next/link"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Abel Marin Jr.</title>
      </Head>
      <main>
        <section className="px-6 py-8 max-w-screen-lg mx-auto shadow-section rounded-3xl mt-12">
          <h1 className="text-center pb-4">Contact Info</h1>

          <div>
            Email: <Link href="mailto:marinabe1416@gmail.com">marinabe1416@gmail.com</Link>
          </div>
          <div>
            Phone: <Link href="mailto:marinabe1416@gmail.com">marinabe1416@gmail.com</Link>
          </div>
        </section>
      </main>
    </>
  )
}
