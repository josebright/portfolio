import Contact from "./contact";


export default function NavBar() {
  return (
    <>
      <nav className="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-[#DEE1E4]">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Contact />
          <div className="flex md:order-2">
            <button type="button" className="text-[#DEE1E4] bg-gradient-to-r from-[#C12F5C] to-[#4161A7] hover:text-white font-medium rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0">Blog</button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[#111827] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-[#4161A7] rounded md:bg-transparent md:text-[#4161A7] md:p-0 dark:text-white" aria-current="page">ABOUT</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#4161A7] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">PROJECTS</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#4161A7] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">RESUME</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}