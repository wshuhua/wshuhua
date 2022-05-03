(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{470:function(t,a,e){"use strict";e.r(a);var _=e(28),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"_01-为什么要异步i-o"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01-为什么要异步i-o"}},[t._v("#")]),t._v(" 01. 为什么要异步I/O")]),t._v(" "),e("p",[t._v("在跨网络的结构下，并发已经是现代编程的标准配备。主要从用户体验与资源分配这两个方面说起。")]),t._v(" "),e("h4",{attrs:{id:"用户体验"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户体验"}},[t._v("#")]),t._v(" 用户体验")]),t._v(" "),e("p",[t._v("由于浏览器中JavaScript在单线程上执行，并且与UI渲染共用一个进程。这表示着JavaScript在执行的时候UI渲染和响应是处于停滞状态的。在《高性能JavaScript》-书中总提到过，如果脚本的执行事件超过100ms, 用户就会感到页面卡顿。在B/S模型中，网络速度的限制给网页的实时体验造成很大的麻烦。\n如果网页临时需要获取网页资源，通过同步的方式获取，在js等待资源期间，ui停顿，不响应用户的交互行为。")]),t._v(" "),e("p",[t._v("采用异步请求，在下载资源期间，JavaScript和UI的执行都不会处于等待状态，可以继续响应用户交互行为。")]),t._v(" "),e("p",[t._v("前端可以通过异步消除UI阻塞的现象，但是前端获取资源的速度取决于后端的响应速度。假如一个资源来自于两个不同位置的数据返回，第一个资源需要M ms的耗时，第二个资源需要N ms的耗时。如果采用同步方式。总耗时：SUM(M,N)")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 消费时间为M\ngetData('from_db');\n// 消费时间为N\ngetData('from_remote_api'); \n")])])]),e("p",[t._v("采用异步的方式，第一个资源的获取不会阻塞第二个资源，我们可以享受并发的优势。总耗时：MAX(M,N)")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 消费时间为M\ngetData('from_db');\n// 消费时间为N\ngetData('from_remote_api'); \n")])])]),e("p",[t._v("从CPU一级缓存到网络的数据访问所需要的开销")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/node/%E4%B8%8D%E5%90%8CIO%E7%B1%BB%E5%9E%8B%E5%BC%80%E9%94%80.png",alt:""}})]),t._v(" "),e("h4",{attrs:{id:"资源分配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#资源分配"}},[t._v("#")]),t._v(" 资源分配")]),t._v(" "),e("p",[t._v("计算机在发展过程中将组件进行了抽象，分为 "),e("code",[t._v("I/O设备")]),t._v(" 和"),e("code",[t._v("计算设备")]),t._v("。")]),t._v(" "),e("p",[t._v("假设业务场景中有一组互不相关的任务需要完成，现行的主要方法有一下两种：")]),t._v(" "),e("ul",[e("li",[t._v("单线程串行依次完成")]),t._v(" "),e("li",[t._v("多线程并行完成\n如果创建多线程的开销小于并行执行，那么多线程的方式是首选。多线程的代价在于创建线程和执行期线程上下文切换的开销较大。另外，在复杂的业务中，多线程编程经常面临锁，状态同步等问题，这是多线程被垢病的主要原因。但是多线程在多核CPU上能够提升CPU的利用率。")])]),t._v(" "),e("p",[t._v("单线程顺序执行任务的方式比较符合编程人员按顺序思考的思维方式。它依然是最主流的编程方式，因为它易于表达。但是串行执行的缺点在于性能，任意一个略慢点任务都会导致后续执行代码被阻塞。在计算机资源中，通常I/O与CPU计算之间是可以并行进行的。但是同步编程模型导致的问题是，I/O 的进行会让后续任务等待，这造成资源不能被更好地利用。")]),t._v(" "),e("p",[t._v("操作系统会将CPU的时间分配给其余进程，以公告而有效利用资源。基于这一点，有的服务器未了提高响应性能，会通过启动多个工作进程来更多的用户服务。但是对于这一组任务而言，它无法分发任务到多个进程上，所以依然高效利用资源，结束所有任务所需的时间将会较长。")]),t._v(" "),e("p",[t._v("添加硬件资源是一种提升服务质量的方式，但它不是唯一的方式。")]),t._v(" "),e("p",[t._v("单线程同步编程模型会因阻塞I/O导致硬件资源得不到更优的使用。多线程编程模型也因为编程中的死锁，状态同步等问题让开发人员头疼。")]),t._v(" "),e("p",[t._v("Node在两者之间给出了方案： "),e("code",[t._v("利用单单程，远离多线程死锁，状态同步等问题,利用异步I/O，在单线程远离阻塞，以更好的使用CPU")]),t._v("。\n未了弥补单线程无法利用多核CPU的缺点，Node提供了类似前端浏览器中Web Workers的子进程，该子进程可以通过工作进程高效的利用CPU和I/O。")]),t._v(" "),e("p",[t._v("异步I/O的提出是期望I/O的调用不在乎阻塞后续运算，将原有等待I/O完成的这边时间分配给其他需要的业务去执行。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/node/%E5%BC%82%E6%AD%A5IO%E7%9A%84%E8%B0%83%E7%94%A8.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_02-异步i-o-与非阻塞i-o"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_02-异步i-o-与非阻塞i-o"}},[t._v("#")]),t._v(" 02. 异步I/O 与非阻塞I/O")]),t._v(" "),e("p",[t._v("从实际效果看，异步与非阻塞都达到了我们并行I/O的目的。但是从计算机内核而言，异步/同步和阻塞/非阻塞实际是两回事。")]),t._v(" "),e("p",[t._v("操作系统内核对于I/O只有两种方式：阻塞与非阻塞。在调用阻塞I/O时，应用程序需要等待I/O完成才返回结果。如下图所示：\n"),e("img",{attrs:{src:"/images/node/%E8%B0%83%E7%94%A8%E9%9D%9E%E9%98%BB%E5%A1%9EIO%E7%9A%84%E8%BF%87%E7%A8%8B.png",alt:""}})]),t._v(" "),e("p",[t._v("阻塞I/O的一个特点是调用之后一定要等到系统内核层面完成所有操作后，调用才结束。以读取磁盘上的一段文件为例，系统内核在完成磁盘寻道，读取数据，复制数据道内存之后，这个调用才结束。")]),t._v(" "),e("p",[t._v("阻塞I/O造成CPU等待I/O，浪费等待时间，CPU的处理能力不能得到充分利用。为了提高性能，内核提供了非阻塞I/O。非阻塞I/O与阻塞I/O的差别为调用之后会立即返回。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/node/%E8%B0%83%E7%94%A8%E9%98%BB%E5%A1%9EIO%E8%BF%87%E7%A8%8B.png",alt:""}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("操作系统对计算机进行了抽象，将所有输入输出设备抽象为文件。内核在进行文件I/O操作时，通过文件描述符进行管理，而文件描述符类似于应用程序与系统内核的凭证。应用程序如果需要I/O调用，需要先打开文件描述符，然后再根据文件描述符去实现文件的数据读写。此处非阻塞I/O与阻塞I/O完成整个获取数据的过程，而非阻塞I/O不带入数据直接返回，要获取数据，需要通过文件描述符再次进行读取。")])]),t._v(" "),e("p",[t._v("非阻塞I/O返回后，CPU时间可以用来处理其他事物，性能得到提升。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("非阻塞I/O存在的问题")]),t._v(" "),e("p",[t._v("由于完整的I/O没有完成，立即返回的不是业务层期望的数据，而仅仅是当前调用的状态。为了获取完整的数据，应用程序需要重复调用I/O操作来确认是否完成。这种重复调用判断操作是否完成的技术称为"),e("code",[t._v("轮训")]),t._v("。\n阻塞I/O造成CPU等待浪费。非阻塞I/O的问题是需要轮询去确认是否完全完成数据获取，他会让CPU处理状态判断，是对CPU的浪费。")])]),t._v(" "),e("p",[t._v("轮询技术主要有以下几种：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("read: 最原始，性能最低的一种。通过重复调用来检查I/O的状态来完成完整数据的读取。在得到最终数据前，CPU一直耗用在等待上。\n"),e("img",{attrs:{src:"/images/node/%E9%80%9A%E8%BF%87read%E8%BF%9B%E8%A1%8C%E8%BD%AE%E8%AF%A2.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("select。在read基础上改进的一个方案。通过对文件描述符上的事件状态来进行判断。\nselect轮询具有一个较弱的限制。由于它采用一个1024长度的数组来存储状态。所以它最多可以同时检查1024个文件描述符。\n"),e("img",{attrs:{src:"/images/node/%E9%80%9A%E8%BF%87select%E8%BF%9B%E8%A1%8C%E8%BD%AE%E8%AF%A2.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("poll: 在select方案上进行改进，采用链表的方式避免数组长度的限制，其次它能避免不需要的检查。但是当文件描述符较多的时候，性能比较低下。\n"),e("img",{attrs:{src:"/images/node/%E9%80%9A%E8%BF%87poll%E5%AE%9E%E7%8E%B0%E8%BD%AE%E8%AF%A2.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("epoll: 该方案是linux下效率最高的I/O事件通知机制，在进入轮询的时候如果没有检查道I/O事件，将会进行休眠，直到事件发生将它唤醒。它是真实利用到了事件通知，执行回调的方式，而不是遍历查询，所以不会浪费CPU，执行效率较高。\n"),e("img",{attrs:{src:"/images/node/%E9%80%9A%E8%BF%87epoll%E5%AE%9E%E7%8E%B0%E8%BD%AE%E8%AF%A2.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("kqueue：与epoll类似。在FreeBSD系统下存在。")])])]),t._v(" "),e("p",[t._v("轮询技术满足了非阻塞I/O确保获取完整数据的需求。但是对于应用程序而言，它仍然只能算是一种状态同步，因为应用程序仍然需要等待I/O完全返回，依旧花费了很多时间来等待。等待期间，CPU 不是用户遍历文件描述符的状态，就是用于休眠等待事件发生。")]),t._v(" "),e("h4",{attrs:{id:"非阻塞i-o-理想下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非阻塞i-o-理想下"}},[t._v("#")]),t._v(" 非阻塞I/O（理想下）")]),t._v(" "),e("p",[t._v("尽管epoll通过事件来降低CPU的消耗，但是休眠期CPU几乎是闲置的，对于当前线程利用率不高。\n理想中的完美异步I/O是应用阻塞发起非阻塞调用，无须通过遍历或者事件唤醒等方式轮询，可以直接处理下一个任务，只需要在I/O完成后通过信号或回调将数据传递给应用程序。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/node/%E7%90%86%E6%83%B3%E4%B8%AD%E7%9A%84%E5%BC%82%E6%AD%A5IO.png",alt:""}})]),t._v(" "),e("p",[t._v("只有在linux下存在这样一种方式，它原生提供的一种异步I/O方式（AIO）就是通过信号或回调来传递数据的。存在缺陷：AIO仅支持内核I/O中的O_DIRECT方式读取，导致无法利用系统缓存。")]),t._v(" "),e("h4",{attrs:{id:"异步i-o-现实"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步i-o-现实"}},[t._v("#")]),t._v(" 异步I/O（现实）")]),t._v(" "),e("p",[t._v("假设场景：\n在单线程下，多线程的方式会是另外一种风景。通过让部分线程进行阻塞I/O或者非I/O加轮询技术来完成数据获取，让一个线程进行计算处理，通过线程之间的通信将I/O得到的数据进行传递。如图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/node/%E5%BC%82%E6%AD%A5IO.png",alt:""}})]),t._v(" "),e("p",[t._v("在Node中采用libuv作为抽象封装层，使得所有平台兼容性的判断都有这一层判断，并保证了上层的Node与下层自定义线程池及IOCP之间各自独立。\nNode在编译期间会判断平台条件，选择性编译unix目录还是win目录喜爱的源文件到目标程序中。\n架构图如下；\n"),e("img",{attrs:{src:"/images/node/%E5%9F%BA%E4%BA%8Elibvu%E7%9A%84%E6%9E%B6%E6%9E%84%E5%9B%BE.png",alt:""}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("ol",[e("li",[t._v("这里的I/O不仅仅只限于磁盘文件的读写。*nix将计算机抽象了一番，磁盘文件、硬件等几乎所有计算机资源都被抽象成了文件。因此，这里描述的阻塞与非阻塞的情况同样适用于套接字。")]),t._v(" "),e("li",[t._v("Node是单线程，这里的单线程仅仅只是JavaScript执行在单线程中的。在Node中，无论是*nix还是windows平台，内部完成I/O任务的另有线程池。")])])]),t._v(" "),e("h3",{attrs:{id:"_03-nodejs的异步i-o"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_03-nodejs的异步i-o"}},[t._v("#")]),t._v(" 03. NodeJs的异步I/O")]),t._v(" "),e("p",[t._v("在Node中如何实现异步I/？")]),t._v(" "),e("h4",{attrs:{id:"事件循环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),e("p",[t._v("Node自身的执行模型 - "),e("code",[t._v("事件循环")]),t._v("，正是它使得回调函数十分普遍。")]),t._v(" "),e("p",[t._v("在进程启动时，Node会创建一个类似于while(true)的循环，每执行一次循环体的人过程我们称为"),e("code",[t._v("Tick")]),t._v(".\n每个"),e("code",[t._v("Tick")]),t._v("的过程就是查看是否有事件待处理，如果有，就取出事件及其相关的回调函数。如果存在关联的回调函数，就执行它们。\n然后进入下一个循环，如果不再有事件处理，就退出进程。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/node/Tick%E6%B5%81%E7%A8%8B%E5%9B%BE.png",alt:""}})]),t._v(" "),e("h4",{attrs:{id:"观察者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#观察者"}},[t._v("#")]),t._v(" 观察者")]),t._v(" "),e("p",[t._v("在每个Tick过程中，如何判断是否有事件处理？每个事件循环中有一个多个观察者，判断是否有事件要处理的过程就是向这些观察者询问是否有要处理的事件。")]),t._v(" "),e("p",[t._v("事件可能来自用户的点击或者加载某些文件时产生，而这些产生的事件都有对应的观察者。在Node中，事件主要来源于网络请求，文件I/O等，这些事件对应的观察者有文件I/O观察者，网络I/O观察者等。观察者将事件进行了分类。")]),t._v(" "),e("p",[t._v("事件循环是一个典型的生产者/消费者模型。异步I/O，网络请求等则是事件的生产者，源源不断为Node提供不同类型的事件，这些事件被传递给对应的观察者那里，事件循环从观察者哪里取出事件处理。")]),t._v(" "),e("p",[t._v("在windows下，循环基于IOCP创建，*nix基于多线程创建。")]),t._v(" "),e("h4",{attrs:{id:"请求对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求对象"}},[t._v("#")]),t._v(" 请求对象")]),t._v(" "),e("p",[t._v("通过解释Windows下异步I/O（利用IOCP实现）的例子探寻从JavaScript代码到系统内核发生了什么。")]),t._v(" "),e("p",[t._v("对于非异步回调函数，函数由我们自行调用，示例如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var forEach = function (list, callback) {\n for (var i = 0; i < list.length; i++) {\n callback(list[i], i, list);\n }\n}; \n")])])]),e("p",[t._v("对于Node中的异步I/O调用，回调函数不由开发者调用。在Javascript发起调用到内核执行完I/O操作的过渡过程，存在一种中间产物，叫做请求对象。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("fs.open =function(path, flags, mode, callback) {\n  // ...\n  binding.open =(pathModule._makeLong(path),\n                stringToFlags(flags),\n                mode,\n                callback\n                )\n}\n")])])]),e("p",[t._v("fs.open()的作用就是根据指定路径和参数去打开一个文件，从而得到一个文件描述符。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/node/%E8%B0%83%E7%94%A8%E7%A4%BA%E6%84%8F%E5%9B%BE.png",alt:""}}),t._v("\n从JavaScript调用Node的核心模块，核心模块调用C++内建模块，内建模块通过libuv进行系统调用，这是Node里经典的调用方式。这里libuv作为封装层，有两个平台实现，实质上是调用了uv_fs_open()方法。在uv_fs_open()的调用过程中，创建一个"),e("code",[t._v("FSReqWrap")]),t._v("请求对象。从JavaScript层传入的参数和当前方法都被封装在这个请求对象中，我们最为关注的回调函数被设置在这个对象的 "),e("code",[t._v("oncomplete_sym")]),t._v("属性上。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("req_wrap -> object_ -> Set(oncomplete_sym, callback)\n")])])]),e("p",[t._v("对象包装完毕后，在window下调用"),e("code",[t._v("QueueUserWorkItem()")]),t._v("方法将这个"),e("code",[t._v("FSReqWrap")]),t._v("对象堆入线程池中等待执行。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("QueueUserWorkItem(&uv_fs_thread_proc, \\\n req, \\\n WT_EXECUTEDEFAULT) \n")])])]),e("p",[t._v("QueueUserWorkItem接受三个参数，")]),t._v(" "),e("ul",[e("li",[t._v("第一个参数是将要执行的方法的引用，引用的是"),e("code",[t._v("uv_fs_thread_proc")])]),t._v(" "),e("li",[t._v("第二个参数是"),e("code",[t._v("uv_fs_thread_proc")]),t._v("方法运行是需要的参数")]),t._v(" "),e("li",[t._v("第三个参数是执行的标志。当线程池中有可用线程时，调用"),e("code",[t._v("uv_fs_thread_proc")]),t._v("方法。uv_fs_thread_proc()方法会根据传入参数的类型调用相应的底层函数。比如uv_fs_open，实际调用的是fs__open()方法。")])]),t._v(" "),e("p",[t._v("JavaScript调用立即返回，由JavaScript层面发起的异步调用的第一阶段就此结束。JavaScript线程继续执行当前任务饿后续操作。当前的I/O操作在线程池中等待执行。不考虑是否阻塞I/O，都不会影响JavaScript线程的后续执行。")]),t._v(" "),e("p",[t._v("请求对象是异步I/O过程中的重要中间产物，所有的状态都保存在这个对象中，包括送入线程池等待执行以及I/O操作完毕后的回调处理。")]),t._v(" "),e("h4",{attrs:{id:"执行回调"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行回调"}},[t._v("#")]),t._v(" 执行回调")]),t._v(" "),e("p",[t._v("组装好请求对象，送入I/O线程池等待执行是完成异步I/O的第一部分，回调通知是第二部分。")]),t._v(" "),e("p",[t._v("线程池的I/O操作调用完毕之后，将获取的结果存储在req->result属性上，然后调用PostQueueComletionStatus() 通知IOCP，告知当前对象操作已经完成。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("PostQueuedCompletionStatus((loop)->iocp, 0, 0, &((req)->overlapped))\n")])])]),e("p",[e("code",[t._v("PostQueuedCompletionStatus()")]),t._v("方法的作用是向IOCP提交执行状态，并将线程归还线程池。\n"),e("code",[t._v("GetQueuedCompletionStatus")]),t._v(" 用来提取状态。\n执行回调中，还动用了事件循环的I/O观察者。每次Tick执行中，它会调用IOCP相关的"),e("code",[t._v("GetQueueComletionStatus()")]),t._v(" 方法检查线程池是否有执行完的请求。如果存在，会将请求对象加入到I/O观察者的队列中，然后当作事件处理。")]),t._v(" "),e("p",[t._v("I/O观察者回调函数的行为就是取出请求对象的result属性作为参数，取出oncomplete_sym属性作为方法，然后调用执行，以此达到JavaScript中传入的回调函数的目的。")]),t._v(" "),e("p",[t._v("整个异步I/O的流程五如下：\n"),e("img",{attrs:{src:"/images/node/%E6%95%B4%E4%B8%AA%E5%BC%82%E6%AD%A5I/O%E7%9A%84%E6%B5%81%E7%A8%8B.png",alt:""}})]),t._v(" "),e("p",[t._v("事件循环，观察者，请求对象，I/O线程池这四个共同构成了Node异步I/O模型的基本要素。")]),t._v(" "),e("ul",[e("li",[t._v("Windows下主要通过IOCP来向系统内核发送I/O调用和从内核获取已完成的I/O操作，配以事件循环，以此完成异步I/O的过程。")]),t._v(" "),e("li",[t._v("Linux下通过epoll实现这个过程")]),t._v(" "),e("li",[t._v("FreeBSD通过kqueue实现")]),t._v(" "),e("li",[t._v("Splaris下通过EventPorts实现。\n不同的是线程池在Windows下由内核IOCP直接提供，*nix系列下由libuv自行实现。")])]),t._v(" "),e("p",[t._v("在Node中，除了JavaScript是单线程外，Node自身其实是多线程的，只是I/O线程使用的CPU较少。还有一点就是：除了用户代码无法并行执行外，所有的I/O（磁盘I/O和网络I/O）则是可以并行的。")]),t._v(" "),e("h3",{attrs:{id:"_04-非i-o的异步api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_04-非i-o的异步api"}},[t._v("#")]),t._v(" 04. 非I/O的异步API")]),t._v(" "),e("p",[t._v("Node中存在与I/O无关的异步API。例如：setTimeout，setInterval,setImmediate, process.nextTick")]),t._v(" "),e("h4",{attrs:{id:"定时器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定时器"}},[t._v("#")]),t._v(" 定时器")]),t._v(" "),e("p",[t._v("setTimeout 与 setInterval 与浏览器API一致，分别用于单次和多次执行任务。它们的实现原理与异步I/O比较类似，只是不需要I/O线程池的参与。调用setTimeout()或者setInterval()创建的定时器会被插入到定时器观察者内部的一个红黑树中。每次Tick执行时，会从该红黑树中迭代取出定时器，检查是否超过定时时间，如果超过，就形成一个事件，它的回调函数将立即执行。")]),t._v(" "),e("h3",{attrs:{id:"_05-事件驱动与高性能服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_05-事件驱动与高性能服务器"}},[t._v("#")]),t._v(" 05. 事件驱动与高性能服务器")])])}),[],!1,null,null,null);a.default=v.exports}}]);