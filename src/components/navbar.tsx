import React, { useState } from 'react';
import Contact from "./contact";
import styles from '@/styles/NavBar.module.css';


export default function NavBar() {
  const [activeItem, setActiveItem] = useState('about');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <nav className="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-[#DEE1E4]">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Contact />
          <div className="flex md:order-2">
            <a href='https://medium.com/@josebright' target="_blank" rel="noopener noreferrer" className="text-[#DEE1E4] bg-gradient-to-r from-[#C12F5C] to-[#4161A7] hover:text-white font-medium rounded-lg px-6 py-3 text-center mt-8 mr-3 md:mr-0">Blog</a>
            <button data-collapse-toggle="navbar-sticky" onClick={toggleDropdown} className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[#111827] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <a href="#about" 
                  onClick={() => setActiveItem('about')}
                  className={`block py-2 pl-3 pr-4 md:p-0 ${activeItem === 'about' ? 'text-[#4161A7]' : 'text-gray-700 hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-500'}`} 
                  aria-current={activeItem === 'about' ? 'page' : undefined}>
                    ABOUT
                </a>
              </li>
              <li>
                <a href="#projects" 
                  onClick={() => setActiveItem('projects')}
                  className={`block py-2 pl-3 pr-4 md:p-0 ${activeItem === 'projects' ? 'text-[#4161A7]' : 'text-gray-700 hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-500'}`}>
                    PROJECTS
                </a>
              </li>
              <li>
                <a href="#experience" 
                  onClick={() => setActiveItem('experience')}
                  className={`block py-2 pl-3 pr-4 md:p-0 ${activeItem === 'experience' ? 'text-[#4161A7]' : 'text-gray-700 hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-500'}`}>
                    EXPERIENCE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isDropdownVisible && (
        <div className={styles.dropdownContent}>
          <button onClick={toggleDropdown} className={styles.closeButton}>
            &times;
          </button>
          <ul>
            <li>
              <a onClick={toggleDropdown} href="#about">ABOUT</a>
            </li>
            <li>
              <a onClick={toggleDropdown} href="#projects">PROJECTS</a>
            </li>
            <li>
              <a onClick={toggleDropdown} href="#experience">EXPERIENCE</a>
            </li>
          </ul>
        </div>
      )}

    </>
  )
}