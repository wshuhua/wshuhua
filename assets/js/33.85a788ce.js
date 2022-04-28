(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{484:function(e,t,a){"use strict";a.r(t);var n=a(28),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("几种模块方式：")]),e._v(" "),a("ul",[a("li",[e._v("ES模块：ES模块是ECMAScript2015（ES6）语言规范的一部分，每一个（包含export/import的）JavaScript文件都是一个模块，在模块中定义的变量的作用域被限制在了文件中。")])]),e._v(" "),a("p",[e._v("babel 转 ES Module 例子：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import Select from './Select';\nimport Option from './Option';\nimport OptGroup from './OptGroup';\nexport { Option, OptGroup };\n")])])]),a("p",[e._v("转换后:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('var _Select = _interopRequireDefault(require("./Select"));\nvar _Option = _interopRequireDefault(require("./Option"));\nvar _OptGroup = _interopRequireDefault(require("./OptGroup"));\nvar _default = _Select.default;\nexports.default = _default;\n')])])]),a("ul",[a("li",[e._v("CommonJS：在JavaScript只能编写网页应用的时候，CommonJS提供了一些API，能够让JavaScript编写不同的JavaScript解释器和主机运行环境的程序。CommonJS一般用于服务端（Node.js）。CommonJS的一个模块就是一个脚本文件。require 命令第一次加载该脚本时，就会执行整个脚本，然后在内存中生成一个对象。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{\n  id: '...', // 模块名\n  exports: { ... }, // 该模块导出的接口\n  loaded: true, // 表示模块是否加载完毕\n  ...\n}\n// 需要用到这个模块时，就会到exports属性上取值。即使再次执行require命令，也不会再次执行该模块，而是到缓存中取值\n")])])]),a("p",[e._v("CommonJS是同步加载模块,所有的模块都放在本地硬盘。等待模块时间就是硬盘读取文件时间，很小。对于浏览器而言，它需要从服务器加载模块，涉及到网速，代理等原因，一旦等待时间过长，浏览器处于”假死”状态，所以不适合浏览器使用。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("exports.add = function(a, b) {\n  return a + b;\n}\n\nvar math = require('math');\nmath.add(2, 3); // 5\n")])])]),a("ul",[a("li",[e._v("AMD：全称：Asynchronous Module Definition，即“异步模块定义”，采用异步方式加载模块，模块的加载不影响它后面语句的运行。这里异步指的是不堵塞浏览器其他任务（dom构建，css渲染等），而加载内部是同步的（加载完模块后立即执行回调）。AMD采用require命令加载模块，但是不同于CommonJS，它要求两个参数：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("require([module], callback);\n")])])]),a("ul",[a("li"),e._v(" "),a("li",[e._v("callback: 回调函数中参数对应数组中的成员（模块）")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("require(['math'], function(math) {\n  math.add(2, 3);\n})\n")])])]),a("p",[e._v("模块书写必须使用特定的define()函数来定义")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("define(function() {\n  var add = function(x, y) {\n    return x + y;\n  }\n\n  return  {\n    add: add\n  }\n})\n\n加载方式： \n\n")])])]),a("p",[e._v("require(['math'], function(math) {\nalert(math.add(1, 1));\n})")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),a("ul",[a("li",[e._v("UMD：（Universal Module Definition 通用模块定义）是一种模式，提供对当今最流行的脚本加载器的兼容。UMD主要支持的是AMD和CommonJS")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(function (root, factory) {\n    if (typeof define === 'function' && define.amd) {\n        // AMD\n        define(['jquery', 'underscore'], factory);\n    } else if (typeof exports === 'object') {\n        // Node, CommonJS之类的\n        module.exports = factory(require('jquery'), require('underscore'));\n    } else {\n        // 浏览器全局变量(root 即 window)\n        root.returnExports = factory(root.jQuery, root._);\n    }\n\n}(this, function ($, _) {\n    // 方法\n    function a(){}; // 私有方法，因为它没被返回 (见下面)\n    function b(){}; // 公共方法，因为被返回了\n    function c(){}; // 公共方法，因为被返回了\n    // 暴露公共方法\n    return {\n        b: b,\n        c: c\n    }\n}));\n")])])]),a("ul",[a("li",[e._v("SystemJS：")])]),e._v(" "),a("p",[e._v("SystemJS是可配置的模块加载器。使用System.register方法注册模块，使用System.import方法导入模块。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('System.register(["./mod"], function (exports_1) {\n  var mod_1;\n  var t;\n  return {\n    setters: [\n      function (mod_1_1) {\n        mod_1 = mod_1_1;\n      },\n    ],\n    execute: function () {\n      exports_1("t", (t = mod_1.something + 1));\n    },\n  };\n});\n\ndeclare const System: any;\nimport { ZipCodeValidator as Zip } from "./ZipCodeValidator";\nif (needZipValidation) {\n  System.import("./ZipCodeValidator").then((ZipCodeValidator: typeof Zip) => {\n    var x = new ZipCodeValidator();\n    if (x.isAcceptable("...")) {\n      /* ... */\n    }\n  });\n}\n')])])]),a("h3",{attrs:{id:"普通模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通模块"}},[e._v("#")]),e._v(" 普通模块")]),e._v(" "),a("p",[e._v("TypeScript模块和ES模块基本一样，只是它可以导出ES模块中没有的一些东西，比如类型别名和接口")]),e._v(" "),a("h3",{attrs:{id:"环境模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境模块"}},[e._v("#")]),e._v(" 环境模块")]),e._v(" "),a("p",[e._v("环境模块和普通模块不同，环境模块中声明的内容是全局的，环境模块（以及环境命名空间）的声明都不能使用export导出，也不能使用任何import ...语句，否则环境模块就会失效。根据这个问答，可以使用import()方法动态地在环境模块中导入其他模块。")]),e._v(" "),a("p",[e._v("declare一般用于声明外部模块")]),e._v(" "),a("h3",{attrs:{id:"通配符模块声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通配符模块声明"}},[e._v("#")]),e._v(" 通配符模块声明")]),e._v(" "),a("p",[e._v("在TS中没有办法使用非代码资源，例如图片、视频等")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('declare moudle "*.png";\n')])])]),a("h3",{attrs:{id:"命名空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名空间"}},[e._v("#")]),e._v(" 命名空间")]),e._v(" "),a("ul",[a("li",[e._v("直接使用时，注意会报错：命名空间没有被标记为仅声明类型。 非声明性命名空间仅在Babel中实验支持。所以我们需要安装一个插件：@babel/plugin-transform-typescript。")])]),e._v(" "),a("p",[e._v("在.babelrc.js 加上")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('module.exports = {\n  plugins: [\n    ["@babel/plugin-transform-typescript", {"allowNamespaces": true}] // allowNamespaces表示允许使用命名空间。\n  ],\n};\n')])])]),a("ul",[a("li",[e._v("eslint 报错： ES2015 module syntax is preferred over custom TypeScript modules and namespaces  @typescript-eslint/no-namespace")])]),e._v(" "),a("p",[e._v("在.eslintrc.js 关掉类型检查")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rules: {\n  '@typescript-eslint/no-namespace': 'off'\n},\n")])])]),a("h3",{attrs:{id:"三斜杠指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三斜杠指令"}},[e._v("#")]),e._v(" 三斜杠指令")]),e._v(" "),a("ul",[a("li",[e._v("三斜杠指令是包含单个 XML 标记的单行注释。注释的内容用作编译器指令")]),e._v(" "),a("li",[e._v("三斜杠指令仅在其包含文件的顶部有效。三斜杠指令前只能有单行或多行注释，包括其他三斜杠指令。如果在语句或声明之后遇到它们，它们将被视为常规单行注释，并且没有特殊含义")]),e._v(" "),a("li",[e._v("作用：用作文件之间依赖关系的声明，跨文件进行分割")]),e._v(" "),a("li",[e._v("注意：需要关掉检查'@typescript-eslint/triple-slash-reference': 'off'")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('/// <reference path="..." />\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);