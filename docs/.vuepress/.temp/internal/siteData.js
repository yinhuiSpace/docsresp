export const siteData = JSON.parse("{\"base\":\"/docsresp/\",\"lang\":\"zh-CN\",\"title\":\"知识库\",\"description\":\"知识库文章\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"VuePress\",\"description\":\"Vue 驱动的静态网站生成器\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"VuePress\",\"description\":\"Vue 驱动的静态网站生成器\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
