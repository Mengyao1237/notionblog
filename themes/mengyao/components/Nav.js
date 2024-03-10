import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { MenuItemDrop } from './MenuItemDrop'
import Link from 'next/link'

/**
 * 菜单导航
 * @param {*} props
 * @returns
 */
export const Nav = props => {
  const { isHome, customNav, customMenu } = props
  const { locale } = useGlobal()

  // let links = [
  //   { id: 1, icon: 'fas fa-search', name: locale.NAV.SEARCH, to: '/search', show: siteConfig('EXAMPLE_MENU_SEARCH', null, CONFIG) },
  //   { id: 2, icon: 'fas fa-archive', name: locale.NAV.ARCHIVE, to: '/archive', show: siteConfig('EXAMPLE_MENU_ARCHIVE', null, CONFIG) },
  //   { id: 3, icon: 'fas fa-folder', name: locale.COMMON.CATEGORY, to: '/category', show: siteConfig('EXAMPLE_MENU_CATEGORY', null, CONFIG) },
  //   { id: 4, icon: 'fas fa-tag', name: locale.COMMON.TAGS, to: '/tag', show: siteConfig('EXAMPLE_MENU_TAG', null, CONFIG) }
  // ]

  let links = [
    { id: 1, icon: '', name: 'Post', to: '/post', show: true },
    { id: 2, icon: '', name: 'Photography', to: '/photography', show: true },
    { id: 3, icon: '', name: 'About', to: '/about', show: true },
    { id: 4, icon: '', name: 'Contact', to: '/contact', show: true }
  ]

  if (customNav) {
    links = links.concat(customNav)
  }

  // 如果 开启自定义菜单，则不再使用 Page生成菜单。
  if (siteConfig('CUSTOM_MENU')) {
    links = customMenu
  }

  if (!links || links.length === 0) {
    return null
  }

  if (isHome) {
    return (
      <nav className="w-full | md:pt-0 px-6 relative z-20">
        <div className="container mx-auto max-w-7xl flex justify-between items-center text-sm ">
          <ul className="text-2xl text-white w-full text-center flex flex-wrap justify-center items-stretch ">
            {links.map((link, index) => (
              <MenuItemDrop className={`w-1/4`} key={index} link={link} />
            ))}
          </ul>
          {/* <div className="w-full md:w-1/3 text-center md:text-right"> */}
          {/* <!-- extra links --> */}
          {/* </div> */}
        </div>
      </nav>
    )
  }
  return (
    <nav className="w-full">
      <ul className="h-16 text-base w-full text-center flex flex-wrap justify-center items-center ">
        {links.slice(0, 2).map((link, index) => (
          <MenuItemDrop className={`w-1/6`} key={link.id} link={link} />
        ))}

        <Link href="/">
          <img className={`w-16 mx-10`} src={`/images/mengyao/logo.png`} />
        </Link>

        {links.slice(2, 4).map((link, index) => (
          <MenuItemDrop className={`w-1/6`} key={link.id} link={link} />
        ))}
      </ul>
    </nav>
  )
}
