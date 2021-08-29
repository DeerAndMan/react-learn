# 生命周期
***创建时间 2021-04-09***

## 初始化阶段（装载期间）
1. ***constructor()***
    + 只执行一次
    + 初始化阶段，初始化属性和状态(state)

2. ***getDerivedStateFromProps(nextProps, prevState)***
    + 执行多次
    + 从属性中获取新的状态，每次接受新的props之后的会返回一个对象作为新的state，返回null说明不需要更新

3. ***render()***
    + React组件核心方法，执行多次
    + 不要在`render`方法中改变组件状态，也不要在这个方法中和浏览器直接交互

4. ***componentDidMount()***
    + 虚拟DOM已挂载到页面成为真实DOM，只执行一次



## 更新阶段（更新期间）
1. ***getDerivedStateFromProps(nextProps, prevState)***
    + 与初始化阶段一样

2. ***shouldComponentUpdate(nextProps, nextState)***
    + 执行多次
    + 用这个方法来告诉React是否要进行下一次render()，默认返回true更新组件，返回false并不会导致组件更新、子组件也不会更新。
    + 这个钩子函数`一般不需要实现`

3. ***getSnapshotBeforeUpdate(prevProps, prevState)***
    + 获取更新前的快照，执行多次
    + 该方法的触发时间为update发生的时候，在render之后dom渲染之前放回一个值。组为componentDidUpdate的第三个参数。

4. ***componentDidUpdate(prevProps, prevState, snapshot)***
    + 虚拟DOM已重新挂载到页面成为真实DOM
    + 该方法会在更新完成后被立即调用，可以在这个方法中进行`DOM操作`，或者`做一些异步调用`



## 销毁阶段（卸载期间）
1. componentWillUnmount()
    + 组件被从DOM树中移除时，调用的相关方法