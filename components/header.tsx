'use client'

import headerNavLinks from '@/data/headerNavLinks'
import clsx from 'classnames'
import { usePathname } from 'next/navigation'
import Link from './link'
import MobileNav from './mobile-nav'
import SearchButton from './search-button'
import ThemeSwitch from './theme-switch'

const Header = () => {
  const pathName = usePathname()

  console.log(pathName)

  return (
    <header className="flex items-center justify-between py-10">
      <div className="flex w-full items-center justify-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={clsx(
              'hidden font-medium text-gray-900 hover:text-accent-500 dark:text-gray-100 hover:dark:text-accent-500 sm:block',
              {
                'text-accent-500 dark:text-accent-500': pathName === link.href,
              }
            )}
          >
            {link.title}
          </Link>
        ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
