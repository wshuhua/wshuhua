(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{505:function(a,t,e){"use strict";e.r(t);var s=e(28),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("http概念")]),a._v(" "),e("p",[a._v("超文本传输协议（Hyper Text Transfer Protocol，HTTP）是一个简单的请求-响应协议，它通常运行在TCP之上。它指定了客户端可能发送给服务器什么样的消息以及得到什么样的响应。")])]),a._v(" "),e("p",[a._v("http是一种超文本传输协议，HTTP 协议用于客户端和服务端之间的通信（通过请求和响应的交换达成通信），请求必定由客户端发出，而服务端回复响应。")]),a._v(" "),e("p",[a._v("http请求主要发生在客户端，请求是由“报文”的形式发送的，请求报文由三部分组成："),e("strong",[a._v("请求行，请求报头和请求正文")]),a._v("。同样HTTP响应部分的响应报文也是三部分组成的"),e("strong",[a._v("状态行、响应报头和响应正文")]),a._v("。")]),a._v(" "),e("p",[a._v("请求报头和响应报头，也就是我们浏览器Network面板中常见的"),e("strong",[a._v("Request Headers")]),a._v(" 和"),e("strong",[a._v("Response Headers")]),a._v("部分，如下：")]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/cache/cache1.jpeg",alt:""}})]),a._v(" "),e("p",[a._v("我们看到报头是由一系列中间用冒号 “:” 分隔的键值对组成，我们称为首部字段，其由首部字段名和字段值构成。如：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Content-Type: text/javascript\n")])])]),e("p",[a._v("以上首部字段名为 Content-Type，首部字段值为 text/javascript，表示报文主体的对象类型。")]),a._v(" "),e("p",[a._v("首部字段又分为四种类型：")]),a._v(" "),e("ul",[e("li",[a._v("通用首部字段（请求报头和响应报头都会用到的首部）")]),a._v(" "),e("li",[a._v("请求首部字段（请求报头用到的首部）")]),a._v(" "),e("li",[a._v("响应首部字段（响应报头用到的首部）")]),a._v(" "),e("li",[a._v("实体首部字段（针对请求报头和响应报头实体部分使用的首部）")])]),a._v(" "),e("p",[a._v("例如通用首部字段包括：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Cache-Control\nConnection\nDate\nPragma\nTrailer\nTransfer-Encoding\nUpgrade\nVia\nWarning\n")])])]),e("p",[a._v("HTTP 缓存可以分为强缓存和协商缓存。")]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/cache/cache2.jpeg",alt:""}})]),a._v(" "),e("p",[a._v("上图中和强缓存有关的首部字段名主要有两个：Expires 和 Cache-Control")]),a._v(" "),e("h2",{attrs:{id:"强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[a._v("#")]),a._v(" 强缓存")]),a._v(" "),e("h4",{attrs:{id:"expires"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[a._v("#")]),a._v(" Expires")]),a._v(" "),e("p",[a._v("Expires 首部字段是 HTTP/1.0 中定义缓存的字段，其给出了缓存过期的绝对时间，即在此时间之后，响应资源过期，属于实体首部字段。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Expires: Wed, 11 May 2022 03:50:47 GMT\n")])])]),e("p",[a._v("上述示例表示该资源将在以上时间之后过期，而在该时间之前浏览器可以直接从浏览器缓中读取数据，无需再次请求服务器。注意这里无需再次请求服务器便是命中了强缓存.")]),a._v(" "),e("p",[a._v("😬 因为 Expires 设置的缓存过期时间是一个绝对时间，所以会受客户端时间的影响而变得不精准。")]),a._v(" "),e("h4",{attrs:{id:"cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[a._v("#")]),a._v(" Cache-Control")]),a._v(" "),e("p",[a._v("Cache-Control 首部字段是 HTTP/1.1 中定义缓存的字段，其用于控制缓存的行为，可以组合使用多种指令，多个指令之间可以通过 “,” 分隔，属于通用首部字段。常用的指令有：max-age、s-maxage、public/private、no-cache/no store 等。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Cache-Control: max-age:3600, s-maxage=3600, public\nCache-Control: no-cache\n")])])]),e("h5",{attrs:{id:"max-age-s-maxage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#max-age-s-maxage"}},[a._v("#")]),a._v(" max-age/s-maxage")]),a._v(" "),e("p",[e("strong",[a._v("max-age")]),a._v(" 指令给出了缓存过期的相对时间，单位为秒数。当其与 Expires 同时出现时，max-age 的优先级更高。但往往为了做向下兼容，两者都会经常出现在响应首部中。")]),a._v(" "),e("p",[a._v("同时 max-age 还可在请求首部中被使用，告知服务器客户端希望接收一个存在时间（age）不大于多少秒的资源。")]),a._v(" "),e("p",[a._v("而 "),e("strong",[a._v("s-maxage")]),a._v("与 max-age 不同之处在于，其只适用于公共缓存服务器，比如资源从源服务器发出后又被中间的代理服务器接收并缓存。")]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/cache/cache3.jpg",alt:""}})]),a._v(" "),e("p",[e("strong",[a._v("当使用 s-maxage 指令后，公共缓存服务器将直接忽略 Expires 和 max-age 指令的值。")])]),a._v(" "),e("h5",{attrs:{id:"public-private"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#public-private"}},[a._v("#")]),a._v(" public/private")]),a._v(" "),e("p",[e("strong",[a._v("public")]),a._v(" 指令表示该资源可以被任何节点缓存（包括客户端和代理服务器），\n而"),e("strong",[a._v("private")]),a._v("指令表示该资源只提供给客户端缓存，代理服务器不会进行缓存。同时当设置了 private 指令后 s-maxage 指令将被忽略。")]),a._v(" "),e("h5",{attrs:{id:"no-cache-no-store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#no-cache-no-store"}},[a._v("#")]),a._v(" no-cache/no-store")]),a._v(" "),e("p",[a._v("需要注意的是这两个指令在请求和响应中都可以使用，两者看上去都代表不缓存，但在响应首部中被使用时， no-store 才是真正的不进行任何缓存")]),a._v(" "),e("p",[a._v("当 no-cache 在请求首部中被使用时，表示告知（代理）服务器不直接使用缓存，要求向源服务器发起请求。\n而当在响应首部中被返回时，表示客户端可以缓存资源，但每次使用缓存资源前都必须先向服务器确认其有效性，这对每次访问都需要确认身份的应用来说很有用。")]),a._v(" "),e("p",[a._v("我们可以在代码里加入 meta 标签的方式来修改资源的请求首部：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<meta http-equiv="Cache-Control" content="no-cache" />\n')])])]),e("h2",{attrs:{id:"协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[a._v("#")]),a._v(" 协商缓存")]),a._v(" "),e("p",[a._v("协商缓存中涉及的主要首部字段名：Last-Modified、If-Modified-Since、Etag、If-None-Match。")]),a._v(" "),e("h4",{attrs:{id:"last-modified-if-modified-since"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since"}},[a._v("#")]),a._v(" Last-Modified/If-Modified-Since")]),a._v(" "),e("p",[a._v("Last-Modified 首部字段顾名思义，代表资源的最后修改时间，其属于响应首部字段。当浏览器第一次接收到服务器返回资源的 Last-Modified 值后，其会把这个值存储起来，并再下次访问该资源时通过携带 If-Modified-Since 请求首部发送给服务器验证该资源有没有过期。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Last-Modified: Fri , 14 May 2021 17:23:13 GMT\nIf-Modified-Since: Fri , 14 May 2021 17:23:13 GMT\n")])])]),e("p",[a._v("如果在 If-Modified-Since 字段指定的时间之后资源发生了更新，那么服务器会将更新的资源发送给浏览器（状态码200）并返回最新的 Last-Modified 值，浏览器收到资源后会更新缓存的 If-Modified-Since 的值。")]),a._v(" "),e("p",[a._v("如果在 If-Modified-Since 字段指定的时间之后资源都没有发生更新，那么服务器会返回状态码 304 Not Modified 的响应。")]),a._v(" "),e("h4",{attrs:{id:"etag-if-none-match"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match"}},[a._v("#")]),a._v(" Etag/If-None-Match")]),a._v(" "),e("p",[e("strong",[a._v("Etag 首部字段用于代表资源的唯一性标识")]),a._v("，服务器会按照指定的规则生成资源的标识，其属于响应首部字段。当资源发生变化时，Etag 的标识也会更新。同样的，当浏览器第一次接收到服务器返回资源的 Etag 值后，其会把这个值存储起来，并在下次访问该资源时通过携带 If-None-Match 请求首部发送给服务器验证该资源有没有过期。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('Etag: "29322-09SpAhH3nXWd8KIVqB10hSSz66"\nIf-None-Match: "29322-09SpAhH3nXWd8KIVqB10hSSz66"\n')])])]),e("p",[a._v("如果服务器发现 If-None-Match 值与 Etag 不一致时，说明服务器上的文件已经被更新，那么服务器会发送更新后的资源给浏览器并返回最新的 Etag 值，浏览器收到资源后会更新缓存的 If-None-Match 的值。")])])}),[],!1,null,null,null);t.default=r.exports}}]);