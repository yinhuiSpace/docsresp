import comp from "C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/open/index.html.vue"
const data = JSON.parse("{\"path\":\"/open/\",\"title\":\"优秀开源项目\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1720329895000,\"contributors\":[{\"name\":\"yinhuiSpace\",\"email\":\"2705696192@qq.com\",\"commits\":1}]},\"filePathRelative\":\"open/README.md\"}")
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
