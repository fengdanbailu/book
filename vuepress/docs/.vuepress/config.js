/*
 * @Author: gm.chen
 * @Date: 2020-08-11 10:41:17
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-08-11 14:41:32
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
			title: 'ke1',
			path: '/teacher/ke1/',
			collapsable: true,
			children: [
				'/teacher/ke1/1/',
				'/teacher/ke1/2/',
			],
		},
		{
			title : 'ke2',
			path : '/teacher/ke2/',
			collapsable: true,
			children : [
				'/teacher/ke2/1/',
				'/teacher/ke2/2/',
			]
		},
		{
			title : 'pc',
			path : '/teacher/pc/',
			collapsable: true,
			children : [
				'/teacher/pc/1/',
				'/teacher/pc/2/',
			]
		},
	],
	'/':[
		{
			title: '主页',
			path: '/web/',
		},
		{
			title: '考点',
			path: '/teacher/',
		},
	],
}


module.exports = {
    themeConfig : {
      search: false,
      sidebar,
      nav: [
        { text: "主页", link: "/web/" },
        { text: "考点", link: "/teacher/" },
        { text: "网道", link: "https://wangdoc.com/" }
      ],
      smoothScroll: true,
    },
    title: '多聊天长知识',
    description: 'collected by gmchen'
  };