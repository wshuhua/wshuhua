(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{483:function(t,a,e){"use strict";e.r(a);var s=e(28),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"联合类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联合类型"}},[t._v("#")]),t._v(" 联合类型")]),t._v(" "),e("ul",[e("li",[t._v("联合类型表示一个值的类型可能是多个类型中的一种，使用【｜】来间隔每个类型")]),t._v(" "),e("li",[t._v("一个联合类型只能访问所有类型都有的成员。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("interface A1 {\n  v1: number;\n  v2: number;\n}\n\ninterface A2 {\n  v1: string;\n  v3: boolean;\n}\n\nfunction a1 (x: A1 | A2): void {\n  x.m1;\n  x.m3; // 报错, 只能确保包含A1 | A2的共有成员\n}\n")])])]),e("h3",{attrs:{id:"交叉类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#交叉类型"}},[t._v("#")]),t._v(" 交叉类型")]),t._v(" "),e("ul",[e("li",[t._v("交叉类型将多个类型合并为一个类型。交叉类型会包含所有类型的成员, 使用【&】来间隔每个类型")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("interface A1 {\n  v1: number;\n  v2: number;\n}\n\ninterface A2 {\n  v1: string;\n  v3: boolean;\n}\n\nfunction a1 (x: A1 & A2): void {\n  x拥有v1，v2，v3 A1，A1所有类型的成员\n}\n")])])]),e("h3",{attrs:{id:"泛型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#泛型"}},[t._v("#")]),t._v(" 泛型")]),t._v(" "),e("ul",[e("li",[t._v("定义包含可复用类型的类型。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/ts/%E6%B3%9B%E5%9E%8B.png",alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("显示指定泛型变量的实际类型")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/ts/%E6%B3%9B%E5%9E%8B3.png",alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("不指定泛型变量的实际类型")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/ts/%E6%B3%9B%E5%9E%8B2.png",alt:""}})]),t._v(" "),e("p",[t._v("常用变量：")]),t._v(" "),e("p",[t._v("T：（type）表示类型")]),t._v(" "),e("p",[t._v("K：（key）表示对象中键的类型")]),t._v(" "),e("p",[t._v("V：（Value）表示对象中值的类型")]),t._v(" "),e("p",[t._v("E：（Element）表示元素类型")]),t._v(" "),e("h3",{attrs:{id:"类型保护"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类型保护"}},[t._v("#")]),t._v(" 类型保护")]),t._v(" "),e("p",[t._v("假设我们确实要访问非共有属性或者方法，可以使用类型断言")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 使用类型断言\n(getAnimal() as Fish).swim();\n(getAnimal() as Bird).fly();\n")])])]),e("p",[t._v("这会导致我们不得不多次使用类型断言，更好的方式是使用类型保护，执行运行时类型检查来保证类型在一定范围内的表达式")]),t._v(" "),e("h4",{attrs:{id:"类型谓词"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类型谓词"}},[t._v("#")]),t._v(" 类型谓词")]),t._v(" "),e("p",[t._v("谓词为 parameterName is Type 这种形式，parameterName 必须是来自于当前函数签名里的一个参数名")]),t._v(" "),e("h4",{attrs:{id:"in运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#in运算符"}},[t._v("#")]),t._v(" in运算符")]),t._v(" "),e("p",[t._v("n in x表达式中，n是一个字符串字面量或字符串字面量类型，x是一个联合类型。")]),t._v(" "),e("h4",{attrs:{id:"typeof-类型保护"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typeof-类型保护"}},[t._v("#")]),t._v(" typeof 类型保护")]),t._v(" "),e("p",[t._v('如果联合类型中的类型都是原始类型的话，可以直接使用typeof来判断。typeof v === "typename"，typename必需是number、string、boolean、或者symbol。只有通过 ===, !== 比较时，才会被识别为类型保护')]),t._v(" "),e("h4",{attrs:{id:"instanceof-类型保护"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#instanceof-类型保护"}},[t._v("#")]),t._v(" instanceof 类型保护")]),t._v(" "),e("p",[t._v("instanceof的右边需要是一个构造函数，TypeScript会按以下顺序缩小范围：")]),t._v(" "),e("ul",[e("li",[t._v("构造函数的prototype属性的类型（如果构造函数的prototype属性的类型不为any）。")]),t._v(" "),e("li",[t._v("类型的构造标志返回的类型的并集。")])]),t._v(" "),e("h3",{attrs:{id:"类型推断"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类型推断"}},[t._v("#")]),t._v(" 类型推断")]),t._v(" "),e("ul",[e("li",[t._v("当变量的声明和初始值在同一行，可以省略变量类型的声明")]),t._v(" "),e("li",[t._v("类型推断不出来，就需要类型注解协助")])])])}),[],!1,null,null,null);a.default=n.exports}}]);