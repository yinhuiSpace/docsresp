export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/a/", { loader: () => import(/* webpackChunkName: "a_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/a/index.html.js"), meta: {"title":""} }],
  ["/algorithm/", { loader: () => import(/* webpackChunkName: "algorithm_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/algorithm/index.html.js"), meta: {"title":"算法"} }],
  ["/b/a.html", { loader: () => import(/* webpackChunkName: "b_a.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/b/a.html.js"), meta: {"title":""} }],
  ["/b/", { loader: () => import(/* webpackChunkName: "b_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/b/index.html.js"), meta: {"title":""} }],
  ["/a/1/a.html", { loader: () => import(/* webpackChunkName: "a_1_a.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/a/1/a.html.js"), meta: {"title":"1"} }],
  ["/a/1/", { loader: () => import(/* webpackChunkName: "a_1_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/a/1/index.html.js"), meta: {"title":"1"} }],
  ["/algorithm/leetcodeh100/", { loader: () => import(/* webpackChunkName: "algorithm_leetcodeh100_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/algorithm/leetcodeh100/index.html.js"), meta: {"title":"LeetCode Hot100"} }],
  ["/a/2/c.html", { loader: () => import(/* webpackChunkName: "a_2_c.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/a/2/c.html.js"), meta: {"title":"c"} }],
  ["/a/2/d.html", { loader: () => import(/* webpackChunkName: "a_2_d.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/a/2/d.html.js"), meta: {"title":"d"} }],
  ["/a/2/", { loader: () => import(/* webpackChunkName: "a_2_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/a/2/index.html.js"), meta: {"title":""} }],
  ["/distribute/", { loader: () => import(/* webpackChunkName: "distribute_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/index.html.js"), meta: {"title":""} }],
  ["/distribute/cache/", { loader: () => import(/* webpackChunkName: "distribute_cache_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/cache/index.html.js"), meta: {"title":""} }],
  ["/distribute/consistence/", { loader: () => import(/* webpackChunkName: "distribute_consistence_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/consistence/index.html.js"), meta: {"title":""} }],
  ["/distribute/log/", { loader: () => import(/* webpackChunkName: "distribute_log_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/log/index.html.js"), meta: {"title":""} }],
  ["/distribute/lock/Mysql%E7%9A%84%E9%94%81.html", { loader: () => import(/* webpackChunkName: "distribute_lock_Mysql的锁.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/lock/Mysql的锁.html.js"), meta: {"title":"Mysql的锁"} }],
  ["/distribute/lock/", { loader: () => import(/* webpackChunkName: "distribute_lock_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/lock/index.html.js"), meta: {"title":""} }],
  ["/distribute/job/", { loader: () => import(/* webpackChunkName: "distribute_job_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/job/index.html.js"), meta: {"title":""} }],
  ["/distribute/stream-controll/", { loader: () => import(/* webpackChunkName: "distribute_stream-controll_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/stream-controll/index.html.js"), meta: {"title":""} }],
  ["/distribute/message/", { loader: () => import(/* webpackChunkName: "distribute_message_index.html" */"C:/Users/root/Desktop/docsresp/docs/.vuepress/.temp/pages/distribute/message/index.html.js"), meta: {"title":""} }],
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
