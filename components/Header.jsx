import Link from "next/link"
import GitHub from "public/assets/github.svg"
import LinkedIn from "public/assets/linkedin.svg"

export default function Header({ socialMedia }) {
  return (
    <header className="mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center pb-4 mb-12 border-b border-white">
      <div>
        <Link href="/">
          <h1 className="font-light text-l1 md:text-xl2">Abel Marin Jr.</h1>
        </Link>
        <h2 className="text-m2 text-center sm:text-left">Web Developer</h2>
      </div>
      <nav className="flex gap-4 items-center">
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
