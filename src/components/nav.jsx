import { useState } from 'react'
import Logo from './logo'
import MenuButton from './menu-button'
import MenuNav from './menu-nav'

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="px-10 py-5 bg-white dark:bg-slate-900 shadow relative flex flex-row items-start gap-5 md:items-center justify-between">
      <Logo />

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        <MenuButton open={open} />
      </button>

      <MenuNav open={open} />
    </nav>
  )
}

export default Nav
