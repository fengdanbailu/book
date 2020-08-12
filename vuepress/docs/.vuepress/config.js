/*
 * @Author: gm.chen
 * @Date: 2020-08-11 10:41:17
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-08-12 21:57:12
 * @Description: file content
 * @FilePath: /book/vuepress/docs/.vuepress/config.js
 */
const sidebar =  {
	'/web/' :  [
		{
			title: '编程基础',
			path: '/web/basic/',
			collapsable: true,
			children: [
				'/web/basic/html/',
				'/web/basic/css/',
				'/web/basic/javascript/',
				'/web/basic/es6/',
			],
		},
		{
			title: '开发工具',
			path: '/web/tools/',
			collapsable: true,
			children: [
				'/web/tools/editor1/',
				'/web/tools/editor2/',
				'/web/tools/editor3/',
				'/web/tools/debug1/',
				'/web/tools/debug2/',
				'/web/tools/debug3/',
				'/web/tools/ps1/'
			],
		},
		{
			title : '类库框架',
			path : '/web/library/',
			collapsable: true,
			children : [
				'/web/library/tools1/',
				'/web/library/tools2/',
				'/web/library/framework1/',
				'/web/library/framework2/'
			]
		},
		{
			title : '知识进阶',
			path : '/web/knowledge/',
			collapsable: true,
			children : [
				'/web/knowledge/net1/',
				'/web/knowledge/net2/',
				'/web/knowledge/xn1/',
				'/web/knowledge/security1/',
				'/web/knowledge/browser1/',
			]
		},
		{
			title : '工程开发',
			path : '/web/project/',
			collapsable: true,
			children : [
				'/web/project/module1/',
				'/web/project/version1/',
				'/web/project/dependent1/',
				'/web/project/enhance1/',
				'/web/project/build1/',
				'/web/project/convert1/',
				'/web/project/cicd1/',
				'/web/project/quality1/'
			]
		},
		{
			title : '编程思想',
			path : '/web/idea/',
			collapsable: true,
			children : [
				'/web/idea/pattern1/',
				'/web/idea/framework1/',
				'/web/idea/paradigm1/',
				'/web/idea/programe1/'
			]
		},
		{
			title : '领域分支',
			path : '/web/domain/',
			collapsable: true,
			children : [
				'/web/domain/visualization1/',
				'/web/domain/web1/',
				'/web/domain/game1/',
				'/web/domain/portable1/'
			]
		},
		{
			title : '社区发展',
			path : '/web/community/',
			collapsable: true,
			children : [
				'/web/community/ssr/',
				'/web/community/frontend/',
				'/web/community/microservice/',
				'/web/community/serverless/',
				'/web/community/webassembly/',
				'/web/community/lesscode/'
			]
		},
		{
			title : '计算机基础',
			path : '/web/computer/',
			collapsable: true,
			children : [
				'/web/computer/compiler/',
				'/web/computer/structure/',
				'/web/computer/algorithm/',
				'/web/computer/os/',
				'/web/computer/net/'
			]
		},
		{
			title : '后端知识',
			path : '/web/backend/',
			collapsable: true,
			children : [
				'/web/backend/node/',
				'/web/backend/language/',
				'/web/backend/netservice/',
				'/web/backend/database/',
				'/web/backend/cache/'
			]
		},
		{
			title : '软技能',
			path : '/web/soft/',
			collapsable: true,
			children : [
				'/web/soft/learn/',
				'/web/soft/technology/',
				'/web/soft/cooperation/',
				'/web/soft/manager/',
				'/web/soft/framework/'
			]
		}
	],
	'/teacher/' :  [
		{
			title: '综合素质',
			path: '/teacher/ke1/',
			collapsable: true,
			children: [
				'/teacher/ke1/1/',
				'/teacher/ke1/2/',
				'/teacher/ke1/3/',
				'/teacher/ke1/4/',
				'/teacher/ke1/5/'
			],
		},
		{
			title : '教育知识与能力',
			path : '/teacher/ke2/',
			collapsable: true,
			children : [
				'/teacher/ke2/1/',
				'/teacher/ke2/2/',
				'/teacher/ke2/3/',
				'/teacher/ke2/4/',
				'/teacher/ke2/5/',
				'/teacher/ke2/6/',
				'/teacher/ke2/7/',
				'/teacher/ke2/8/'
			]
		},
		{
			title : '信息技术学科知识与教学能力',
			path : '/teacher/pc/',
			collapsable: true,
			children : [
				'/teacher/pc/1/',
				'/teacher/pc/2/',
				'/teacher/pc/3/',
				'/teacher/pc/4/'
			]
		},
	],
	'/':[
		{
			title: '大前端',
			path: '/web/',
		},
		{
			title: '教师证',
			path: '/teacher/',
		},
	],
}


module.exports = {
    themeConfig : {
      search: true,
      sidebar,
      nav: [
        { text: "大前端", link: "/web/" },
		{ text: "教师证", link: "/teacher/" },
		{
			text: "外链",
			items: [
				{ text: "网道", link: "https://wangdoc.com/" },
				{ text: "VUE", link: "https://cn.vuejs.org/v2/guide/" }
			]
		}
      ],
      smoothScroll: true,
    },
    title: '多聊天长知识',
    description: 'collected by gmchen'
  };