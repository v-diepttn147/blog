'use client'

import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import clsx from 'classnames'
import { usePathname } from 'next/navigation'
import Link from './link'
import MobileNav from './mobile-nav'
import SearchButton from './search-button'
import ThemeSwitch from './theme-switch'

const Header = () => {
  const pathName = usePathname()

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold text-gray-900 dark:text-white sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={clsx(
                'hidden font-medium text-gray-900 hover:text-accent-500 dark:text-gray-100 hover:dark:text-accent-500 sm:block',
                {
                  'text-accent-500 dark:text-accent-500': pathName.includes(link.href),
                }
              )}
            >
              / {link.title}
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
