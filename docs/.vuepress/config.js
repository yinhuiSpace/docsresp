import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',

    title: '知识库',
    description: '知识库文章',
    base: '/docsresp',

    // plugins: [
    //     commentPlugin({
    //         provider: 'Giscus',
    //         repo: 'yinhuiSpace/giscusresp',
    //         repoId: 'R_kgDOMTAolQ',
    //         category: 'Announcements',
    //         categoryId: 'DIC_kwDOMTAolc4Cgn3e'
    //     }),
    // ],

    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: 'VuePress',
            description: 'Vue 驱动的静态网站生成器',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'VuePress',
            description: 'Vue 驱动的静态网站生成器',
        },
    },
    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',
        lastUpdatedText: '更新时间',
        contributorsText: '更新人',

        notFound:[
            '页面已丢失~'
        ],
        backToHome:'返回首页',

        prev: '上一章',
        next: '下一章',

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
                text:'赞助作者',
                link: '/sponsor/'
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
                        '盛最多水的容器',
                        '三数之和'

                    ]
                },
                {
                    text: '场景题',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/algorithm/scene/',
                    prefix: 'scene/',
                    children:[
                        '两数之和',
                        '盛最多水的容器'

                    ]
                }
            ],
            '/open/': [
                {
                    text: 'flutter',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    link: '/open/flutter/',
                    prefix: 'flutter/',
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
                    prefix: 'cache/',
                    children:[
                        'Redis应用场景'
                    ]
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
