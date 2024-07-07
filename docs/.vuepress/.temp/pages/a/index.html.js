import comp from "C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/a/index.html.vue"
const data = JSON.parse("{\"path\":\"/a/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1720258666000,\"contributors\":[{\"name\":\"yinhuiSpace\",\"email\":\"2705696192@qq.com\",\"commits\":1}]},\"filePathRelative\":\"a/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
