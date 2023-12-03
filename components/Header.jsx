import Link from "next/link"
import GitHub from "public/assets/github.svg"
import LinkedIn from "public/assets/linkedin.svg"

export default function Header() {
  return (
    <header className="px-6 py-8 max-w-screen-lg mx-auto flex justify-between items-center shadow-section rounded-3xl mt-12 bg-white">
      <Link href="/">
        <h1>Abel Marin Jr.</h1>
      </Link>
      <nav className="flex gap-4 items-center">
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
        <Link href="https://github.com/abelmarin" target="_blank">
          <GitHub className="w-8 aspect-square" />
        </Link>
        <Link href="https://www.linkedin.com/in/abelmarinjr" target="_blank">
          <LinkedIn className="w-8 aspect-square" />
        </Link>
      </nav>
    </header>
  )
}
