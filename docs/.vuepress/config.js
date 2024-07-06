import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',

    title: '知识库',
    description: '知识库文章',
    base: '/docsresp',
    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',

        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
              text:'开始',
              link: '/a/'
            },
            {
                text:'分布式',
                link: '/distribute/'
            },
            {
                text:'算法',
                link: '/algorithm/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/yinhuiSpace/docsresp.git'
            }
        ],

        // 可折叠的侧边栏
        sidebar: {
            '/a/': [
                {
                    text: 'VuePress Reference',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/a/1/',
                    children:['1/','1/a.md']
                },
                {
                    text: 'Bundlers Reference',
                    collapsible: true,
                    // 前缀可以是相对路径，等同于 `prefix: /reference/bundler/`
                    link: '/a/2/',
                    children: [
                        {
                            text: '字1',
                            link: ''
                        },
                        {
                            text: '子2',
                            link: 'c'
                        }
                    ],
                },
            ],
            '/algorithm/': [
                {
                    text: 'LeetCode Hot100',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/algorithm/leetcodeh100/',
                    children:['leetcodeh100/a.md']
                }
            ],
            '/distribute/': [
                {
                    text: '多线程并发和锁',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/distribute/lock/',
                    children:['lock/Mysql的锁.md']
                },
                {
                    text: '消息中间件',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/a/1/',
                    children:['1/','1/a.md']
                },
                {
                    text: '定时任务',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/a/1/',
                    children:['1/','1/a.md']
                },
                {
                    text: '流量控制',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/a/1/',
                    children:['1/','1/a.md']
                },
                {
                    text: '多级缓存',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/a/1/',
                    children:['1/','1/a.md']
                },
                {
                    text: '日志系统',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/a/1/',
                    children:['1/','1/a.md']
                },
                {
                    text: '一致性算法',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/a/1/',
                    children:['1/','1/a.md']
                },
            ],
        },
    }),

    bundler: viteBundler(),
})
