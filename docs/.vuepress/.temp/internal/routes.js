export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/algorithm/", { loader: () => import(/* webpackChunkName: "algorithm_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/algorithm/index.html.js"), meta: {"title":"算法"} }],
  ["/distribute/", { loader: () => import(/* webpackChunkName: "distribute_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/index.html.js"), meta: {"title":""} }],
  ["/open/", { loader: () => import(/* webpackChunkName: "open_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/open/index.html.js"), meta: {"title":"优秀开源项目"} }],
  ["/algorithm/leetcodeh100/", { loader: () => import(/* webpackChunkName: "algorithm_leetcodeh100_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/algorithm/leetcodeh100/index.html.js"), meta: {"title":"力扣h100"} }],
  ["/algorithm/leetcodeh100/%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html", { loader: () => import(/* webpackChunkName: "algorithm_leetcodeh100_两数之和.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/algorithm/leetcodeh100/两数之和.html.js"), meta: {"title":"两数之和"} }],
  ["/algorithm/leetcodeh100/%E7%9B%9B%E6%9C%80%E5%A4%9A%E6%B0%B4%E7%9A%84%E5%AE%B9%E5%99%A8.html", { loader: () => import(/* webpackChunkName: "algorithm_leetcodeh100_盛最多水的容器.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/algorithm/leetcodeh100/盛最多水的容器.html.js"), meta: {"title":"盛最多水的容器"} }],
  ["/distribute/cache/", { loader: () => import(/* webpackChunkName: "distribute_cache_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/cache/index.html.js"), meta: {"title":""} }],
  ["/distribute/consistence/", { loader: () => import(/* webpackChunkName: "distribute_consistence_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/consistence/index.html.js"), meta: {"title":""} }],
  ["/distribute/job/", { loader: () => import(/* webpackChunkName: "distribute_job_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/job/index.html.js"), meta: {"title":""} }],
  ["/distribute/lock/Mysql%E7%9A%84%E9%94%81.html", { loader: () => import(/* webpackChunkName: "distribute_lock_Mysql的锁.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/lock/Mysql的锁.html.js"), meta: {"title":"Mysql的锁"} }],
  ["/distribute/lock/", { loader: () => import(/* webpackChunkName: "distribute_lock_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/lock/index.html.js"), meta: {"title":""} }],
  ["/distribute/lock/Volatile%E5%90%8C%E6%AD%A5%E6%95%B0%E6%8D%AE.html", { loader: () => import(/* webpackChunkName: "distribute_lock_Volatile同步数据.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/lock/Volatile同步数据.html.js"), meta: {"title":"Volatile同步数据"} }],
  ["/distribute/lock/%E5%86%85%E5%AD%98%E5%B1%8F%E9%9A%9C.html", { loader: () => import(/* webpackChunkName: "distribute_lock_内存屏障.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/lock/内存屏障.html.js"), meta: {"title":"内存屏障"} }],
  ["/distribute/message/", { loader: () => import(/* webpackChunkName: "distribute_message_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/message/index.html.js"), meta: {"title":""} }],
  ["/distribute/log/", { loader: () => import(/* webpackChunkName: "distribute_log_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/log/index.html.js"), meta: {"title":""} }],
  ["/distribute/stream-controll/", { loader: () => import(/* webpackChunkName: "distribute_stream-controll_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/stream-controll/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
