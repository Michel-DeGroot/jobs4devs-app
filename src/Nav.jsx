import React from "react"
import Button from "./components/Button"

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ]

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="bg-white md:flex items-center justify-between md:px-10 py-4 font-bold">
        <div className="cursor-pointer ml-10 flex items-center text-3xl font-[Montserrat]">
          <span className="">
            <img src="/public/images/Jobs4devs_logo.png" />
          </span>
          jobs4devs
        </div>
        <ul className="md:flex md:items-center">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-lg">
              <a
                href={link.link}
                className="text-teal-900 hover:text-teal-100 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button />
        </ul>
      </div>
    </div>
  )
}

export default Nav
