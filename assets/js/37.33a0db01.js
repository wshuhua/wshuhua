(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{500:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[t._v("#")]),t._v(" 1. 概念")]),t._v(" "),a("h3",{attrs:{id:"_1-1-什么是路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是路由"}},[t._v("#")]),t._v(" 1.1 什么是路由")]),t._v(" "),a("p",[t._v("建立URL与处理函数之间的对应关系\n主要作用：根据不同的Module和URL返回的内容")]),t._v(" "),a("h3",{attrs:{id:"_1-2-ctx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-ctx"}},[t._v("#")]),t._v(" 1.2 ctx")]),t._v(" "),a("p",[t._v("http上下文: http请求 + http响应")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  request"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'GET'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '/'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    header"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3002")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      connection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'keep-alive'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      'cache-control'"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'max-age="),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      'sec-ch-ua'"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" Not A;Brand"')]),t._v(";v="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"99"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chromium"')]),t._v(";v="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"101"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Google Chrome"')]),t._v(";v="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"101"')]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      'sec-ch-ua-mobile'"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '?"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      'sec-ch-ua-platform'"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"macOS"')]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      'upgrade-insecure-requests'"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      'user-agent'"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'Mozilla/"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v(" (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("537.36")]),t._v(" (KHTML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" like Gecko) Chrome/"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("101.0")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4951.64")]),t._v(" Safari/"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("537.36")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      accept"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'text/html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("application/xhtml+xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("application/xml;q="),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("image/avif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("image/webp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("image/apng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*;q=0.8,application/signed-exchange;v=b3;q=0.9',\n      'sec-fetch-site': 'none',\n      'sec-fetch-mode': 'navigate',\n      'sec-fetch-user': '?1',\n      'sec-fetch-dest': 'document',\n      'accept-encoding': 'gzip, deflate, br',\n      'accept-language': 'en,zh;q=0.9,zh-CN;q=0.8,zh-TW;q=0.7',\n      cookie: '_ga=GA1.1.1476456273.1652003400; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22fbb12fc717094d51862e63adfc69c0da%22%2C%22first_id%22%3A%2217fabdc3342a47-03c78852982006c-37677109-2073600-17fabdc3343143f%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22url%E7%9A%84domain%E8%A7%A3%E6%9E%90%E5%A4%B1%E8%B4%A5%22%2C%22%24latest_search_keyword%22%3A%22url%E7%9A%84domain%E8%A7%A3%E6%9E%90%E5%A4%B1%E8%B4%A5%22%2C%22%24latest_referrer%22%3A%22url%E7%9A%84domain%E8%A7%A3%E6%9E%90%E5%A4%B1%E8%B4%A5%22%7D%2C%22%24device_id%22%3A%2217fabdc3342a47-03c78852982006c-37677109-2073600-17fabdc3343143f%22%7D'\n    }\n  },\n  response: {\n    status: 404,\n    message: 'Not Found',\n    header: [Object: null prototype] {}\n  },\n  app: { subdomainOffset: 2, proxy: false, env: 'development' },\n  originalUrl: '/',\n  req: '<original node req>',\n  res: '<original node res>',\n  socket: '<original node socket>'\n}\n")])])])]),a("h3",{attrs:{id:"_1-3-ctx-request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-ctx-request-body"}},[t._v("#")]),t._v(" 1.3 ctx.request.body")]),t._v(" "),a("p",[t._v("需要借助中间件，解析请求体中对的body参数，挂载到ctx.request.body")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" KoaBody "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'koa-body'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("KoaBody")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);