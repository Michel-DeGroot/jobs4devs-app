import { useState, useEffect } from "react"
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react"

import Logo from "./assets/Jobs4devs_logo.png"

import BG from "./assets/bg-header-desktop.svg"
import BGM from "./assets/bg-header-mobile.svg"

export default function NaviBar() {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <div className="p-1 font-bold uppercase text-teal-900 hover:text-teal-300">
        <a href="#" className="flex items-center">
          Home
        </a>
      </div>
      <div className="p-1 font-bold uppercase text-teal-900 hover:text-teal-300">
        <a
          href="http://dev.micheldegroot.com/index.html"
          className="flex items-center"
        >
          About
        </a>
      </div>

      <div className="p-1 font-bold uppercase text-teal-900 hover:text-teal-300">
        <a
          href="http://dev.micheldegroot.com/contact.html"
          className="flex items-center"
        >
          Contact
        </a>
      </div>
    </ul>
  )

  return (
    <nav
      style={{ backgroundImage: `url(${BG})` }}
      className="bg-transparent mx-auto max-w-screen-xl py-2 px-4 xl:px-8
      xl:py-4 lg:h-40 lg:bg-center bg-no-repeat"
    >
      <div className="container mx-auto flex items-center justify-between text-black-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-bold"
        >
          <span>
            <img className="img-responsive w-40 h-auto" src={Logo} alt="logo" />
          </span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              stroke="black"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </nav>
  )
}
