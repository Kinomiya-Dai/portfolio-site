import Link from 'next/link'
import DarkModeToggle from './darkModeToggle'
import { PiNavigationArrowFill } from 'react-icons/pi'

const navItems = {
  '/about': {
    name: 'About',
  },
  '/work': {
    name: 'Works',
  },
  '/blog': {
    name: 'Blog',
  },
}
const cx = (...classes) => classes.filter(Boolean).join(' ')

export function SpNavButton() {
  return (
    <>
      <button className='fixed bottom-6 right-6 z-50 w-12 h-12 cursor-pointer
                         block tab:hidden
                         rounded-full  bg-pf-bg shadow-2xl
                         border border-pf-text/10
                         '>
        <div className='flex items-center justify-center'>
          <PiNavigationArrowFill className='fill-pf-slider-ui w-5 h-5' />
        </div>
      </button>
      {/* ナビゲーションエリア */}
      <div>
        <ul>
          <Link href="/">
            <li className='px-2 font-bold leading-14'>Home</li>
          </Link>

          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className={cx("text-underline-animate transition-all hover:opacity-75 flex align-middle relative py-1 px-2 m-1",
                )}
              >
                <li>{name}</li>
              </Link>
            )
          })}
        </ul>

      </div>
    </>
  )
}
