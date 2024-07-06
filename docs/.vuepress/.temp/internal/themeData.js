export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"开始\",\"link\":\"/a/\"},{\"text\":\"分布式\",\"link\":\"/distribute/\"},{\"text\":\"算法\",\"link\":\"/algorithm/\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/yinhuiSpace/docsresp.git\"}],\"sidebar\":{\"/a/\":[{\"text\":\"VuePress Reference\",\"collapsible\":true,\"link\":\"/a/1/\",\"children\":[\"1/\",\"1/a.md\"]},{\"text\":\"Bundlers Reference\",\"collapsible\":true,\"link\":\"/a/2/\",\"children\":[{\"text\":\"字1\",\"link\":\"\"},{\"text\":\"子2\",\"link\":\"c\"}]}],\"/algorithm/\":[{\"text\":\"LeetCode Hot100\",\"collapsible\":true,\"link\":\"/algorithm/leetcodeh100/\",\"children\":[\"leetcodeh100/a.md\"]}],\"/distribute/\":[{\"text\":\"多线程并发和锁\",\"collapsible\":true,\"link\":\"/distribute/lock/\",\"children\":[\"lock/Mysql的锁.md\"]},{\"text\":\"消息中间件\",\"collapsible\":true,\"link\":\"/a/1/\",\"children\":[\"1/\",\"1/a.md\"]},{\"text\":\"定时任务\",\"collapsible\":true,\"link\":\"/a/1/\",\"children\":[\"1/\",\"1/a.md\"]},{\"text\":\"流量控制\",\"collapsible\":true,\"link\":\"/a/1/\",\"children\":[\"1/\",\"1/a.md\"]},{\"text\":\"多级缓存\",\"collapsible\":true,\"link\":\"/a/1/\",\"children\":[\"1/\",\"1/a.md\"]},{\"text\":\"日志系统\",\"collapsible\":true,\"link\":\"/a/1/\",\"children\":[\"1/\",\"1/a.md\"]},{\"text\":\"一致性算法\",\"collapsible\":true,\"link\":\"/a/1/\",\"children\":[\"1/\",\"1/a.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
