/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    #my-home {
      height: 100vh;
      width: 100vw;
    }
    // 底色
    .dark body{
        background-color: black;
    }
    

  `}</style>
}

export { Style }
