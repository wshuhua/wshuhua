(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{515:function(e,n,t){"use strict";t.r(n);var a=t(28),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"_01-scheduler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01-scheduler"}},[e._v("#")]),e._v(" 01. scheduler")]),e._v(" "),t("p",[e._v("scheduler主要包括两个功能：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("时间切片")])]),e._v(" "),t("li",[t("p",[e._v("优先级调度")])])]),e._v(" "),t("h4",{attrs:{id:"时间切片原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时间切片原理"}},[e._v("#")]),e._v(" 时间切片原理")]),e._v(" "),t("p",[e._v("Scheduler的时间切片功能是通过task（宏任务）实现的。\n常见的tast就是setTimout，但是有个task比setTimeout执行时机更靠前，"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MessageChannel",target:"_blank",rel:"noopener noreferrer"}},[e._v("MessageChannel"),t("OutboundLink")],1),e._v("允许我们创建一个新的消息通道，并通过它的两个MessagePort 属性发送数据。")]),e._v(" "),t("p",[e._v("所以Scheduler将需要被执行的回调函数作为MessageChannel的回调执行。如果当前宿主环境不支持MessageChannel，再使用setTimeout。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("requestHostCallback = function(cb) {\n  if (_callback !== null) {\n    // Protect against re-entrancy.\n    setTimeout(requestHostCallback, 0, cb);\n  } else {\n    _callback = cb;\n    setTimeout(_flushCallback, 0);\n  }\n};\n")])])]),t("p",[e._v("在React的render阶段，开启Concurrent Mode时，每次遍历前，都会通过Scheduler提供的shouldYield方法判断是否需要中断遍历，使浏览器有时间渲染\n是否中断的依据：每个任务的剩余时间是否用完。在Schdeduler中，为任务分配的初始剩余时间为5ms")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function workLoopConcurrent() {\n  while (workInProgress !== null && !shouldYield()) {\n    performUnitOfWork(workInProgress);\n  }\n}\n")])])]),t("p",[e._v("通过fps动态调整分配给任务的可执行时间")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("forceFrameRate = function(fps) {\n    //fps: 每秒传输速率，不支持强速帧 \n    if (fps < 0 || fps > 125) {\n      return;\n    }\n    if (fps > 0) {\n      yieldInterval = Math.floor(1000 / fps);\n    } else {\n      // 重置初始值\n      yieldInterval = 5;\n    }\n};\n\n")])])]),t("h4",{attrs:{id:"优先级调度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优先级调度"}},[e._v("#")]),e._v(" 优先级调度")]),e._v(" "),t("p",[e._v("Scheduler是独立于React的包，所以它的优先级（存在5种优先级）也是独立于React的优先级的。对外暴露了一个方法 "),t("code",[e._v("unstable_runWithPriority")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function unstable_runWithPriority(priorityLevel, eventHandler) {\n  switch (priorityLevel) {\n    case ImmediatePriority:\n    case UserBlockingPriority:\n    case NormalPriority:\n    case LowPriority:\n    case IdlePriority:\n      break;\n    default:\n      priorityLevel = NormalPriority;\n  }\n\n  var previousPriorityLevel = currentPriorityLevel;\n  currentPriorityLevel = priorityLevel;\n\n  try {\n    return eventHandler();\n  } finally {\n    currentPriorityLevel = previousPriorityLevel;\n  }\n}\n")])])]),t("p",[e._v("不同优先级意味着不同时长的任务过期时间")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Times out immediately\nvar IMMEDIATE_PRIORITY_TIMEOUT = -1;\n// Eventually times out\nvar USER_BLOCKING_PRIORITY_TIMEOUT = 250;\nvar NORMAL_PRIORITY_TIMEOUT = 5000;\nvar LOW_PRIORITY_TIMEOUT = 10000;\n// Never times out\nvar IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt;\n\n\nvar timeout;\nswitch (priorityLevel) {\n  case ImmediatePriority:\n    timeout = IMMEDIATE_PRIORITY_TIMEOUT;\n    break;\n  case UserBlockingPriority:\n    timeout = USER_BLOCKING_PRIORITY_TIMEOUT;\n    break;\n  case IdlePriority:\n    timeout = IDLE_PRIORITY_TIMEOUT;\n    break;\n  case LowPriority:\n    timeout = LOW_PRIORITY_TIMEOUT;\n    break;\n  case NormalPriority:\n  default:\n    timeout = NORMAL_PRIORITY_TIMEOUT;\n    break;\n}\n\nvar expirationTime = startTime + timeout;\n")])])]),t("p",[e._v("如果一个任务的优先级是ImmediatePriority，对应IMMEDIATE_PRIORITY_TIMEOUT为-1，那么该任务的过期时间比当前时间还短，表示它已经过期了，需要立即被执行。")]),e._v(" "),t("h4",{attrs:{id:"不同优先级的排序任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同优先级的排序任务"}},[e._v("#")]),e._v(" 不同优先级的排序任务")]),e._v(" "),t("p",[e._v("Scueduler 存在两个队列")]),e._v(" "),t("ul",[t("li",[e._v("timerQueue：保存未就绪任务")]),e._v(" "),t("li",[e._v("taskQueue：保存已就绪任务\n每当有新的未就绪的任务被注册，我们将其插入到timerQueue，并根据开始时间重新排序。\n当timerQueue中有任务就绪（currentTime >= startTime）,取出加入到taskQueue。\n取出taskQueue中最早过期的任务并执行他。Scheduler使用小顶堆实现了优先级队列。")])]),e._v(" "),t("p",[t("code",[e._v("小顶堆")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("每个结点的值都小于或等于其左右孩子结点的值\narr[i] <= arr[2i+1] && arr[i] <= arr[2i+2]\n")])])]),t("p",[e._v("取出taskQueue最早过期任务：注册的回调函数执行后的返回值continuationCallback为function，会将continuationCallback作为当前任务的回调函数，如果不是funtion，则将当前被执行的任务清除taskQueue。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const continuationCallback = callback(didUserCallbackTimeout);\ncurrentTime = getCurrentTime();\nif (typeof continuationCallback === 'function') {\n  // continuationCallback是函数\n  currentTask.callback = continuationCallback;\n  markTaskYield(currentTask, currentTime);\n} else {\n  if (enableProfiling) {\n    markTaskCompleted(currentTask, currentTime);\n    currentTask.isQueued = false;\n  }\n  if (currentTask === peek(taskQueue)) {\n    // 将当前任务清除\n    pop(taskQueue);\n  }\n}\nadvanceTimers(currentTime);\n")])])]),t("h3",{attrs:{id:"_02-lane模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_02-lane模型"}},[e._v("#")]),e._v(" 02. lane模型")]),e._v(" "),t("p",[e._v("lane模型使用31位的二进制表示31条赛道，位数越小的赛道优先级越高，某些相邻的赛道拥有相同优先级。")]),e._v(" "),t("p",[e._v("优先级逐步降低.")]),e._v(" "),t("p",[e._v("代表批处理的lanes： 同时占据好几个赛道")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export const NoLanes: Lanes = /*                        */ 0b0000000000000000000000000000000;\nexport const NoLane: Lane = /*                          */ 0b0000000000000000000000000000000;\n\nexport const SyncLane: Lane = /*                        */ 0b0000000000000000000000000000001;\nexport const SyncBatchedLane: Lane = /*                 */ 0b0000000000000000000000000000010;\n\nexport const InputDiscreteHydrationLane: Lane = /*      */ 0b0000000000000000000000000000100;\nconst InputDiscreteLanes: Lanes = /*                    */ 0b0000000000000000000000000011000;\n\nconst InputContinuousHydrationLane: Lane = /*           */ 0b0000000000000000000000000100000;\nconst InputContinuousLanes: Lanes = /*                  */ 0b0000000000000000000000011000000;\n\nexport const DefaultHydrationLane: Lane = /*            */ 0b0000000000000000000000100000000;\nexport const DefaultLanes: Lanes = /*                   */ 0b0000000000000000000111000000000;\n\nconst TransitionHydrationLane: Lane = /*                */ 0b0000000000000000001000000000000;\nconst TransitionLanes: Lanes = /*                       */ 0b0000000001111111110000000000000;\n\nconst RetryLanes: Lanes = /*                            */ 0b0000011110000000000000000000000;\n\nexport const SomeRetryLane: Lanes = /*                  */ 0b0000010000000000000000000000000;\n\nexport const SelectiveHydrationLane: Lane = /*          */ 0b0000100000000000000000000000000;\n\nconst NonIdleLanes = /*                                 */ 0b0000111111111111111111111111111;\n\nexport const IdleHydrationLane: Lane = /*               */ 0b0001000000000000000000000000000;\nconst IdleLanes: Lanes = /*                             */ 0b0110000000000000000000000000000;\n\nexport const OffscreenLane: Lane = /*                   */ 0b1000000000000000000000000000000;\n")])])]),t("p",[e._v("InputDiscreteLanes 是“用户交互”触发更新会拥有的优先级范围。")]),e._v(" "),t("p",[e._v("DefaultLanes是“请求数据返回后触发更新”拥有的优先级范围。")]),e._v(" "),t("p",[e._v("TransitionLanes是Suspense、useTransition、useDeferredValue拥有的优先级范围。")]),e._v(" "),t("h3",{attrs:{id:"_03-位与运算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_03-位与运算"}},[e._v("#")]),e._v(" 03. 位与运算：")]),e._v(" "),t("ul",[t("li",[e._v("前置知识：")])]),e._v(" "),t("p",[e._v("正数的原码，反码，补码不变\n负数的反码是对其原码按位取反，符号位不变\n补码是在其反码基础上+1")]),e._v(" "),t("p",[e._v("例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let lanes =  0b011 -> 00000011\n   -lanes = -0b011 -> 10000011(原码) ->11111100(反码) -> 11111101(补码)\n   lanes & -lanes = 00000011 &  11111101 -> 00000001 -> 1\n")])])]),t("p",[e._v("位合并位运算：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export function mergeLanes(a: Lanes | Lane, b: Lanes | Lane): Lanes {\n  return a | b;\n}\n")])])]),t("p",[e._v("lane存在交集：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export function includesSomeLane(a: Lanes | Lane, b: Lanes | Lane) {\n  return (a & b) !== NoLane;\n}\n")])])]),t("p",[e._v("subSet是set的子集：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export function isSubsetOfLanes(set: Lanes, subset: Lanes | Lane) {\n  return (set & subset) === subset;\n}\n")])])]),t("p",[e._v("将subset从set移除：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export function removeLanes(set: Lanes, subset: Lanes | Lane): Lanes {\n  return set & ~subset;\n}\n")])])]),t("h3",{attrs:{id:"_04-异步可中断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_04-异步可中断"}},[e._v("#")]),e._v(" 04. 异步可中断")]),e._v(" "),t("h4",{attrs:{id:"batchedupdates-批量更新-17版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#batchedupdates-批量更新-17版本"}},[e._v("#")]),e._v(" batchedUpdates 批量更新(17版本)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n                      wrappers (injected at creation time)\n                                     +        +\n                                     |        |\n                   +-----------------|--------|--------------+\n                   |                 v        |              |\n                   |      +---------------+   |              |\n                   |   +--|    wrapper1   |---|----+         |\n                   |   |  +---------------+   v    |         |\n                   |   |          +-------------+  |         |\n                   |   |     +----|   wrapper2  |--------+   |\n                   |   |     |    +-------------+  |     |   |\n                   |   |     |                     |     |   |\n                   |   v     v                     v     v   | wrapper\n                   | +---+ +---+   +---------+   +---+ +---+ | invariants\nperform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained\n+-----------------\x3e|-|---|-|---|--\x3e|anyMethod|---|---|-|---|-|--------\x3e\n                   | |   | |   |   |         |   |   | |   | |\n                   | |   | |   |   |         |   |   | |   | |\n                   | |   | |   |   |         |   |   | |   | |\n                   | +---+ +---+   +---------+   +---+ +---+ |\n                   |  initialize                    close    |\n                   +-----------------------------------------+\n\n")])])]),t("p",[e._v("react的 batchUpdate是通过 "),t("code",[e._v("transaction")]),e._v("实现的。"),t("code",[e._v("transaction")]),e._v("对一个函数进行包装，让react 有机会在一个函数运行前后执行特定逻辑，从而完成整个batchUpdate流程的控制。")]),e._v(" "),t("p",[t("code",[e._v("transaction")]),e._v("是给需要执行的函数封装了两个 wrapper，每个 wrapper 都有 initialize 和 close 方法。当一个 transaction 需要执行（perform）的时候，会先调用对应的 initialize 方法。同样的，当一个 transaction 执行完成后，会调用对应的 close 方法。")]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("transaction")]),e._v("的initialize阶段，一个updateQueue被创建。在"),t("code",[e._v("transaction")]),e._v("中调用setState方法时，状态不会立即应用，而是被推入到updateQueue中。函数执行结束进入到"),t("code",[e._v("transaction")]),e._v("close阶段， updateQueue会被flush，此时新的状态会被应用到组件上并进行虚拟dom更新等工作。")]),e._v(" "),t("h4",{attrs:{id:"高优先级更新插队"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高优先级更新插队"}},[e._v("#")]),e._v(" 高优先级更新插队")]),e._v(" "),t("p",[e._v("低优先级任务在执行中，一旦比他高的优先级任务及哪里，这个低优先级任务会被中断，执行高优先级任务，等高优先级任务执行完毕，低优先级任务会重新执行。")]),e._v(" "),t("p",[e._v("当onClick调用setState时，意味着组件对应的fiber节点产生了一个更新。setState实际上是生成一个update对象，调用 "),t("code",[e._v("enqueueSetState")]),e._v("，将这个update对象连接到fiber节点的updateQueue链表中.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Component.prototype.setState = function(partialState, callback) {\n  this.updater.enqueueSetState(this, partialState, callback, 'setState');\n};\n")])])]),t("p",[t("code",[e._v("enqueueSetState")]),e._v("的目的就是创建update对象，将它加入到 fiber节点的update链表 "),t("code",[e._v("updateQueue")]),e._v("，然后发起调度。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("enqueueSetState(inst, payload, callback) {\n    // 获取当前触发更新的fiber节点。inst是组件实例\n    const fiber = getInstance(inst);\n    // eventTime是当前触发更新的时间戳\n    const eventTime = requestEventTime();\n    const suspenseConfig = requestCurrentSuspenseConfig();\n\n    // 获取本次update的优先级\n    const lane = requestUpdateLane(fiber, suspenseConfig);\n\n    // 创建update对象\n    const update = createUpdate(eventTime, lane, suspenseConfig);\n\n    // payload就是setState的参数，回调函数或者是对象的形式。\n    // 处理更新时参与计算新状态的过程\n    update.payload = payload;\n\n    // 将update放入fiber的updateQueue\n    enqueueUpdate(fiber, update);\n\n    // 开始进行调度\n    scheduleUpdateOnFiber(fiber, lane, eventTime);\n  }\n")])])]),t("ul",[t("li",[e._v("计算优先级 "),t("code",[e._v("requestUpdateLane")])])]),e._v(" "),t("p",[e._v("事件触发时，合成事件机制调用scheduler中的runWithPriority函数，目的是以该交互事件对应的事件优先级去派发真正的事件流程。runWithPriority会将事件优先级转化为scheduler内部的优先级并记录下来。当调用requestUpdateLane计算lane的时候，会去获取scheduler中的优先级，以此作为lane计算的依据。（findUpdateLane）")]),e._v(" "),t("ul",[t("li",[e._v("创建 update 对象")]),e._v(" "),t("li",[e._v("将update放入updateQueue中")]),e._v(" "),t("li",[e._v("scheduleUpdateOnFiber 进行调度")])]),e._v(" "),t("h4",{attrs:{id:"调度准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调度准备"}},[e._v("#")]),e._v(" 调度准备")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("检查是否有无限更新")])]),e._v(" "),t("li",[t("p",[e._v("从产生更新的节点开始一直向上循环到root，目的是要将fiber.lanes一直向上收集，收集到父级节点的childLanes中，childLanes是识别子数是否更新的关键。如果fiber.lanes不为空，说明该fiber节点有更新。fiber.childLanes 判断当前子树是否有更新的依据，若有更新，继续向下构建，否则直接复用已有的fiber树，就不往下循环了。")])]),e._v(" "),t("li",[t("p",[e._v("在root上标记更新，将update的lane放到root.pendingLanes中，每次渲染的优先级基准：renderLanes是来自于root.pendingLanes中最紧急的那一部分lanes。")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function scheduleUpdateOnFiber(\n  fiber: Fiber,\n  lane: Lane,\n  eventTime: number,\n) {\n  // 第一步，检查是否有无限更新\n  checkForNestedUpdates();\n\n  ...\n  // 第二步，向上收集fiber.childLanes\n  const root = markUpdateLaneFromFiberToRoot(fiber, lane);\n\n  ...\n\n  // 第三步，在root上标记更新，将update的lane放到root.pendingLanes\n  markRootUpdated(root, lane, eventTime);\n\n  ...\n\n  // 根据Scheduler的优先级获取到对应的React优先级\n  const priorityLevel = getCurrentPriorityLevel();\n\n  if (lane === SyncLane) {\n    // 本次更新是同步的，例如传统的同步渲染模式\n    if (\n      (executionContext & LegacyUnbatchedContext) !== NoContext &&\n      (executionContext & (RenderContext | CommitContext)) === NoContext\n    ) {\n      // 如果是本次更新是同步的，并且当前还未渲染，意味着主线程空闲，并没有React的更新任务在执行，那么调用performSyncWorkOnRoot开始执行同步任务\n      // ...\n      performSyncWorkOnRoot(root);\n    } else {\n      // 如果是本次更新是同步的，不过当前有React更新任务正在进行，而且因为无法打断，所以调用ensureRootIsScheduled 目的是去复用已经在更新的任务，让这个已有的任务把这次更新顺便做了\n      ensureRootIsScheduled(root, eventTime);\n      ...\n    }\n  } else {\n\n    ...\n\n    // Schedule other updates after in case the callback is sync.\n    // 如果是更新是异步的，调用ensureRootIsScheduled去进入异步调度\n    ensureRootIsScheduled(root, eventTime);\n    schedulePendingInteractions(root, lane);\n  }\n\n  ...\n}\n")])])]),t("p",[e._v("scheduleUpdateOnFiber最终会调用"),t("code",[e._v("ensureRootIsScheduled")]),e._v("来调度。\n一个update的产生最终会使React在内存中根据现有的fiber树构建一棵新的fiber树，新的state的计算、diff操作、以及一些生命周期的调用，都会在这个构建过程中进行。这个整体的构建工作被称为render阶段，这个render阶段整体就是一个完整的React更新任务，更新任务可以看作执行一个函数，这个函数在concurrent模式下就是performConcurrentWorkOnRoot，更新任务的调度可以看成是这个函数被scheduler按照任务优先级安排它何时执行。")]),e._v(" "),t("h4",{attrs:{id:"react任务的本质"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react任务的本质"}},[e._v("#")]),e._v(" react任务的本质")]),e._v(" "),t("p",[e._v("一个update的产生最终会使react在内存中 根据现有的fiber树构建一颗新的fiber树，新的state计算，diff操作，还有一些声明周期的调用，都会在这个构建过程中进行。也就是我们所说的render阶段。 render阶段就是一个完成的react 更新任务。 在concurrent模式下，就是performConcurrentWorkOnRoot，更新任务的调度我们可以理解为这个函数被scheduler 按照任务优先级安排它何时执行。")]),e._v(" "),t("p",[e._v("每当有新的任务来的时候，会被挂载到root节点的"),t("code",[e._v("callbackNode")]),e._v("属性上，表示当前有任务被调度了，另外将任务优先级存储到root的"),t("code",[e._v("callbackPriority")]),e._v("上")]),e._v(" "),t("h4",{attrs:{id:"任务调度协调-ensurerootisscheduled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#任务调度协调-ensurerootisscheduled"}},[e._v("#")]),e._v(" 任务调度协调 - ensureRootIsScheduled")]),e._v(" "),t("p",[e._v("主要职能：")]),e._v(" "),t("ul",[t("li",[e._v("获取 "),t("code",[e._v("root.callbackNode")]),e._v(" 即旧任务")]),e._v(" "),t("li",[e._v("检查任务是否过期，将过期任务放入"),t("code",[e._v("root.expriedLanes")]),e._v(",目的是让过期任务能够以同步优先级去进行调度（立即执行）")]),e._v(" "),t("li",[e._v("获取renderLanes(优先从"),t("code",[e._v("root.expriedLanes")]),e._v("获取)，如果renderLanes是空的，说明不需要调度，直接return")]),e._v(" "),t("li",[e._v("获取本次优先级，即新的优先级，"),t("code",[e._v("newCallbackPriority")])])]),e._v(" "),t("p",[e._v("协调调度过程：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("首先确认是否发起调度，通过对比新旧任务优先级是否相等")]),e._v(" "),t("ul",[t("li",[e._v("相等：无需调度，直接复用旧任务，让旧任务在处理更新的时候连带新任务一起做")]),e._v(" "),t("li",[e._v("不相等：说明新任务的优先级高于旧任务， "),t("code",[e._v("高优先级任务插队")]),e._v("，需要把旧任务取消")])]),e._v(" "),t("p",[e._v("这是因为每次调度去获取任务优先级（renderLanes）的时候，都只获取root.pendingLanes中最紧急的那部分lanes对应的优先级，低优先级的update持有的lane对应的优先级是无法被获取到的。通过这种办法，可以将来自同一事件中的多个更新收敛到一个任务中去执行，通俗理解就是同一个事件触发的多次更新的优先级是一样的，没必要发起多次任务调度。例如在一个事件中多次调用setState,只引起一次调度，后续调度与第一次调度优先级一致，直接复用了。")])]),e._v(" "),t("li",[t("p",[e._v("发起调度：查看新任务的优先级")]),e._v(" "),t("ul",[t("li",[e._v("同步优先级(legacy 模式)：调用 "),t("code",[e._v("scheduleSyncCallback")]),e._v("去同步执行任务")]),e._v(" "),t("li",[e._v("同步批量执行（blocking 模式）：调用 "),t("code",[e._v("scheduleCallback")]),e._v(" 以同步任务优先级（立即调用）调度")]),e._v(" "),t("li",[e._v("属于conCurrent优先级（conCurrent 模式）：调用"),t("code",[e._v("scheduleCallback")]),e._v("将任务以上面获取到的新任务优先级去加入调度。")])])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function ensureRootIsScheduled(root: FiberRoot, currentTime: number) {\n  // 获取旧任务\n  const existingCallbackNode = root.callbackNode;\n\n  // 记录任务的过期时间，检查是否有过期任务，有则立即将它放到root.expiredLanes，\n  // 便于接下来将这个任务以同步模式立即调度\n  markStarvedLanesAsExpired(root, currentTime);\n\n  // 获取renderLanes\n  const nextLanes = getNextLanes(\n    root,\n    root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes,\n  );\n\n  // 获取renderLanes对应的任务优先级\n  const newCallbackPriority = returnNextLanesPriority();\n\n  if (nextLanes === NoLanes) {\n    // 如果渲染优先级为空，则不需要调度\n    if (existingCallbackNode !== null) {\n      cancelCallback(existingCallbackNode);\n      root.callbackNode = null;\n      root.callbackPriority = NoLanePriority;\n    }\n    return;\n  }\n\n  // 如果存在旧任务，那么看一下能否复用\n  if (existingCallbackNode !== null) {\n\n    // 获取旧任务的优先级\n    const existingCallbackPriority = root.callbackPriority;\n\n    // 如果新旧任务的优先级相同，则无需调度\n    if (existingCallbackPriority === newCallbackPriority) {\n      return;\n    }\n    // 代码执行到这里说明新任务的优先级高于旧任务的优先级\n    // 取消掉旧任务，实现高优先级任务插队\n    cancelCallback(existingCallbackNode);\n  }\n\n  // 调度一个新任务\n  let newCallbackNode;\n  if (newCallbackPriority === SyncLanePriority) {\n\n    // 若新任务的优先级为同步优先级，则同步调度，传统的同步渲染和过期任务会走这里\n    newCallbackNode = scheduleSyncCallback(\n      performSyncWorkOnRoot.bind(null, root),\n    );\n  } else if (newCallbackPriority === SyncBatchedLanePriority) {\n\n    // 同步模式到concurrent模式的过渡模式：blocking模式会走这里\n    newCallbackNode = scheduleCallback(\n      ImmediateSchedulerPriority,\n      performSyncWorkOnRoot.bind(null, root),\n    );\n  } else {\n    // concurrent模式的渲染会走这里\n\n    // 根据任务优先级获取Scheduler的调度优先级\n    const schedulerPriorityLevel = lanePriorityToSchedulerPriority(\n      newCallbackPriority,\n    );\n\n    // 计算出调度优先级之后，开始让Scheduler调度React的更新任务\n    newCallbackNode = scheduleCallback(\n      schedulerPriorityLevel,\n      performConcurrentWorkOnRoot.bind(null, root),\n    );\n  }\n\n  // 更新root上的任务优先级和任务，以便下次发起调度时候可以获取到\n  root.callbackPriority = newCallbackPriority;\n  root.callbackNode = newCallbackNode;\n}\n")])])]),t("p",[t("code",[e._v("ensureRootIsScheduled")]),e._v(" 在任务调度层面整合了高优先级任务的插队和任务饥饿问题的关键逻辑。")]),e._v(" "),t("p",[e._v("饥饿问题：是指低优先级任务始终被高优先级任务打断,导致没有时间执行。")]),e._v(" "),t("p",[e._v("高优先级任务插队，低优先级任务重做的整个过程共有四个关键点：")]),e._v(" "),t("ul",[t("li",[e._v("ensureRootIsScheduled取消已有的低优先级更新任务，重新调度一个任务去做高优先级更新，并以root.pendingLanes中最重要的那部分lanes作为渲染优先级")]),e._v(" "),t("li",[e._v("执行更新任务时跳过updateQueue中的低优先级update，并将它的lane标记到fiber.lanes中。")]),e._v(" "),t("li",[e._v("fiber节点的complete阶段收集fiber.lanes到父级fiber的childLanes，一直到root。")]),e._v(" "),t("li",[e._v("commit阶段将所有root.childLanes连同root.lanes一并赋值给root.pendingLanes。")]),e._v(" "),t("li",[e._v("commit阶段的最后重新发起调度，（ensureRootIsScheduled实现）重新走一遍调度流程，确保低优先级任务被执行。")])]),e._v(" "),t("h3",{attrs:{id:"_05-suspense实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_05-suspense实现"}},[e._v("#")]),e._v(" 05. Suspense实现")]),e._v(" "),t("p",[e._v("处理流程:")]),e._v(" "),t("ul",[t("li",[e._v("Suspense 让子组件在渲染之前进行等待，并在等待时显示 fallback 的内容")]),e._v(" "),t("li",[e._v("Suspense 内的组件子树比组件树的其他部分拥有更低的优先级")])]),e._v(" "),t("p",[e._v("执行流程：")]),e._v(" "),t("ul",[t("li",[e._v("在 "),t("code",[e._v("render")]),e._v(" 函数中可以使用异步请求数据")]),e._v(" "),t("li",[e._v("react 会从我们的缓存中读取,如果缓存命中，直接进行 render,如果没有缓存，会抛出一个 promise 异常。当 promise 完成后，react 会重新进行 render，把数据展示出来，完全同步写法，没有任何异步 callback。")])]),e._v(" "),t("h4",{attrs:{id:"_01简易版代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01简易版代码实现"}},[e._v("#")]),e._v(" 01简易版代码实现：")]),e._v(" "),t("ol",[t("li",[e._v("子组件没有加载完成时，会抛出一个 promise 异常")]),e._v(" "),t("li",[e._v("监听 promise，状态变更后，更新 state，触发组件更新，重新渲染子组件")]),e._v(" "),t("li",[e._v("展示子组件内容")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('export default class Suspense extends React.Component {\n    state = {\n        loading: false,\n    };\n\n    componentDidCatch(error) {\n        if (error && typeof error.then === "function") {\n            error.then(() => {\n                this.setState({ loading: true });\n            });\n            this.setState({ loading: false });\n        }\n    }\n\n    render() {\n        const { fallback, children } = this.props;\n        const { loading } = this.state;\n        return loading ? fallback : children;\n    }\n}\n')])])]),t("h4",{attrs:{id:"_02简易版代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_02简易版代码实现"}},[e._v("#")]),e._v(" 02简易版代码实现：")]),e._v(" "),t("p",[e._v("问题是我们在编写组件的时候，不能直接使用async await, 结合suspense原理，封装一个promise，请求中，我们将 promise 作为异常抛出，请求完成展示结果。")]),e._v(" "),t("p",[e._v("定义一个WrapPromise 函数：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('function WrapPromise (promise) {\n  let status = "pending";\n    let result;\n    let suspender = promise.then(\n        (res) => {\n            status = "success";\n            result = res;\n        },\n        (error) => {\n            status = "error";\n            result = error;\n        }\n    );\n  return {\n        exec() {\n            if (status === "pending") {\n                throw suspender;\n            } else if (status === "error") {\n                throw result;\n            } else if (status === "success") {\n                return result;\n            }\n        },\n  };\n}\n')])])]),t("h4",{attrs:{id:"suspenselist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#suspenselist"}},[e._v("#")]),e._v(" SuspenseList")]),e._v(" "),t("h5",{attrs:{id:"三个属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三个属性"}},[e._v("#")]),e._v(" 三个属性")]),e._v(" "),t("ul",[t("li",[e._v("revealOrder: 子 Suspense 的加载顺序\n"),t("ul",[t("li",[e._v("forwards: 从前向后展示，无论请求的速度快慢都会等前面的先展示")]),e._v(" "),t("li",[e._v("backwards: 从后向前展示，无论请求的速度快慢都会等后面的先展示")]),e._v(" "),t("li",[e._v("together: 所有的 Suspense 都准备好之后同时显示")])])]),e._v(" "),t("li",[e._v("tail: 指定如何显示 SuspenseList 中未准备好的 Suspense\n"),t("ul",[t("li",[e._v("不设置：默认加载所有 Suspense 对应的 fallback")]),e._v(" "),t("li",[e._v("collapsed：仅展示列表中下一个 Suspense 的 fallback")]),e._v(" "),t("li",[e._v("hidden: 未准备好的项目不限时任何信息")])])]),e._v(" "),t("li",[e._v("children: 子元素\n"),t("ul",[t("li",[e._v("子元素可以是任意 React 元素")])])])]),e._v(" "),t("p",[e._v("当子元素中包含非 Suspense 组件时，且未设置 tail 属性，那么此时所有的 Suspense 元素必定是同时加载，设置 revealOrder 属性也无效。当设置 tail 属性后，无论是 collapsed 还是 hidden，revealOrder 属性即可生效\n子元素中多个 Suspense 不会相互阻塞。")]),e._v(" "),t("p",[e._v("SuspenseList仅对最近的组件和其下方的Suspense组件SuspenseList进行操作。它不会搜索比一层更深的边界。但是，可以将多个SuspenseList组件相互嵌套以构建网格。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<SuspenseList revealOrder="forwards" tail="collapsed">\n  <Suspense fallback={<div>Loading...</div>}>\n    <User id={1} />\n  </Suspense>\n  <Suspense fallback={<div>Loading...</div>}>\n    <User id={3} />\n  </Suspense>\n  <Suspense fallback={<div>Loading...</div>}>\n    <User id={5} />\n  </Suspense>\n</SuspenseList>\n')])])])])}),[],!1,null,null,null);n.default=r.exports}}]);