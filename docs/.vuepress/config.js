import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    // lang: 'zh-CN',

    title: '知识库',
    description: '知识库文章',
    base: '/docsresp',

    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'VuePress',
            description: 'Vue 驱动的静态网站生成器',
        },
    },
    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',

        navbar: [
            {
                text: '首页',
                link: '/',
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
                text:'优秀开源',
                link: '/open/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/yinhuiSpace/docsresp.git'
            }
        ],

        // 可折叠的侧边栏
        sidebar: {
            '/algorithm/': [
                {
                    text: '力扣h100',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/algorithm/leetcodeh100/',
                    prefix: 'leetcodeh100/',
                    children:[
                        '两数之和',
                        '盛最多水的容器'

                    ]
                }
            ],
            '/distribute/': [
                {
                    text: '多线程并发和锁',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/distribute/lock/',
                    prefix: 'lock/',
                    children:[
                        'Mysql的锁',
                        'Volatile同步数据',
                        '内存屏障'
                    ]
                },
                {
                    text: '消息中间件',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/distribute/message/',
                    children:['1/','1/a.md']
                },
                {
                    text: '定时任务',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/distribute/job/',
                    children:['1/','1/a.md']
                },
                {
                    text: '流量控制',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/distribute/stream-controll/',
                    children:['1/','1/a.md']
                },
                {
                    text: '多级缓存',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/distribute/cache/',
                    children:['1/','1/a.md']
                },
                {
                    text: '日志系统',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/distribute/log/',
                    children:['1/','1/a.md']
                },
                {
                    text: '一致性算法',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/distribute/consistence/',
                    children:['1/','1/a.md']
                },
            ],
        },
    }),

    bundler: viteBundler(),
})
