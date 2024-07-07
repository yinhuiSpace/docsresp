import comp from "C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/a/1/a.html.vue"
const data = JSON.parse("{\"path\":\"/a/1/a.html\",\"title\":\"1\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1720258666000,\"contributors\":[{\"name\":\"yinhuiSpace\",\"email\":\"2705696192@qq.com\",\"commits\":1}]},\"filePathRelative\":\"a/1/a.md\"}")
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
