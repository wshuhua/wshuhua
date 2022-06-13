(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{485:function(t,a,e){"use strict";e.r(a);var s=e(28),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"_01-单线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01-单线程"}},[t._v("#")]),t._v(" 01. 单线程")]),t._v(" "),e("h4",{attrs:{id:"线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[t._v("#")]),t._v(" 线程")]),t._v(" "),e("p",[t._v("进程Process是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础，进程是线程的容器。进程是资源分配的最小单位。我们启动一个服务、运行一个实例，就是开一个服务进程，例如Node.js 里通过 node app.js 开启一个服务进程，多进程就是进程的复制（fork），fork 出来的每个进程都拥有自己的独立空间地址、数据栈，一个进程无法访问另外一个进程里定义的变量、数据结构，只有建立了 IPC 通信，进程之间才可数据共享。")]),t._v(" "),e("h4",{attrs:{id:"进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),e("p",[t._v("线程是操作系统能够进行运算调度的最小单位，线程是隶属于进程的，被包含于进程之中。一个线程只能隶属于一个进程，但是一个进程是可以拥有多个线程的。")]),t._v(" "),e("h4",{attrs:{id:"单线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[t._v("#")]),t._v(" 单线程")]),t._v(" "),e("p",[e("strong",[t._v("单线程就是一个进程只开一个线程。")])]),t._v(" "),e("p",[t._v("在java/php 等服务器语言中，会为每一个客户端连接创建一个新的线程。而每个线程需要耗费大约2MB内存。也就是说理论上，一个8GB内存的服务器可以同时连接的最大用户数为4000个左右。")]),t._v(" "),e("p",[t._v("而node不为每个客户连接创建一个新的线程，而是通过一个内部事件，通过"),e("code",[t._v("非阻塞I/O，事件驱动机制")]),t._v("，让node在宏观上也是并行的，一个8GB内存的服务器，可以同时处理超过4万用户的连接。单线程带来的好处还有，操作系统完全不再有线程创建、销毁的时间开销。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/node/node%E8%BF%9B%E7%A8%8B.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_02-事件与回调函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_02-事件与回调函数"}},[t._v("#")]),t._v(" 02. 事件与回调函数")]),t._v(" "),e("p",[t._v("在Node中，客户端请求建立连接，提交数据等行为，会触发响应的事件；在每一个时刻，只能执行一个事件回调函数，但是在执行一个事件回调函数中途，可以转而处理其他事件（比如，新用户连接），然后返回继续执行原事件的回调函数，这种处理机制，称为“事件环”机制。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/node/event.png",alt:""}})]),t._v(" "),e("p",[t._v("事件循环操作顺序的简化概览")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   ┌───────────────────────────┐\n┌─>│           timers          │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │     pending callbacks     │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │       idle, prepare       │\n│  └─────────────┬─────────────┘      ┌───────────────┐\n│  ┌─────────────┴─────────────┐      │   incoming:   │\n│  │           poll            │<─────┤  connections, │\n│  └─────────────┬─────────────┘      │   data, etc.  │\n│  ┌─────────────┴─────────────┐      └───────────────┘\n│  │           check           │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n└──┤      close callbacks      │\n   └───────────────────────────┘\n")])])]),e("ul",[e("li",[t._v("timers: 这个阶段执行timer（setTimeout、setInterval）的回调")]),t._v(" "),e("li",[t._v("I/O callbacks 阶段：执行一些系统调用错误，比如网络通信的错误回调")]),t._v(" "),e("li",[t._v("idle, prepare 阶段：仅node内部使用")]),t._v(" "),e("li",[t._v("poll 阶段：回到 timer 阶段执行回调，执行 I/O 回调")]),t._v(" "),e("li",[t._v("check： setImmediate()回调在这里被调用，setTimeout会有4ms的延迟，没有setImmediate的及时")]),t._v(" "),e("li",[t._v("close callbacks 阶段：执行 socket 的 close 事件回调")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("每个盒子将被称为事件循环的一个“阶段”。\n每个阶段都有一个 "),e("code",[t._v("FIFO")]),t._v(" 队列要执行的回调。虽然每个阶段都有自己的特殊性，但通常情况下，当事件循环进入给定阶段时，它会执行特定于该阶段的任何操作，然后在该阶段的队列中执行回调，直到队列耗尽或最大回调次数已执行。当队列耗尽或达到回调限制时，事件循环将进入下一阶段，依此类推。")]),t._v(" "),e("p",[t._v("由于这些操作中的任何一个都可能调度更多操作，并且在轮询阶段处理的新事件由内核排队，因此轮询事件可以在处理轮询事件时排队。因此，长时间运行的回调可以允许轮询阶段运行的时间比计时器的阈值长得多。")])]),t._v(" "),e("h3",{attrs:{id:"_03-非阻塞i-o"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_03-非阻塞i-o"}},[t._v("#")]),t._v(" 03. 非阻塞I/O")]),t._v(" "),e("p",[t._v("一般单线程处理机制中，在执行了访问数据库代码之后，整个线程都将暂停下来，等待数据库返回结果，才能执行后面的代码。也就是说，I/O阻塞了代码的执行，极大地降低了程序的执行效率。")]),t._v(" "),e("p",[t._v("Node.js中采用了"),e("code",[t._v("非阻塞型I/O机制")]),t._v("，因此在执行了访问数据库的代码之后，将立即转而执行其后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率。")]),t._v(" "),e("p",[t._v("当某个I/O执行完毕时，将以事件形式通知执行I/O操作的线程，线程执行这个事件的回调函数。为了处理异步I/O，线程必须有事件循环，不断的检查有没有未处理的事件，依次予以处理。")]),t._v(" "),e("h3",{attrs:{id:"_04-事件循环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_04-事件循环"}},[t._v("#")]),t._v(" 04. 事件循环")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/node/eventLoop.png",alt:""}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("nodeJs本质上单线程还是一个JS主线程，本质上的异步操作还是由线程池完成的。")])]),t._v(" "),e("li",[e("p",[t._v("而nodeJs之所以单线程可以处理高并发的原因，得益于libuv层的事件循环机制 和底层线程池的实现。")])])]),t._v(" "),e("h3",{attrs:{id:"_05-优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_05-优缺点"}},[t._v("#")]),t._v(" 05. 优缺点")]),t._v(" "),e("ul",[e("li",[t._v("优点：node的优点：I/O密集型处理是node的强项，因为node的I/O请求都是异步的，（例如sql查询，文件流的操作）")]),t._v(" "),e("li",[t._v("缺点：不擅长处理CPU 密集型的操作")])]),t._v(" "),e("h3",{attrs:{id:"_06-适应场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_06-适应场景"}},[t._v("#")]),t._v(" 06. 适应场景")]),t._v(" "),e("ul",[e("li",[t._v("RESTful API: 请求和响应只需要少量文本，并且不需要大量逻辑处理，因此可以并发处理数万条连接")]),t._v(" "),e("li",[t._v("聊天服务：轻量级，高流量，没有复杂的计算逻辑")])])])}),[],!1,null,null,null);a.default=_.exports}}]);