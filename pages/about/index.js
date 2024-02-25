import { getGlobalData } from '@/lib/notion/getNotionData'
import { useEffect } from 'react'
import { useGlobal } from '@/lib/global'
import BLOG from '@/blog.config'
import { useRouter } from 'next/router'
import { getLayoutByTheme } from '@/themes/theme'
import { isBrowser } from '@/lib/utils'
import { formatDateFmt } from '@/lib/formatDate'
import { siteConfig } from '@/lib/config'

const AboutIndex = props => {
  const { siteInfo } = props
  const { locale } = useGlobal()

  // 根据页面路径加载不同Layout文件
  const Layout = getLayoutByTheme({ theme: siteConfig('THEME'), router: useRouter() })

  useEffect(() => {
    if (isBrowser) {
      const anchor = window.location.hash
      if (anchor) {
        setTimeout(() => {
          const anchorElement = document.getElementById(anchor.substring(1))
          if (anchorElement) {
            anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
          }
        }, 300)
      }
    }
  }, [])

  const meta = {
    title: `${locale.NAV.ARCHIVE} | ${siteConfig('TITLE')}`,
    description: siteConfig('DESCRIPTION'),
    image: siteInfo?.pageCover,
    slug: 'archive',
    type: 'website'
  }

  props = { ...props, meta }
  console.log("🚀 ~ file: index.js:41 ~ AboutIndex ~ props:", props)

  return <Layout {...props} />
}

export async function getStaticProps() {
  const props = await getGlobalData({ from: 'about-index' })
  console.log("🚀 ~ file: index.js:47 ~ getStaticProps ~ props:", props)
  // 处理分页
  props.posts = props.allPages?.filter(page => page.type === 'Post' && page.status === 'Published')
  delete props.allPages

  const postsSortByDate = Object.create(props.posts)

  postsSortByDate.sort((a, b) => {
    return b?.publishDate - a?.publishDate
  })

  const archivePosts = {}

  postsSortByDate.forEach(post => {
    const date = formatDateFmt(post.publishDate, 'yyyy-MM')
    if (archivePosts[date]) {
      archivePosts[date].push(post)
    } else {
      archivePosts[date] = [post]
    }
  })

  props.archivePosts = archivePosts
  delete props.allPages

  return {
    props,
    revalidate: parseInt(BLOG.NEXT_REVALIDATE_SECOND)
  }
}

export default AboutIndex
