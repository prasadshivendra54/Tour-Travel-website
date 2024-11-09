"use client"

import Link from 'next/link'
import React from 'react'
import DarkMode from './DarkMode'
import {HiMenuAlt1, HiMenuAlt3} from 'react-icons/hi'
import ResponsivMenu from './ResponsivMenu'

export const Navlinks = [
  {
    id: "1",
    name: "Home",
    link: "/"
  },
  {
    id: "2",
    name: "About",
    link: "/about"
  },
  {
    id: "3",
    name: "Features",
    link: "/features"
  },
  {
    id: "4",
    name: "Blog",
    link: "/blog"
  },
  {
    id: "5",
    name: "Contact",
    link: "/contact"
  }
]

const Navbar = () => {

  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () =>{
    setShowMenu(!showMenu)
  };

  return (
    <nav className='relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300'>
      <div className='container py-2 md:py-0'>
        <div className='flex items-center justify-between'>
          
          {/* Logo Section */}
          <Link href="/" className='text-3xl font-bold'>
            <span>Roshni</span>
            <span className='text-primary'>Travel&apos;s</span>
          </Link>
          
          {/* Desktop Menu Section */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6'>
              {Navlinks.map(({ id, name, link}) => {
                return (
                  <li key={id} className='py-4'>
                    <div className={'text-lg font-medium text-black dark:text-white py-2 px-4 rounded-full hover:bg-primary dration-300'}>
                      {/* {name} */}
                      <Link href={link} >
                        {name}
                      </Link> 
                    </div>
                  </li>
                )
              })}

              {/* DarkMode feature implement */}
              <DarkMode />
            </ul>
          </div>

          {/* Mobile Menu Section */}
          <div className='md:hidden flex items-center gap-4'>
            <DarkMode />

            {
              showMenu ? (
                <HiMenuAlt1
                onClick={toggleMenu}
                className='cursor-pointer transition-all'
                size={30}
                />
              ) : (
                <HiMenuAlt3
                onClick={toggleMenu}
                className='cursor-pointer transition-all'
                size={30}
                />
              )
            }
          </div>
        </div>
      </div>

      <ResponsivMenu showMenu={showMenu} />
    </nav>

  )
}

export default Navbar









