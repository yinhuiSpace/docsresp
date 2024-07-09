export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"lastUpdatedText\":\"更新时间\",\"contributorsText\":\"更新人\",\"notFound\":[\"页面已丢失~\"],\"backToHome\":\"返回首页\",\"prev\":\"上一章\",\"next\":\"下一章\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"分布式\",\"link\":\"/distribute/\"},{\"text\":\"算法\",\"link\":\"/algorithm/\"},{\"text\":\"优秀开源\",\"link\":\"/open/\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/yinhuiSpace/docsresp.git\"}],\"sidebar\":{\"/algorithm/\":[{\"text\":\"力扣h100\",\"collapsible\":true,\"link\":\"/algorithm/leetcodeh100/\",\"prefix\":\"leetcodeh100/\",\"children\":[\"两数之和\",\"盛最多水的容器\",\"三数之和\"]},{\"text\":\"场景题\",\"collapsible\":true,\"link\":\"/algorithm/scene/\",\"prefix\":\"scene/\",\"children\":[\"两数之和\",\"盛最多水的容器\"]}],\"/open/\":[{\"text\":\"flutter\",\"collapsible\":true,\"link\":\"/open/flutter/\",\"prefix\":\"flutter/\",\"children\":[\"两数之和\",\"盛最多水的容器\"]}],\"/distribute/\":[{\"text\":\"多线程并发和锁\",\"collapsible\":true,\"link\":\"/distribute/lock/\",\"prefix\":\"lock/\",\"children\":[\"Mysql的锁\",\"Volatile同步数据\",\"内存屏障\"]},{\"text\":\"消息中间件\",\"collapsible\":true,\"link\":\"/distribute/message/\",\"children\":[\"1/\",\"1/a.md\"]},{\"text\":\"定时任务\",\"collapsible\":true,\"link\":\"/distribute/job/\",\"children\":[\"1/\",\"1/a.md\"]},{\"text\":\"流量控制\",\"collapsible\":true,\"link\":\"/distribute/stream-controll/\",\"children\":[\"1/\",\"1/a.md\"]},{\"text\":\"多级缓存\",\"collapsible\":true,\"link\":\"/distribute/cache/\",\"prefix\":\"cache/\",\"children\":[\"Redis应用场景\"]},{\"text\":\"日志系统\",\"collapsible\":true,\"link\":\"/distribute/log/\",\"children\":[\"1/\",\"1/a.md\"]},{\"text\":\"一致性算法\",\"collapsible\":true,\"link\":\"/distribute/consistence/\",\"children\":[\"1/\",\"1/a.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
