// @lib
import { HiMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'

// @resources
import { menus } from '@resources'

// @hooks
import { useState, createElement } from 'react'
import { useAppData } from '@context/AppContext'

const getClases = () => {
  const clases = {
    primaryContainer: {
      base: `flex gap-6`,
    },
    contentContainer: {
      base: `bg-slate-300 ml-20 mr-4  text-xl text-gray-900 font-semibold w-full h-screen`,
      dark: `dark:bg-slate-900 dark:text-gray-300`,
    },
    sidebar: {
      base: (open) =>
        `bg-[#0e0e0e] min-h-screen rounded-r-lg ${
          open ? 'w-72 fixed' : 'w-16 fixed'
        } duration-500 text-gray-300 px-4 `,
      dark: `dark:bg-slate-300 dark:text-slate-900`,
    },
    link: {
      base: (margin) =>
        ` ${
          margin && 'mt-5'
        } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`,
      dark: `dark:hover:bg-gray-200 dark:text-slate-800`,
    },
    toolTip: {
      base: (open) =>
        `${
          open && 'hidden'
        } absolute left-48 bg-slate-900 font-semibold whitespace-pre text-gray-300 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`,
      dark: `dark:bg-slate-300 dark:text-slate-900`,
    },
  }

  return clases
}

const SideBar = ({ children }) => {
  const { handleTheme } = useAppData()
  const [open, setOpen] = useState(false)
  const clases = getClases()

  return (
    <section className={`${clases.primaryContainer.base}`}>
      <div className={`${clases.sidebar.base(open)} ${clases.sidebar.dark}`}>
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`${clases.link.base(menu?.margin)} ${
                clases.link.dark
              }`}
              onClick={open ? () => setOpen(!open) : null}
            >
              <div>{createElement(menu?.icon, { size: '20' })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${clases.toolTip.base(open)} ${
                  clases.toolTip.dark
                }`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`${clases.contentContainer.base} ${clases.contentContainer.dark}`}
      >
        {children}
      </div>
      <div className="absolute right-2 bottom-2">
        <button
          className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-80"
          onClick={handleTheme}
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default SideBar
