import { Link } from "gatsby"
import React from "react"

interface HeaderProps {
  siteTitle: string
}

export const Header = ({ siteTitle }: HeaderProps) => (
  <header>
    <h1 className="container mx-auto py-3 px-3 sm:text-xl md:text-3xl font-bold">
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
)
