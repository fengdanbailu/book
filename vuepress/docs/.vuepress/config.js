/*
 * @Author: gm.chen
 * @Date: 2020-08-11 10:41:17
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-08-11 22:50:59
 * @Description: file content
 * @FilePath: /book/vuepress/docs/.vuepress/config.js
 */
const sidebar =  {
	'/web/' :  [
		{
			title: 'ES6',
			path: '/web/es6/',
			collapsable: true,
			children: [
				'/web/es6/function_extend/',
				'/web/es6/regex_extend/',
			],
		},
		{
			title : 'vue',
			path : '/web/vue/',
			collapsable: true,
			children : [
				'/web/vue/vue-router/',
				'/web/vue/vuex/',
			]
		},
		{
			title : 'javascript',
			path : '/web/javascript/',
			collapsable: true,
			children : [
				'/web/javascript/datatype/',
				'/web/javascript/operator/',
			]
		},
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
        { text: "网道", link: "https://wangdoc.com/" }
      ],
      smoothScroll: true,
    },
    title: '多聊天长知识',
    description: 'collected by gmchen'
  };