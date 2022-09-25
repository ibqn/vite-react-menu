import { classNames } from '../class-names'

import { navData } from '../data'

const MenuNav = (props) => {
  const { menuItems } = navData

  return (
    <ul
      className={classNames(
        'flex md:flex-row flex-col md:items-center gap-5 absolute md:px-0 bg-white md:static md:w-auto w-full top-full p-10 md:p-0',
        props.open ? 'left-0' : 'left-[200%]',
        'transition-all duration-300',
        'shadow md:shadow-none'
      )}
    >
      {menuItems.map((item, index) => {
        const { name, href } = item
        return (
          <li key={index}>
            <a
              href={href}
              className="capitalize text-xl duration-500 hover:text-cyan-500"
            >
              {name}
            </a>
          </li>
        )
      })}

      <li>
        <button className="bg-cyan-400 text-white font-bold duration-500 px-6 py-2 md:ml-4 hover:bg-cyan-500 rounded">
          Get started
        </button>
      </li>
    </ul>
  )
}

export default MenuNav
