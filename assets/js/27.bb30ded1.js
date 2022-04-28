(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{478:function(e,t,n){"use strict";n.r(t);var a=n(28),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h3",{attrs:{id:"hooks-demo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hooks-demo"}},[e._v("#")]),e._v(" hooks demo")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('      let workInProgressHook;\n      let isMount = true;\n\n      const fiber = {\n        memoizedState: null,\n        stateNode: App,\n      };\n      function run() {\n        workInProgressHook = fiber.memoizedState;\n        const app = fiber.stateNode();\n        isMount = false;\n        return app;\n      }\n      function dispatchAction(queue, action) {\n        const update = {\n          action,\n          next: null,\n        };\n        console.log(queue, "update1");\n        if (queue.pending === null) {\n          update.next = update;\n          console.log(update, "update2");\n        } else {\n          // 3 -> 0 -> 1 -> 2 -> 3\n          // 4 -> 0 -> 1 -> 2 -> 3 -> 4\n          // queue.pending 指向最后一个update，queue.pending.next 指向第一个update\n          update.next = queue.pending.next; // 4 -> 0\n          queue.pending.next = update; // 3 -> 4\n        }\n        queue.pending = update; // 当前最后一个指针指向update\n\n        run();\n      }\n      function useState(initialState) {\n        let hook;\n        if (isMount) {\n          hook = {\n            queue: {\n              pending: null,\n            },\n            memoizedState: initialState,\n            next: null,\n          };\n          if (!fiber.memoizedState) {\n            fiber.memoizedState = hook;\n          } else {\n            workInProgressHook.next = hook;\n          }\n          workInProgressHook = hook;\n        } else {\n          hook = workInProgressHook;\n          workInProgressHook = workInProgressHook.next;\n        }\n\n        let baseState = hook.memoizedState;\n\n        if (hook.queue.pending) {\n          let firstUpdate = hook.queue.pending.next;\n\n          do {\n            const action = firstUpdate.action;\n            baseState = action(baseState);\n            firstUpdate = firstUpdate.next;\n          } while (firstUpdate !== hook.queue.pending);\n\n          hook.queue.pending = null;\n        }\n        hook.memoizedState = baseState;\n        return [baseState, dispatchAction.bind(null, hook.queue)];\n      }\n      function App() {\n        const [num, updateNum] = useState(0);\n        console.log(`${isMount ? "mount" : "update"} num: `, num);\n        return {\n          click() {\n            updateNum((num) => num + 1);\n          },\n        };\n      }\n      window.app = run();\n\n')])])]),n("h3",{attrs:{id:"hooks数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hooks数据结构"}},[e._v("#")]),e._v(" hooks数据结构")]),e._v(" "),n("p",[e._v("mount/update下的hook  开源于不同的对象，这类对象称之为： dispatcher")]),e._v(" "),n("p",[e._v("mount时：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const HooksDispatcherOnMount: Dispatcher = {\n  readContext,\n\n  useCallback: mountCallback,\n  useContext: readContext,\n  useEffect: mountEffect,\n  useImperativeHandle: mountImperativeHandle,\n  useLayoutEffect: mountLayoutEffect,\n  useInsertionEffect: mountInsertionEffect,\n  useMemo: mountMemo,\n  useReducer: mountReducer,\n  useRef: mountRef,\n  useState: mountState,\n  useDebugValue: mountDebugValue,\n  useDeferredValue: mountDeferredValue,\n  useTransition: mountTransition,\n  useMutableSource: mountMutableSource,\n  useSyncExternalStore: mountSyncExternalStore,\n  useId: mountId,\n\n  unstable_isNewReconciler: enableNewReconciler,\n};\n")])])]),n("p",[e._v("update时：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const HooksDispatcherOnUpdate: Dispatcher = {\n  readContext,\n\n  useCallback: updateCallback,\n  useContext: readContext,\n  useEffect: updateEffect,\n  useImperativeHandle: updateImperativeHandle,\n  useInsertionEffect: updateInsertionEffect,\n  useLayoutEffect: updateLayoutEffect,\n  useMemo: updateMemo,\n  useReducer: updateReducer,\n  useRef: updateRef,\n  useState: updateState,\n  useDebugValue: updateDebugValue,\n  useDeferredValue: updateDeferredValue,\n  useTransition: updateTransition,\n  useMutableSource: updateMutableSource,\n  useSyncExternalStore: updateSyncExternalStore,\n  useId: updateId,\n\n  unstable_isNewReconciler: enableNewReconciler,\n};\n")])])]),n("p",[e._v("在mount/update调用的hook是不同的函数。\n将不同情况对应的dispatcher赋值给全局变量ReactCurrentDispatcher的current属性。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    ReactCurrentDispatcher.current =\n      current === null || current.memoizedState === null\n        ? HooksDispatcherOnMount\n        : HooksDispatcherOnUpdate;\n")])])]),n("h3",{attrs:{id:"hook的数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hook的数据结构"}},[e._v("#")]),e._v(" hook的数据结构")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const hook: Hook = {\n  memoizedState: null,\n\n  baseState: null,\n  baseQueue: null,\n  queue: null,\n\n  next: null\n}\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),n("p",[e._v("hook.memoizedState: Hooks链表中保存的单一hook对应的数据")]),e._v(" "),n("p",[e._v("fiber.memoizedState:  FunctionComponent 对应fiber保存的Hooks链表")])]),e._v(" "),n("h3",{attrs:{id:"hooks的调用顺序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hooks的调用顺序"}},[e._v("#")]),e._v(" hooks的调用顺序")]),e._v(" "),n("p",[e._v("当初始化useState的时候，hooks是通过next来绑定state的顺序的，如果在多次调用hooks时，将其中一个useState有条件的省略，不执行，那么.next的时候，获得的state就不是对应的state，会造成state错位。")]),e._v(" "),n("h3",{attrs:{id:"memoizedstate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#memoizedstate"}},[e._v("#")]),e._v(" memoizedState")]),e._v(" "),n("p",[e._v("不同类型保存的memoizedState数据格式不一致")]),e._v(" "),n("ul",[n("li",[e._v("useState: 对于const [value, setValue] = useState(initialState)，memoizedState保存value的值")]),e._v(" "),n("li",[e._v("useReducer: 对于const [state, dispatch]= useReducer(reducer, {}),memoized 保存state的值。")]),e._v(" "),n("li",[e._v("useEffect：memoizedState保存useEffect 回调函数，依赖项等的链表结构effect，effect链表同时会保存在fiber.updateQueue中。")]),e._v(" "),n("li",[e._v("useMemo: 对于useMemo(callback, [depA]), memoizedState保存(callback, [depA])")]),e._v(" "),n("li",[e._v("useCallback: 对于useCallback(callback, [depA])，memoizedState保存(callback, [depA]),与useMemo不同的是，useCallback保存的是callback函数本身，useMemo保存的是callback返回的结果")]),e._v(" "),n("li",[e._v("useRef: useRef(1), memoizedState保存{current: 1}")])]),e._v(" "),n("p",[e._v("没有memoizedState:")]),e._v(" "),n("ul",[n("li",[e._v("useContext")])]),e._v(" "),n("h3",{attrs:{id:"usestate-usereducer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usestate-usereducer"}},[e._v("#")]),e._v(" useState/useReducer")]),e._v(" "),n("p",[e._v("useReducer是useState的替代方案，会接收一个 (state, action) => newState的reducer，并返回当前的state以及配套的dispatch\nhook的工作流程主要分为：声明阶段和调用阶段。")]),e._v(" "),n("ul",[n("li",[e._v("声明阶段就是在所在函数调用时，依次执行useReducer 和useState方法")]),e._v(" "),n("li",[e._v("调用阶段即点即按钮后，dispatch或setValue被调用时。")])]),e._v(" "),n("h4",{attrs:{id:"声明阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#声明阶段"}},[e._v("#")]),e._v(" 声明阶段")]),e._v(" "),n("p",[e._v("render阶段beginwork -> renderWithHooks 方法")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function useState(initialState) {\n  var dispatcher = resolveDispatcher();\n  return dispatch.useState(initialState);\n}\n\nfunction useReducer(reducer, initialArg, init) {\n  var dispater = resolveDispatcher();\n  var dispatcher.useReducer(reducer, initialArg, init);\n}\n")])])]),n("p",[e._v("dispater 在·不同场景下同一个hook会调用不同的函数")]),e._v(" "),n("h4",{attrs:{id:"mountstate-mountreducer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mountstate-mountreducer"}},[e._v("#")]),e._v(" mountState/mountReducer")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function mountState<S>(\n  initialState:(()=>S) | S,\n):[S, Dispatch<BasicStateAction<S>>] {\n  // 创建并返回当前hook\n  const hook = mountWorkInProgress();\n\n  // 赋值初始state\n  if (typeof initialState === 'function') {\n    initialState = initialState();\n  }\n  hook.memoizedState = hook.baseState = initialState;\n  const queue: UpdateQueue<S, BasicStateAction<S>> = {\n    pending: null,\n    interleaved: null,\n    lanes: NoLanes,\n    dispatch: null,\n    lastRenderedReducer: basicStateReducer,\n    lastRenderedState: (initialState: any),\n  };\n\n  // 创建queue\n  const queue = (hook.queue = {\n    pending: null,\n    dispatch: null,\n    lastRenderedReducer: basicStateReducer,\n    lastRenderedState: (initialState: any)\n  })\n\n  // 创建dispatch\n\n  const dispatch: Dispatch<\n    BasicStateAction<S>,\n  > = (queue.dispatch = (dispatchSetState.bind(\n    null,\n    currentlyRenderingFiber,\n    queue,\n  ): any));\n\n  return [hook.memoizedState, dispatch];\n}\n")])])]),n("p",[e._v("queue的数据结构如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const queue = (hook.queue = {\n  pending: null, // 保存update 对象\n  dispatch: null, // 保存dispatchAction.bind()的值\n  lastRenderedReducer: reducer, // 上一次render时使用的ruducer\n  lastRenderedState: (initialState: any)\n})\n")])])]),n("p",[e._v("useReducer的lastRenderedReducer为传入的reducer参数。\nuseState的lastRenderedReducer为basicStateReducer")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function basicStateReducer<S>(state: S, action: BasicStateAction<S>): S\n  return typeof action === 'function' ? action(state) : action;\n")])])]),n("p",[e._v("useState的reducer参数为basicStateReducer的useReducer")]),e._v(" "),n("h4",{attrs:{id:"updatereducer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#updatereducer"}},[e._v("#")]),e._v(" updateReducer")]),e._v(" "),n("p",[e._v("在update时，useState与useReducer调用的是同一个函数updateReducer")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function updateReducer<S, I, A> (\n  reducer: (S, A) => S,\n  initialArg: I,\n  init?: I => S\n): [S, Dispatch<A>]{\n  // 获取当前hook\n  const hook = updateWorkInProgressHook();\n\n  const queue = hook.queue;\n\n  queue.lastRenderedReducer = reducer;\n\n  const current: Hook = (currentHook: any);\n  let baseQueue = current.baseQueue;\n  const pendingQueue = queue.pending;\n\n  // 同update与updateQueue 类似的更新逻辑\n  if (pendingQueue !== null) {\n    if (baseQueue !== null) {\n      // 合并待处理队列和基本队列。\n      const baseFirst = baseQueue.next;\n      const pendingFirst = pendingQueue.next;\n      baseQueue.next = pendingFirst;\n      pendingQueue.next = baseFirst;\n    }\n    current.baseQueue = baseQueue = pendingQueue;\n    queue.pending = null;\n  }\n  // ...\n\n\n  const dispatch: Dispatch<A> = (queue.dispatch: any);\n  return [hook.memoizedState, dispatch];\n}\n")])])]),n("p",[e._v("流程概括为：\n找到对应的hook,根据update计算该hook的state 并返回")]),e._v(" "),n("p",[e._v("mount与update 获取当前hook方式不一样，mountWorkInProgressHook/updateWorkInProgressHook")]),e._v(" "),n("ol",[n("li",[e._v("mount是调用ReactDOm.render或初始化API产生的更新，只会执行一次")]),e._v(" "),n("li",[e._v("update触发更新行为有多种，可能是在事件回调或者副作用触发，又或者是render阶段触发的更新，为了避免组件无限循环更新，需要区别对待")])]),e._v(" "),n("p",[e._v("render\n假设调用setValue触发更新，不做限制，这次更行会开启一次新的render阶段，导致无限循环。\n所以react 用标记变量 didScheduleRenderPhaseUpdate 判断是否是render阶段触发的更新。")]),e._v(" "),n("h4",{attrs:{id:"调用阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#调用阶段"}},[e._v("#")]),e._v(" 调用阶段")]),e._v(" "),n("p",[e._v("调用阶段会执行dispatchAction，\n整个过程：创建update，将update加入queue.pending中国，并开启调度")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function dispatchAction(fiber, queue, action) {\n  \n  // ... 创建update\n  var update = {\n    eventTime: eventTime,\n    lane: lane,\n    suspenseConfig: suspenseConfig,\n    action: action,\n    eagerReducer: null,\n    eagerState: null,\n    next: null\n  }\n\n  // ... 将update加入queue.pending\n\n  var alternate = fiber.alternate;\n\n  if(fiber === currentlyRenderingFiber$1 || alternate !== null && alternate === currentlyRenderingFiber$1) {\n    // render阶段触发的更新\n    didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;\n  } else {\n    if (fiber.lanes === NOLanes && (alternate === null || alternate.lanes === NoLanes)) {\n      // ...fiber的updateQueue为空， 优化路径\n    }\n    sscheduleUpdateOnFiber(fiber, lane, eventTime);\n  }\n}\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("if(fiber === currentlyRenderingFiber$1 || alternate !== null && alternate === currentlyRenderingFiber$1) {\n")])])]),n("p",[e._v("currentlyRenderingFiber 即 workInProgress， workInProgress 代表当前处于render阶段\n触发更新时通过bind预先保存的fiber与workInProgress全等，代表本次更新发生于FunctionComponent 对应fiber 的render阶段。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("if (fiber.lanes === NOLanes && (alternate === null || alternate.lanes === NoLanes)) {\n")])])]),n("p",[e._v("fiber.lanes 保存fiber上存在的update优先级\nfiber.lanes === NOLanes 代表不存在update")]),e._v(" "),n("p",[e._v("useState整体流程：")]),e._v(" "),n("p",[n("img",{attrs:{src:"/images/react/useState%E6%95%B4%E4%BD%93%E6%B5%81%E7%A8%8B.png",alt:""}})]),e._v(" "),n("h3",{attrs:{id:"useeffect"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useeffect"}},[e._v("#")]),e._v(" useEffect")]),e._v(" "),n("p",[e._v("在React中类似像componentDidMount这样的生命周期方法中，因为可能会执行setState这样的方法而产生新的更新，我们称之为side effect即副作用。")]),e._v(" "),n("p",[e._v("本身FunctionComponent因为是pure function，所以不会产生任何的副作用，而useEffect和useLayoutEffect是带给FunctionComponent产生副作用能力的Hooks，他们的行为非常类似componentDidMount和componentDidUpdate")]),e._v(" "),n("p",[e._v("他们接受一个方法作为参数，该方法会在每次渲染完成之后被调用；其次还接受第二个参数，是一个数组，这个数组里的每一个内容都会被用来进行渲染前后的对比，如果没有变化，则不会调用该副作用。")]),e._v(" "),n("h4",{attrs:{id:"useeffect-执行顺序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useeffect-执行顺序"}},[e._v("#")]),e._v(" useEffect 执行顺序")]),e._v(" "),n("p",[e._v("React 中 effect hook 的定义")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("useEffect(didUpdate);\nuseEffect(didUpdate, dependencies);\n")])])]),n("ul",[n("li",[n("p",[e._v("用途：effect hook 用于完成副作用操作")])]),e._v(" "),n("li",[n("p",[e._v("参数：")]),e._v(" "),n("ul",[n("li",[e._v("didUpdate 参数接收一个包含命令式、且可能有副作用代码的函数。")]),e._v(" "),n("li",[e._v("dependencies 参数接收一个数组，数组中的元素表示 effect 所依赖的值。")])])]),e._v(" "),n("li",[n("p",[e._v("执行时机：")]),e._v(" "),n("ul",[n("li",[e._v("默认情况：didUpdate 会在每轮组件渲染完成后执行。")]),e._v(" "),n("li",[e._v("条件执行：当传入 dependencies 参数时，didUpdate 仅在依赖值发生变化时执行")])])]),e._v(" "),n("li",[n("p",[e._v("清除：")]),e._v(" "),n("ul",[n("li",[e._v("didUpdate 函数可以返回一个清除函数以清除副作用操作（如取消订阅、清除定时器等）。如果组件多次渲染，则上一个 effect 会在下一个 effect 执行之前被清除。")])])])]),e._v(" "),n("p",[e._v("不同组件之间执行顺讯如下：")]),e._v(" "),n("ul",[n("li",[e._v("组件渲染后，执行effect的顺序，组件树的"),n("code",[e._v("后序")]),e._v("深度优先遍历。")]),e._v(" "),n("li",[e._v("组件重新渲染时，清除 effect 的顺序：组件树的"),n("code",[e._v("后序")]),e._v("深度优先遍历。")]),e._v(" "),n("li",[e._v("组件unmount时，清除effect的顺序，组件树的"),n("code",[e._v("前序")]),e._v("深度优选遍历。")])]),e._v(" "),n("h4",{attrs:{id:"flushpassiveeffectsimpl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flushpassiveeffectsimpl"}},[e._v("#")]),e._v(" flushPassiveEffectsImpl")]),e._v(" "),n("p",[e._v("flushPassiveEffects: 触发useEffect回调与其他同步任务。内部会设置优先级，并执行flushPassiveEffectsImpl")]),e._v(" "),n("p",[e._v("flushPassiveEffectImpl主要做三件事")]),e._v(" "),n("ul",[n("li",[e._v("调用该useEffect在上一次render时的销毁函数")]),e._v(" "),n("li",[e._v("调用该useEffect在本次render时的回调函数")]),e._v(" "),n("li",[e._v("如果存在同步任务，不需要等待下次事件循环的宏任务，提前执行")])]),e._v(" "),n("h4",{attrs:{id:"阶段一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#阶段一"}},[e._v("#")]),e._v(" 阶段一")]),e._v(" "),n("p",[e._v("useEffect的执行需要保证所有组件useEffect的销毁函数必须都执行完称才能执行任意一个组件的useEffect的回调函数。（因为多个组件可能共用一个ref）")]),e._v(" "),n("p",[e._v("如果不是按照 全部销毁 再 全部执行 的顺序，那么在某个组件useEffect的销毁函数中修改的ref.current可能影响另外一个组件useEffect的回调函数中的同一个ref的current属性。")]),e._v(" "),n("p",[e._v("在阶段一会遍历并执行所有useEffect的销毁函数,pendingPassiveHookEffectsUnmount中保存了所有需要执行销毁的useEffect")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const unmountEffects = pendingPassiveHookEffectsUnmount;\npendingPassiveHookEffectsUnmount = [];\n\n// pendingPassiveHookEffectsUnmount数组索引【i】保存需要销毁的effect，i+1保存该effect对应的fiber\nfor (let i = 0; i < unmountEffects; i +=2) {\n  const effect = ((unmountEffects[i]: any) : HookEffect);\n  const fiber = ((unmountEffects[i+1]: any): Fiber);\n\n  const destory = effect.destory;\n  effect.destory = undefined;\n  \n  if (typeof destory === 'function') {\n     // 销毁函数存在则执行\n    try {\n     destory();\n    } catch {\n      captureCommitPhaseError(fiber, error);\n    }\n  }\n}\n\n")])])]),n("p",[e._v("pendingPassiveHookEffectsUnmount push effect在layout阶段commitLayoutEffectOnFiber内的 schedulePassiveEffects方法")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function schedulePassiveEffects(finishedWork: Fiber) {\n  const updateQueue: FunctionComponentUpdateQueue | null = (finishedWork.updateQueue: any);\n  const lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;\n  if (lastEffect !== null) {\n    const firstEffect = lastEffect.next;\n    let effect = firstEffect;\n    do {\n      const {next, tag} = effect;\n      if (\n        (tag & HookPassive) !== NoHookEffect &&\n        (tag & HookHasEffect) !== NoHookEffect\n      ) {\n        // 向`pendingPassiveHookEffectsUnmount`数组内`push`要销毁的effect\n        enqueuePendingPassiveHookEffectUnmount(finishedWork, effect);\n        // 向`pendingPassiveHookEffectsMount`数组内`push`要执行回调的effect\n        enqueuePendingPassiveHookEffectMount(finishedWork, effect);\n      }\n      effect = next;\n    } while (effect !== firstEffect);\n  }\n}\n")])])]),n("h4",{attrs:{id:"阶段二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#阶段二"}},[e._v("#")]),e._v(" 阶段二")]),e._v(" "),n("p",[e._v("与阶段一类似，同样时遍历数组，执行对应effect的回调函数，enqueuePendingPassiveHookEffectMount 同样也在scheduPassiveEffects中，\nenqueuePassiveHookEffectsMount 保存了所有需要执行回调的useEffect")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const mountEffects = pendingPassiveHookEffectsMount;\npendingPassiveHookEffectsMount = [];\nfor (let i = 0; i < mountEffects.length; i += 2) {\n  const effect = ((mountEffects[i]: any): HookEffect);\n  const fiber = ((mountEffects[i + 1]: any): Fiber);\n  \n  try {\n    const create = effect.create;\n    effect.destroy = create();\n  } catch (error) {\n    captureCommitPhaseError(fiber, error);\n  }\n}\n")])])]),n("h3",{attrs:{id:"useref"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useref"}},[e._v("#")]),e._v(" useRef")]),e._v(" "),n("p",[e._v("作用：")]),e._v(" "),n("ul",[n("li",[e._v("作用于Dom元素")]),e._v(" "),n("li",[e._v("获取子组件的实例(只有类组件可用)")]),e._v(" "),n("li",[e._v("在函数组件中的一个全局变量，不会因为重复 render 重复申明， 类似于类组件的 this.xxx")])]),e._v(" "),n("p",[e._v("在mount/ update 对应两个不同的dispatcher")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function mountRef<T>(initialValue: T): {| current: T|}{\n  // 获取当前useRef hook\n  cosnt hook = mountWorkInProgress();\n  // 创建ref\n  const ref = { current: initialValue};\n  hook.memoizedState = ref;\n\n  return ref;\n}\n\nfunction updateRef<T>(initialValue: T): {|current: T|} {\n  // 获取当前useRef hook\n  const hook = updateWorkInProgress();\n  // 返回保存的数据\n  return hook.memoizedState;\n}\n")])])]),n("p",[e._v("createRef实现：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function createRef(): RefObject {\n  const refObject = {\n    current: null\n  };\n  return refObject;\n}\n")])])]),n("p",[e._v("functionComponent hooks 生命周期：")]),e._v(" "),n("p",[n("img",{attrs:{src:"/images/react/functionComponent%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png",alt:""}})]),e._v(" "),n("h4",{attrs:{id:"useref-与createref-区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useref-与createref-区别"}},[e._v("#")]),e._v(" useRef 与createRef 区别")]),e._v(" "),n("ul",[n("li",[e._v("createRef 仅能用在classComponent，useRef仅能用在FunctionComponent")]),e._v(" "),n("li",[e._v("createRef 每次渲染都会返回一个新的引用，而 useRef 每次都会返回相同的引用。\ncreateRef的值会随着 "),n("code",[e._v("FunctionComponent")]),e._v(" 重复执行而不断被初始化\n错误示例：永远也拿不到 ref")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function App() {\n  const valueRef = React.createRef(); //随着App render 重复初始化\n  return <div ref={valueRef} />;\n}\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const Text = () => {\n    const [renderIndex, setRenderIndex] = useState(0);\n    const refFromUseRef = useRef();\n    const refFromCreateRef = createRef();\n    if (!refFromUseRef.current) {\n        refFromUseRef.current = renderIndex;\n    }\n    if (!refFromCreateRef.current) {\n        refFromCreateRef.current = renderIndex;\n    }\n    return <div>\n        <p>renderIndex: {renderIndex}</p>\n        <p>\n            <b>\n                refFromUseRef: {refFromUseRef.current}\n            </b>\n            <b>\n                refFromCreateRef: {refFromCreateRef.current}\n            </b>\n        </p>\n        <p>\n            <button onClick={() => setRenderIndex(prevIndex => prevIndex+1)}>点击</button>\n        </p>\n    </div>;\n};\n")])])]),n("h4",{attrs:{id:"useref与全局变量的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useref与全局变量的区别"}},[e._v("#")]),e._v(" useRef与全局变量的区别")]),e._v(" "),n("p",[e._v("在组件外部声明和使用'let'变量不会触发re-rendering组件，与使用useRef相同，后者也不会触发re-rendering，那二者有什么不同？")]),e._v(" "),n("ul",[n("li",[e._v("useRef 是定义在实例基础上的，如果代码中有多个相同的组件，每个组件的 ref 只跟组件本身有关，跟其他组件的 ref 没有关系。")]),e._v(" "),n("li",[e._v("组件前定义的 global 变量，是属于全局的。如果代码中有多个相同的组件，那这个 global 变量在全局是同一个，他们会互相影响。")])]),e._v(" "),n("h4",{attrs:{id:"ref的工作流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ref的工作流程"}},[e._v("#")]),e._v(" ref的工作流程")]),e._v(" "),n("p",[e._v("HostComponent，classComponent，forwardRef 赋值ref属性")]),e._v(" "),n("ul",[n("li",[e._v("HostComponent")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<div ref={domRef}></div>\n")])])]),n("ul",[n("li",[e._v("classComponent/forwardRef")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<App ref={cnRef}/>\n")])])]),n("p",[e._v("其中forwardRef 将ref作为第二参数进行传递，不会进入ref的工作流程。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// secondArg 为传递下去的ref\nlet children = Component(props, secondArg)\n")])])]),n("p",[e._v("ref的更新在mutation阶段。 mutation执行DOM的依据是effectTag，\n所以Ref更新也会赋值对应的effectTag")]),e._v(" "),n("p",[e._v("ref的工作流程分为两步")]),e._v(" "),n("ul",[n("li",[e._v("render阶段为含有ref属性的fiber 添加Ref effectTag")]),e._v(" "),n("li",[e._v("commit 阶段为包含Ref effectTag的fiber执行对应的更新")])]),e._v(" "),n("h4",{attrs:{id:"阶段一-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#阶段一-2"}},[e._v("#")]),e._v(" 阶段一")]),e._v(" "),n("p",[e._v("在render阶段 beginWork与completeWork中  markRef方法为含有ref属性的fiber增加Ref effectTag")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// beginWork的markRef\nfunction markRef(current: Fiber | null, workInProgress: Fiber) {\n  const ref = workInProgress.ref;\n  if (\n    (current === null && ref !== null) ||\n    (current !== null && current.ref !== ref)\n  ) {\n    // Schedule a Ref effect\n    workInProgress.effectTag |= Ref;\n  }\n}\n// completeWork的markRef\nfunction markRef(workInProgress: Fiber) {\n  workInProgress.effectTag |= Ref;\n}\n")])])]),n("p",[e._v("组件对应fiber被赋值Ref effectTag需要满足的条件：")]),e._v(" "),n("ul",[n("li",[e._v("mount时，workInProgress.ref !== null，即存在ref属性")]),e._v(" "),n("li",[e._v("update时，current.ref !== ref ref属性改变")])]),e._v(" "),n("h4",{attrs:{id:"阶段二-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#阶段二-2"}},[e._v("#")]),e._v(" 阶段二")]),e._v(" "),n("ul",[n("li",[e._v("针对属性改变的，需要先移除之前的ref")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function commitMutationEffects(root: FiberRoot, renderPriorityLevel) {\n  while (nextEffect !== null) {\n    const effectTag = nextEffect.effectTag;\n    if (effectTag & Ref) {\n      const current = nextEffect.alternate;\n      if (current !== null) {\n        // 移除之前的ref\n        commitDetachRef(current);\n      }\n    }\n  }\n}\n\nfunction commitDetachRef(current: Fiber) {\n  const currentRef = current.ref;\n  if (currentRef!== null) {\n    if (typeof currentRef === 'function') {\n      currentRef(null);\n    } else {\n      currentRef.current = null;\n    }\n  }\n\n}\n")])])]),n("ul",[n("li",[e._v("ref 赋值（commitLayoutEffect 执行 commitAttachRef）")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function commitAttachRef(finishedWork: Fiber) {\n   const ref = finishedWork.ref;\n   if (ref !== null) {\n    // 获取ref属性对应的Component实例\n    const instance = finishedWork.stateNode;\n    let instanceToUse;\n    switch (finishedWork.tag) {\n      case HostComponent:\n        instanceToUse = getPublicInstance(instance);\n        break;\n      default:\n        instanceToUse = instance;\n    }\n    // 赋值ref\n    if (typeof ref === 'function') {\n      ref(instanceToUse);\n    } else {\n      ref.current = instanceToUse;\n    }\n  }\n}\n")])])]),n("h3",{attrs:{id:"usecallback-usememo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usecallback-usememo"}},[e._v("#")]),e._v(" useCallback/useMemo")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const memoizedCallback = useCallback(() => {\n  do(depA, depB)\n}, [depA, depB])\n// 返回一个 memoized 回调函数 。\nconst memoizedValue = useMemo(() => {\n  computeValue(depA, depB)\n}, [depA, depV])\n// 返回一个 memoized 值 。\n\nuseCallback(fn, deps) 类似于 useMemeo(()=> fn,deps)\n")])])]),n("h4",{attrs:{id:"mount"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mount"}},[e._v("#")]),e._v(" mount")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function mountMemo<T> (\n  nextCreate: () => T,\n  deps: Array<mixed> | void | null\n) : T {\n  // 创建并返回当前hook\n  const hook = mountWorkInProgress();\n  const nextDeps = deps === undefined ? null : deps;\n\n  // 计算value\n  const nextValue = nextCreate();\n\n  // 将value与deps保存在hook.memeoized\n  hook.memoizedState = [nextValue, nextDeps];\n\n  return nextValue;\n}\n\nfunction mountCallback<T>(callback: T, deps: Array<mixed> | void | null) : T {\n  // 创建并返回hook\n  const hook = mountWorkInProgress();\n  const nextDeps = deps === undefined ? null : deps;\n\n  // 将value与deps保存在hook.memoizedState中\n  hook.memoizedState = [callback,deps];\n  return callback\n}\n")])])]),n("h4",{attrs:{id:"update"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[e._v("#")]),e._v(" update")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function updateMemo<T> (\n  nextCreate: () => T,\n  deps: Array<mixed> | void | null\n){\n  // 返回当前的hook\n  const hook = updateWorkInProgress();\n  const nextDeps = deps === undefined ? null : deps;\n  const prevState = hook.memoizedState;\n\n  if (prevState !== null) {\n    if (nextDeps !== null) {\n      const prevDeps: Array<mixed> | null = prevState[1];\n      // 判断update前后value是否变化\n      if(areHookInputsEquql(nextDeps. prevDeps)) {\n         // 未变化\n        return prevState[0];\n      }\n    }\n  }\n  // 变化。 需要重新计算\n  const nextValue = nextCreate();\n  hook.memoizedState = [nextValue, nextDeps];\n  return nextValue;\n}\n\nfunction updateCallback<T>(callback: T, deps: Array<mixed> | void | null): T {\n  // 返回当前hook\n  const hook = updateWorkInProgressHook();\n  const nextDeps = deps === undefined ? null : deps;\n  const prevState = hook.memoizedState;\n\n  if (prevState !== null) {\n    if (nextDeps !== null) {\n      const prevDeps: Array<mixed> | null = prevState[1];\n      // 判断update前后value是否变化\n      if (areHookInputsEqual(nextDeps, prevDeps)) {\n        // 未变化\n        return prevState[0];\n      }\n    }\n  }\n\n  // 变化，将新的callback作为value\n  hook.memoizedState = [callback, nextDeps];\n  return callback;\n}\n")])])]),n("p",[e._v("二者区别value是回调函数本身还是回调函数的执行结果。")])])}),[],!1,null,null,null);t.default=s.exports}}]);