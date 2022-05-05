(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{477:function(t,e,s){"use strict";s.r(e);var a=s(28),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"_01-单线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-单线程"}},[t._v("#")]),t._v(" 01. 单线程")]),t._v(" "),s("p",[t._v("在java/php 等服务器语言中，会为每一个客户端连接创建一个新的线程。而每个线程需要耗费大约2MB内存。也就是说理论上，一个8GB内存的服务器可以同时连接的最大用户数为4000个左右。")]),t._v(" "),s("p",[t._v("而node不为每个客户连接创建一个新的线程，而是通过一个内部事件，通过"),s("code",[t._v("非阻塞I/O，事件驱动机制")]),t._v("，让node在宏观上也是并行的，一个8GB内存的服务器，可以同时处理超过4万用户的连接。单线程带来的好处还有，操作系统完全不再有线程创建、销毁的时间开销。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/node/node%E8%BF%9B%E7%A8%8B.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_02-事件与回调函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-事件与回调函数"}},[t._v("#")]),t._v(" 02. 事件与回调函数")]),t._v(" "),s("p",[t._v("在Node中，客户端请求建立连接，提交数据等行为，会触发响应的事件；在每一个时刻，只能执行一个事件回调函数，但是在执行一个事件回调函数中途，可以转而处理其他事件（比如，新用户连接），然后返回继续执行原事件的回调函数，这种处理机制，称为“事件环”机制。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/node/event.png",alt:""}})]),t._v(" "),s("p",[t._v("事件循环操作顺序的简化概览")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("   ┌───────────────────────────┐\n┌─>│           timers          │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │     pending callbacks     │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │       idle, prepare       │\n│  └─────────────┬─────────────┘      ┌───────────────┐\n│  ┌─────────────┴─────────────┐      │   incoming:   │\n│  │           poll            │<─────┤  connections, │\n│  └─────────────┬─────────────┘      │   data, etc.  │\n│  ┌─────────────┴─────────────┐      └───────────────┘\n│  │           check           │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n└──┤      close callbacks      │\n   └───────────────────────────┘\n")])])]),s("ul",[s("li",[t._v("timers: 这个阶段执行timer（setTimeout、setInterval）的回调")]),t._v(" "),s("li",[t._v("I/O callbacks 阶段：执行一些系统调用错误，比如网络通信的错误回调")]),t._v(" "),s("li",[t._v("idle, prepare 阶段：仅node内部使用")]),t._v(" "),s("li",[t._v("poll 阶段：回到 timer 阶段执行回调，执行 I/O 回调")]),t._v(" "),s("li",[t._v("check： setImmediate()回调在这里被调用，setTimeout会有4ms的延迟，没有setImmediate的及时")]),t._v(" "),s("li",[t._v("close callbacks 阶段：执行 socket 的 close 事件回调")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("每个盒子将被称为事件循环的一个“阶段”。\n每个阶段都有一个 "),s("code",[t._v("FIFO")]),t._v(" 队列要执行的回调。虽然每个阶段都有自己的特殊性，但通常情况下，当事件循环进入给定阶段时，它会执行特定于该阶段的任何操作，然后在该阶段的队列中执行回调，直到队列耗尽或最大回调次数已执行。当队列耗尽或达到回调限制时，事件循环将进入下一阶段，依此类推。")]),t._v(" "),s("p",[t._v("由于这些操作中的任何一个都可能调度更多操作，并且在轮询阶段处理的新事件由内核排队，因此轮询事件可以在处理轮询事件时排队。因此，长时间运行的回调可以允许轮询阶段运行的时间比计时器的阈值长得多。")])]),t._v(" "),s("h3",{attrs:{id:"_03-非阻塞i-o"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_03-非阻塞i-o"}},[t._v("#")]),t._v(" 03. 非阻塞I/O")]),t._v(" "),s("p",[t._v("一般单线程处理机制中，在执行了访问数据库代码之后，整个线程都将暂停下来，等待数据库返回结果，才能执行后面的代码。也就是说，I/O阻塞了代码的执行，极大地降低了程序的执行效率。")]),t._v(" "),s("p",[t._v("Node.js中采用了"),s("code",[t._v("非阻塞型I/O机制")]),t._v("，因此在执行了访问数据库的代码之后，将立即转而执行其后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率。")]),t._v(" "),s("p",[t._v("当某个I/O执行完毕时，将以事件形式通知执行I/O操作的线程，线程执行这个事件的回调函数。为了处理异步I/O，线程必须有事件循环，不断的检查有没有未处理的事件，依次予以处理。")])])}),[],!1,null,null,null);e.default=n.exports}}]);