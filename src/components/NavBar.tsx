import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
const navItems = [
      {
            id: 1,
            value: 'Home',
            href: '#home',
      },
      {
            id: 2,
            value: 'About',
            href: '#about',
      }
      , {
            id: 7,
            value: 'Education',
            href: '#education',
      },
      {
            id: 4,
            value: 'Experience',
            href: '#experience',
      },
      {
            id: 5,
            value: 'Projects',
            href: '#projects',
      },
      {
            id: 3,
            value: 'Skills',
            href: '#skills',
      },

      {
            id: 6,
            value: 'Contact',
            href: '#contact',
      }
]
const NavBar: React.FC = () => {
      const [isOpen, setIsOpen] = useState(false)


      return (

            <>
                  <nav className="container mx-auto  flex justify-between items-center h-[5rem]">
                        <button className="text-2xl font-bold text-white">Gaby NJONOU</button>
                        <div className="hidden md:flex space-x-6  justify-between items-center">
                              {navItems.map((item, index) => (
                                    <a key={index} href={item.href} className="block px-4 text-sm ">{item.value}</a>
                              ))}
                        </div>
                        <div className="flex lg:hidden px-2">
                              <button type="button" onClick={() => setIsOpen(true)}
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                    <span className="sr-only">Open main menu</span>
                                    <FaBars size={24} className='text-white' />
                              </button>
                        </div>
                  </nav>
                  <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`} role="dialog" aria-modal="true">
                        <div className="fixed inset-0 z-50"></div>
                        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                              <div className="flex items-center justify-between">
                                    <a href='/' className="-m-1.5 p-1.5">
                                          <button className="text-2xl font-bold text-gradient">Gaby NJONOU</button>
                                    </a>
                                    <button type="button" onClick={() => setIsOpen(false)}
                                          className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                          <span className="sr-only">Close menu</span>
                                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                          </svg>
                                    </button>
                              </div>

                              <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                          <div className="space-y-2 py-6">
                                                {
                                                      navItems.map((item, index) => (
                                                            <a key={index} href={item.href} onClick={() => setIsOpen(false)}
                                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{item.value}</a>
                                                      ))
                                                }
                                          </div>

                                    </div>
                              </div>
                        </div>
                  </div>
            </>

      )
}

export default NavBar