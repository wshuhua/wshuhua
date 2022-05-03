(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{484:function(t,e,r){"use strict";r.r(e);var a=r(28),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"_01-16-4-版本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_01-16-4-版本"}},[t._v("#")]),t._v(" 01. 16.4+版本")]),t._v(" "),r("p",[r("img",{attrs:{src:"/images/react/16.4+%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png",alt:""}})]),t._v(" "),r("h4",{attrs:{id:"react-生命周期分为三种状态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-生命周期分为三种状态"}},[t._v("#")]),t._v(" React 生命周期分为三种状态")]),t._v(" "),r("ol",[r("li",[t._v("挂载")]),t._v(" "),r("li",[t._v("更新")]),t._v(" "),r("li",[t._v("销毁")])]),t._v(" "),r("h4",{attrs:{id:"挂载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#挂载"}},[t._v("#")]),t._v(" 挂载")]),t._v(" "),r("h5",{attrs:{id:"_01-constructor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_01-constructor"}},[t._v("#")]),t._v(" 01. constructor():")]),t._v(" "),r("p",[t._v("在这个阶段，会获取到外层传递的props数据，这里进行组件初始化的工作，内部state的定义，和组件本身逻辑的初始化。只在组件创建时执行一次，其后不再执行。")]),t._v(" "),r("h4",{attrs:{id:"_02-static-getderivedstatefromprops-nextprops-prevstate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_02-static-getderivedstatefromprops-nextprops-prevstate"}},[t._v("#")]),t._v(" 02. static getDerivedStateFromProps(nextProps, prevState)：")]),t._v(" "),r("p",[t._v("它是一个静态方法，在这里不能调用this，开发者使用时不能写出副作用的代码。通过参数提供的nextProps以及prevState来进行判断，根据新传入的props来映射到state，保证了 state 和 props 之间的简单关系以及不需要处理第一次渲染时 prevProps 为空的情况。\nnextProps：第一个参数是父组件传来的props中的数据\nprevState：第二个参数是本组件state中的数据。")]),t._v(" "),r("p",[t._v("必须return一个对象或null。如果是对象，则会合并到本组件的state中去。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("static getDerivedStateFromProps(nextProps, prevState) {\n    const {type} = nextProps;\n    // 当传入的type发生变化的时候，更新state\n    if (type !== prevState.type) {\n        return {\n            type,\n        };\n    }\n    // 否则，对于state不进行任何操作\n    return null;\n}\n\n")])])]),r("h4",{attrs:{id:"_03-render"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_03-render"}},[t._v("#")]),t._v(" 03. render()：")]),t._v(" "),r("p",[t._v("渲染页面的主要地方，其中可以实现一些操作，但是必须返回一个jsx对象。会反复调用，减少不必要的render()函数调用次数可以实现性能优化。")]),t._v(" "),r("h4",{attrs:{id:"_04-componentdidmount"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_04-componentdidmount"}},[t._v("#")]),t._v(" 04 componentDidMount():")]),t._v(" "),r("p",[t._v("在render之后调用，在这里可以操作更新后的组件DOM")]),t._v(" "),r("h4",{attrs:{id:"组件更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件更新"}},[t._v("#")]),t._v(" 组件更新：")]),t._v(" "),r("p",[t._v("触发组件的更新条件：")]),t._v(" "),r("ol",[r("li",[t._v("本组件自身调用setState，会触发re-render（重新渲染）。")]),t._v(" "),r("li",[t._v("父组件触发re-render，子组件连带着被re-render。")]),t._v(" "),r("li",[t._v("props改变了，会触发本组件re-render。")])]),t._v(" "),r("h5",{attrs:{id:"_01-static-getderivedstatefromprops"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_01-static-getderivedstatefromprops"}},[t._v("#")]),t._v(" 01. static getDerivedStateFromProps()")]),t._v(" "),r("p",[t._v("与组件创建时一样操作。")]),t._v(" "),r("h4",{attrs:{id:"_02-shouldcomponentupdate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_02-shouldcomponentupdate"}},[t._v("#")]),t._v(" 02. shouldComponentUpdate()：")]),t._v(" "),r("p",[t._v("主要用来对reacr进行性能优化。返回一个true或false。默认返回true")]),t._v(" "),r("ul",[r("li",[t._v("第一个参数为nextProps: 马上要生效的props值，")]),t._v(" "),r("li",[t._v("第二个参数为nextState：马上要生效的state值。获取现在的值为this指针。\nreturn false; 就不会向下执行，也就减少了render次数，优化了性能。")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("PureComponent比较props中的所有属性，优先决定当前组件是否需要re-render。\n但是：PureComponent只做简单的属性值“浅比较”。\n浅比较对于值类型还可以，对于引用类型只会比较它们在内存中的地址是否相同，不会进行深层次的比较。\n若传过来一个地址不同，内容相同的引用类型，PureComponent无法进行深层次比较。")])]),t._v(" "),r("h4",{attrs:{id:"_03-render-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_03-render-2"}},[t._v("#")]),t._v(" 03.render()：")]),t._v(" "),r("p",[t._v("更新阶段渲染，可以根据新的数据渲染组件的dom节点。")]),t._v(" "),r("h4",{attrs:{id:"_04-getsnapshotbeforeupdate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_04-getsnapshotbeforeupdate"}},[t._v("#")]),t._v(" 04. getSnapshotBeforeUpdate():")]),t._v(" "),r("p",[t._v("在该函数中一般执行一些dom操作。记录滚动位置。\n例如：可以滚动的页面，刷新后，需要在本函数中记录其位置，然后传给componentDidUpdate()函数，在更新结束后，回到该位置。\n有两个参数：prevProps,prevState。必须return")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("getSnapshotBeforeUpdate(prevProps, prevState){\n    return { y: 50 }\n}\ncomponentDidUpdate(prevProps, prevState, snapshot){\n    console.log(snapshot) // { y: 50 }\n}\n")])])]),r("h4",{attrs:{id:"_05-componentdidupdate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_05-componentdidupdate"}},[t._v("#")]),t._v(" 05. componentDidUpdate():")]),t._v(" "),r("p",[t._v("该函数主要在更新完成时执行。")]),t._v(" "),r("ul",[r("li",[t._v("prevProps: 第一个参数为prevProps,更新前的props值，")]),t._v(" "),r("li",[t._v("prevState: 第二个参数表示更新前的state中的值。当前值为this.props。")]),t._v(" "),r("li",[t._v("第三个参数为getSnapshotBeforeUpdate()return传过来的数据。")])]),t._v(" "),r("p",[t._v("这个函数表示最新的state对应的dom更新完毕，所以可以对最新的dom做一些自定义操作。")]),t._v(" "),r("h4",{attrs:{id:"组件卸载-componentwillunmount"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件卸载-componentwillunmount"}},[t._v("#")]),t._v(" 组件卸载:componentWillUnmount")]),t._v(" "),r("p",[t._v("在组件被卸载前调用，这里会处理一些数据清理、定时器清理等工作来避免内存泄露。主要用来释放相关的内存空间和资源。")]),t._v(" "),r("h3",{attrs:{id:"_02-16-3-16-0-版本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_02-16-3-16-0-版本"}},[t._v("#")]),t._v(" 02. 16.3-16.0 版本：")]),t._v(" "),r("p",[r("img",{attrs:{src:"/images/react/16.3%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"_03-16-0-版本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_03-16-0-版本"}},[t._v("#")]),t._v(" 03. <16.0 版本：")]),t._v(" "),r("p",[r("img",{attrs:{src:"/images/react/15%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png",alt:""}})]),t._v(" "),r("p",[r("a",{attrs:{href:"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",target:"_blank",rel:"noopener noreferrer"}},[t._v("生命周期"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);