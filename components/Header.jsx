import Link from "next/link"
import cn from "classnames"
import GitHub from "public/assets/github.svg"
import LinkedIn from "public/assets/linkedin.svg"
import Hamburger from "public/assets/hamburger-menu-button.svg"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Header({ socialMedia, jobs }) {
  const [openSubmenu, setOpenSubmenu] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      setOpenSubmenu(false)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    router.events.on("hashChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
      router.events.off("hashChangeComplete", handleRouteChange)
    }
  }, [router])

  useEffect(() => {
    if (openSubmenu) document.querySelector("html").style.overflow = "hidden"
    if (!openSubmenu) document.querySelector("html").style.overflow = ""
  }, [openSubmenu])

  return (
    <header className="mx-auto flex gap-4 justify-between items-center pb-4 mb-12 border-b border-white w-full">
      <div>
        <Link href="/" className="font-light text-l2 lg:text-xl2">
          Abel Marin Jr.
        </Link>
        <div className="text-m2">Web Developer</div>
      </div>
      <button onClick={() => setOpenSubmenu(!openSubmenu)} className="lg:hidden">
        <Hamburger className="w-12 h-12" />
      </button>
      <nav
        className={cn(
          "gap-4 items-center absolute lg:static h-screen w-full lg:h-auto lg:w-auto bg-gray top-28 left-0 pt-6 lg:pt-0 px-6 lg:px-0 z-10 lg:flex",
          {
            hidden: !openSubmenu,
          },
        )}
      >
        <div className="group">
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <ul className="lg:hidden group-hover:block lg:absolute bg-gray py-4 px-4 lg:pb-0">
            {jobs.map((job) => (
              <li key={job._uid}>
                <Link href={job.slug} className="hover:underline">
                  {job.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <div className="flex gap-4 pt-8 lg:pt-0">
          <a href={socialMedia?.GitHub} target="_blank">
            <GitHub className="w-8 h-8 aspect-square" />
          </a>
          <a href={socialMedia?.LinkedIn} target="_blank">
            <LinkedIn className="w-8 h-8 aspect-square" />
          </a>
        </div>
      </nav>
    </header>
  )
}
