import Link from "next/link"
import GitHub from "public/assets/github.svg"
import LinkedIn from "public/assets/linkedin.svg"
import Hamburger from "public/assets/hamburger-menu-button.svg"

export default function Header({ socialMedia, jobs }) {
  return (
    <header className="mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center pb-4 mb-12 border-b border-white">
      <div>
        <Link href="/" className="font-light text-l2 lg:text-xl2">
          Abel Marin Jr.
        </Link>
        <div className="text-m2 text-center sm:text-left">Web Developer</div>
      </div>
      <nav className="flex gap-4 items-center">
        <div className="group">
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <ul>
            <li></li>
          </ul>
        </div>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href={socialMedia?.GitHub} target="_blank">
          <GitHub className="w-8 h-8 aspect-square" />
        </Link>
        <Link href={socialMedia?.LinkedIn} target="_blank">
          <LinkedIn className="w-8 h-8 aspect-square" />
        </Link>
      </nav>
    </header>
  )
}
