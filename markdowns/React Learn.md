# React学习

[TOC]



## state&生命周期

创建时间：2021-04-05

### 基本概念

------

1. 因为不管父组件还是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是class组件

2. 这就是为什么称state为局部或是封装的原因。除了拥有并设置了他的组件，其他组件都无法访问。

3. 正确地使用State

   - **不要直接修改State**

   - 构造函数是唯一可以给 `this.state` 赋值的地方

     ```jsx
     // 无效
     	this.state.comment = 'hello'
     // 应该使用 setState()
     	this.setState({comment: 'hello'})
     ```

   - **State 的更新可能是异步的**

   - 出于性能的考虑，会把多个 `setState()` 调用合并成一个调用

     ```jsx
      // Wrong
         this.setState({ counter: this.state.counter + this.props.increment })
     // 解决方法，接收一个函数，state作为第一个参数，prop做为第二个参数
         this.setState((state, props) => { counter: state.counter + props.increment })
     ```

   - **State 的更新会被合并**

   - **数据是向下流动的**

### 事件处理

------

1. 事件处理和DOM元素相识，但是有点语法差异

   **React事件的命名采用小驼峰，而不是纯小写**

   **使用JSX语法是你需要传入一个函数作为事件处理函数，而不是一个字符串**

   ```jsx
   // 传统写法
       <button onclick="activateLasers()">Dom click</button>
   
   // React 写法
       <button onclick={activateLasers}>React Click</button>
   ```

2. 另一个不同点是不能通过放回false的方式阻止默认行为，必须使用 `preventDefault`

3. 必须谨慎对待JSX回调函数中的`this`，如果忘记给函数绑定`this`此时`this`的值为`undefined`。

   - ***函数基本的绑定`this`的方法***

     ```jsx
      		constructor(props){
             super(props)
             <!-- 为了在回调中使用`this`，这个绑定是必不可少的 -->
             this.handleClick = this.handleClick.bind(this)
         }
         handleClick() {
             console.log('this 1', this)
         }
         <button onClick={this.handleClick}></button>
     ```

   - ***使用实验性的class fields语法绑定回调函数***

     ```jsx
      handleClick = () => {
             console.log('this is', this)
         }
         <button onClick={this.handleClick}></button>
     ```

   - ***在回调中使用箭头函数***

     ```jsx
     <!-- 此语法存在一定的问题，每次渲染时都会创建不同的回调函数。
             如果该回调函数作为prop传入子组件时，这些组件可能会进行额外的重新渲染。
             通常建议在`构造器`中绑定或使用`class fields`语法来避免这类性能问题 -->
         handleClick() {
             console.log('this ()', this)
         }
         <button onClick={() => this.handleClick()}></button>
     ```

4. 向事件处理程序传递参数

   ```jsx
   		<!-- 当使用prototype.bind来实现时，事件对象e会作为第二个参数隐形的传递过去。 -->
       <button onClick={this.deleteRow.bind(this, id)}>d</button>
   
       <!-- 当使用箭头函数时，事件对象e必须显性的传递过去 -->
       <button onClick={e => this.deleteRow(id, e)}>d</button>
   ```

### 条件渲染

------

1. React中的条件渲染跟JavaScript中的运算符if或者条件运算符类似。

2. 元素变量

   ***可以使用变量来储存元素***

3. 与运算符 &&

4. 三目运算符







## 生命周期 `ReactLiftCycle`

***创建时间 2021-04-09***

[生命周期]: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/



### 初始化阶段（装载期间）

------

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

### 更新阶段（更新期间）

------

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

### 更新阶段（更新期间）

------

***componentWillUnmount()***

+ 组件被从DOM树中移除时，调用的相关方法







## 列表 & key & Form

**创建时间：2021-04-06**

### 列表 & key

------

1. key帮助React识别哪些元素改变了，如被添加或删除。因此给数组中的每一个元素赋予一个确定的标识。
2. key最好是独一无二的的字符串，最好不要使用索引index作为key。
3. key只是在兄弟节点之间必须唯一，`在全局不需要唯一`。当我们生成两个不同数组是，可以使用相同的key值。
4. JSX允许在大括号中`嵌入任何表达式`

### 表单

------

1. React里，HTML表单元素的工作方式和其他的DOM元素有些不同

2. 受控组件：表单的可变状态通常保存在组件的state属性中，并且只能通过使用`setState()`来更新。使state成为唯一的数据源。（受控组件就是可以被react状态控制的组件）

  + 双向数据绑定就是受控组件

3. `textarea`标签，select标签
4. 受控组件空值
5. 非受控组件：`input textarea`等组件默认是非受控组件（输入框内部的值是用户控制，和React无关）。但是也可以转化为受控组件，就是通过`onChange`事件获取当前输入内容，将当前输入内容作为 value 传入，此时就成为了非受控组件。

### 受控组件 非受控组件

------

1. 受控组件：组件的使用者，有能力完全控制改组件的行为和内容。通常情况下，受控组件往往没有自身的状态，其内容完全受到属性的控制
2. 非受控组件：组件的使用者，没有能力控制盖组件的行为和内容，组件的行为和内容完全自行控制。







## stateUp  状态提升

创建时间：2021-04-07

### 组合 继承

------

1. ***多个组件相同的变化数据，将共享状态提升到最近的共同父组件中去。***

2. 







## Router 路由

创建时间：2021-04-08

`react-router-dom` 依赖 `react-router` 会自动安装依赖

### react-router 三种类型

------

`路由组件`、`路由匹配组件`、`导航组件`。 

```jsx
 		import {
        BrowserRouter as Router,
        Switch, Router, Link
    } from "react-router-dom"
```

1. 路由组件：

   - `BrowserRouter`：是基于`HTML5 history API (pushState, replaceState, popState)`事件
   - `HashRouter`：是基于`window.location.hash`
   - 它本身不做任何展示，仅提供路由模式配置，另外，该组件会产生一个上下文，上下文中会提供一些实用的对象和方法，供其他相关组件使用。

2. 路由匹配组件：

   - `<Route>`：根据不同的地址展示不同的组件，有三种属性 `component` `render` `children`来渲染出对应的内容。当组件已存在时，一般使用component属性。当需要传递参数变量给组件时，需要使用render属性。
     1. 重要属性：path：要匹配的路径，如果不写path则会匹配任意路径。
     2. component：匹配成功后要显示的组件
     3. sensitive：大小写敏感
     4. `Route`组件可以写到任意的地方，只要保证它是`Router`组件的后代元素
     5. children：传递React元素，无论是否匹配，一定会显示children，并且会忽略component属性。传递一个函数，同理。
     6. 
   - `<Switch>`通过查找所有的子`<Route>`并渲染与当前URL匹配的第一个`<Route>`的内容，当匹配到第一个`Route`后，会立即停止匹配。（不能在子元素中使用除Route外的其他组件）
   - `exact：exact`属性表示精准匹配

3. 导航组件：

   - link

     ```jsx
     <a href="/">Name</a>
     ```

   - `<NavLink>`：一种特殊的Link组件，匹配路径时，渲染的a标签带有active。当其prop与当前位置匹配时，可以将其自身设置为"active"。

     ```jsx
     // 当URL为 '/about'的时候，渲染出来为以下内容
         <a href="/about" className="activeCName">About</a>
         // 如果时其他URL，则渲染为
         <a href="/about">About</a>
     ```

   - `<Redirect>`：重定向，任何时候要牵制导航，都可以渲染<Rediret>。渲染<Rediret>时，他将会使用其props进行导航。

### 代码分割

### 导航条滚动还原

### router 基本使用

***创建时间 2021-09-09***

------

#### Router附带hook，访问路由状态

***React Router附带了一些`hook`，可以访问路由器的状态并从组件内部执行导航。***

1. useHistory: 钩子返回history对象，可以使用 `useHistory` 进行导航

   ```tsx
   import { useHistory } from "react-router-dom";
       function HomeButton() {
           let history = useHistory();
           function handleClick() {
               history.push("/home");
           }
           return (
               <button type="button" onClick={handleClick}>
                   Go home
               </button>
           );
       }
   ```

2. useLocation: 钩子返回当前URL的location对象。类似于useState,每当URL发生变化时，它都会返回一个新的位置。

   ```tsx
   		import { useLocation } from "react-router-dom";
       let location = useLocation();
       console.log( location, 'location' )
   ```

3. useParams: 动态参数列表的引用对象，用于获取`<Route>`中的 `match.params`(动态参数)

   ```tsx
    		import { useParams } from "react-router-dom";
       let { slug } = useParams();
       console.log( slug, 'slug' )
   ```

4. useRouteMatch: 尝试以与 `<Route>` 相同的方式匹配当前URL。它主要用于访问匹配数据，而无需实际渲染 `<Route>`。

   ```tsx
   		import { useRouteMatch } from "react-router-dom";
       const BlogPost = () => {
           let match = useRouteMatch("/blog/:slug")
           return <div />
       }
   ```

   + useRouteMatch 钩子也可以

   + 不接受任何参数并返回当前`<Route>`

   + 接收单个参数，与matchPath 的 props 参数相同。它可以是一个字符串形式的路径名（上面例子），也可以是一个带有匹配道具的对象

     ```tsx
     		const match = useRouteMatch({
             path: '/blog/:slug',
             strict: true,
             sensitive: true
         })
     ```

#### BrowserRouter History API

***`<BrowserRouter>` 使用HTML5 History API 来保证UI组件和URL同步***

```tsx
		<BrowserRouter
        basename={optionalString}
        forceRefresh={optionalBool}
        getUserConfirmation={optionalFunc}
        keyLength={optionalNumber}
    >
        <App />
    </BrowserRouter>
```

1.  basename`<string>`: 基准URL，如果你的应用程序是从服务器上的子目录中提供的，你需要将其设置为子目录。一个正确格式化 basename 应该有一个开头斜杠，但没有结尾斜杠。
2.  getUserConfirmation`<function>`: 用于确认路由跳转的函数。默认使用 `window.confirm`
3.  forceRefresh`<boolean>`: 如果值为 true 路由跳转将会刷新整个页面。可以使用它来模拟传统服务器渲染应用程序，路由跳转之间刷新页面的工作方式。
4.  keyLength `<element>`: location.key的长度。默认为6
5.  children `<element>`: 要渲染的子元素

#### HashRouter Hash模式

***`<HashRouter>` 使用Hash模式路由来保证UI组件和URL同步***

```tsx
** 重要说明: Hash模式不支持 location.key 或 location.state。推荐配置服务器以供使用 `<BrowserHistory>` **
<HashRouter
    basename={optionalString}
    getUserConfirmation={optionalFunc}
    hashType={optionalString}
>
    <App />
</HashRouter>
```

1. hashType `<string>`: window.location.hash 的编码类型。
   + 'slash'       -类似 #/ 或 #/sunshine/lollipops
   + 'noslash'     -类似 # 或 #sunshine/lollipops

#### link 导航

```tsx
<Link to="/about"> About </Link>
```

1. to

   - `<string>`: 链接路径的字符串形式，由路由路径，搜索参数和Hash属性构成

     ```tsx
     <Link to="/course?sort=name" />
     ```

   - `<object>`:

     - pathname: `<string>`表示要链接到的路径
     - search: `<string>`查询参数
     - hash: 一个放在URL中的Hash，例如 #a-hash
     - state: location.state 参数

   - `<function>` 将当前路由信息作为参数传递，该函数返回 string 或者 Object

     ```tsx
      		<Link to={location => ({ ...location, pathname: '/courses' })} />
         <Link to={location => `${location.pathname}?sort=name` />
     ```

2. replace `<boolean>`: 如果为true，单击链接时将替换当前历史条目，而不是添加新条目

   ```tsx
   <Link to="/courses" replace />
   ```

#### NavLink

***`<NavLink>` 特殊的`<Link>`，当它匹配当前URL时，它会为当前处于激活状态链接添加样式***

```tsx
<NavLink to="/about">About</NavLink>
```

1. activeClassName `<string>`: 元素处于活动状态时提供的class样式。默认的类名称是active。这将与className连接.

   ```tsx
   <NavLink to="about" activeClassName="selected">About</NavLink>
   ```

2. activeStyle `<object>`: 当元素处于活动状态时应用于元素的内联style样式

   ```tsx
     	<NavLink to="/about"
           activeStyle={{
               fontWeight: 'bold',
               color: 'red'
           }}
       > About
       </NavLink>
   ```

3. strict `<boolean>`: 如果为true，URL匹配时使用严格模式，路径的末尾斜杠也会匹配。

4. isActive `<function>`: 用于添加额外的逻辑以确认链接是否活动状态。如果您想要做的不仅仅时验证链接的路径名与当前URL的路径名是否匹配，那么久应该使用这个方法。

5. location `<object>`: isActive一般用于比较当前的历史位置（通常是当前浏览器的URL）。为了与不同的位置进行比较，可以传递一个location

6. aria-current `<string>`: 在活动链接上使用的是 aria-current 属性的值。可用值

   + "page":       用于指定一组分页链接中的链接
   + "step":       用于指示基于步骤的进程的步骤指示器中的链接
   + "location":   用于指示在视觉上高亮显示为流程图的当前组件的图像   
   + "date":       用于指示日历中的当前日期
   + "time":       用于指示时间表中的当前时间
   + "true":       用于指示导航链接是否处于活动状态
   + "false":      用于防止辅助技术对当前链接做出反应（用例是在一个页面上阻止多个aira-current标签）

#### Prompt：离开页面之前

***`<Prompt>`: 用于在离开页面之前提示用户。当您的应用程序进入应阻止用户导航的状态时（例如，表单已被半填满），请渲染 `<Prompt>`***

```tsx
    <Prompt
        when={formIsHalfFilledOut}
        message="您确定要离开吗？"
    />
```







## Hook

***创建时间：2021-04-12***

**Hook可以让你不编写class的情况下使用state以及其他的React特性**

### State Hook（useState）

------

```jsx
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(1);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

1. `useState`会返回一对值：当前状态和一个让你更新它的函数（类似于class组件的`this.setState`），可以在事件处理函数中或其他一些地方调用这个函数。

2. `useState`返回的函数它不会把新的state和旧的state进行合并。

3. `useState`唯一的参数就是初始state,初始state参数只有在第一次渲染时会被用到(参数只会在组件的初始化渲染中起作用，后续渲染时会忽略)。这点区别于this.state。

4. 声明多个state变量

   ```jsx
    		const [age, setAge] = useState(42);
       const [fruit, setFruit] = useState('banana');
       const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
   ```

### 使用 State Hook 

------

1. **Hook是什么？** Hook是一个特殊的函数，它可以让你‘钩入’React特性。
2. **什么时候会用Hook** 如果你在编写函数组件的时候需要向其添加一些state，现在可以在现有的函数组件中使用Hook。

### 声明State变量

------

`const [count, setCount] = useState(0)`

- **调用useState方法的时候做了什么？**它定义一个“state变量”。我们的变量叫`count`（可以叫做任何名字），`useState`是一种新方法。

- **useState 需要哪些参数？**`useState()`方法里面唯一的参数就是初始state。

- **useState方法的返回值是什么？**返回值为：当前state以及更新state的函数。

- **`useState` 与 `class` 中的 `setState` 的不同** `useState`不会自动合并更新对象，可以结合展开运算符来合并更新对象。`useReducer`是另一种可选方案

- 惰性初始state：如果初始state需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的state，此函数只在初始渲染时被调用

- ```
  	const[state, setState] = useState(() => {
      const initialState = someExpensiveComputation(props);
      return initalState;
    })
  ```

- 跳过state更新

### Effect Hook（useEffect）

------

**在组件中数据获取、订阅或者手动修改DOM。这些操作称为‘副作用’（作用）。**

1. `useEffect`给函数增加了操作副作用的能力。它与class组件中的 `componentDidMount` `componentDidUpdate` `componentWillUnmount`具有相同的用途

2. 赋值给`useEffect`的函数会在组件渲染到屏幕之后执行。默认情况下，effect将在每轮渲染结束后执行，也可以让他 在只有某写值改变的时候 才执行

3. 清除effect：清除函数会在组件卸载前执行，如果组件多次渲染，则`在执行下一个effect之前，上一个effect就已被清除`

   ```jsx
     useEffect(() => {
       const subscription = props.source.subscribe();
       return () => {
         // 清除订阅
         subscription.unsubscribe()
       }
     })
   ```

### Hook 使用规则

------

**Hook就是JavaScript函数，但是使用它们会有两个额外的规则**

1. 只能在**函数最外层**调用Hook。不要在`循环、条件判断或者子函数`中调用。
2. 只能在**React 的函数组件**中调用Hook。不要在其他JavaScript中调用。（自定义的Hook中也能调用Hook）

### 自定义 Hook

------

1. Hook 是一种复用逻辑的方式，它不复用state本身。事实上 Hook 的每一次调用都有一个完全独立的state，因此可以在单个组件中多次调用同一个自定义 Hook

### 其他 Hook

------

1. `useContext`可以不使用组件嵌套就可以订阅React的Context（跨级传值）

2. `useReducer`useState的替代方案，useReducer会比useState更适用，例如state逻辑较复杂且包含多个子值，或者下一个state依赖于之前的state等。

3. `useCallback`把内联回调函数即依赖项数组作为参数传入useCallback，它将返回该回调函数的memoized版本，该回调函数仅在某个依赖项改变时才会更新。

   ```jsx
     const memoizedCallback = useCallback(() => {
       doSomething(a, b)
     }, [a, b])
   ```

4. `useMemo`它仅会在某个依赖项改变时才重新计算`memoized`值。这种优化有助于避免在每次渲染时都进行高开销的计算。

   ```jsx
   const memoizedValue = useMemo( () => computeExpensive(a, b), [a, b] )
   ```

5. `useRef`ref对象无论该节点如何改变，React都会将ref对象的 .current 属性设置为相应的DOM节点。当 ref 对象发生变化时，useRef 并不会通知你。变更 .current 属性不会引发组件重新渲染。

   ```jsx
    const refContainer = useRef(initialValu)
   ```

6. useImperativeHandle``可以让你在使用 ref 时自定义暴露给父组件的实例值。useImperativeHandle` 应当与 `forwardRef` 一起使用。

   ```jsx
   useImperativeHandle(ref, createHandle, [deps])
   ```

7. useLayoutEffect







## ref 高阶组件

***创建时间2021-06-05***

**ref转发，**

***创建时间 2021-06-29***

### reference：引用

------

1. 使用场景：希望直接使用`dom`元素中的某个方法，或者希望直接使用自定义组件中的某个方法

   ```jsx
   		export default class Comp extends React.component {
           handleClick = () => {
               console.log(this)
               this.refs.txt.focus()
           }
       }
       render() {
           return(
               <input ref="txt" type="text>
               <button onClick="handleClick">聚焦</button>
           )
       }
   ```

   1. ref 作用于内置的html组件，得到的将是真实的`dom`对象。ref 作用于类组件，得到的将是类的实例。

      - ref 如果获取的是DOM或则组件实例，尽量不要拿 `ref.current` 作为其他的 hooks 的依赖性。
      - 不要将 ref 作为依赖性。因为 ref 一直是同一个引用，所以依赖项不会触发。
      - useRef 拿来获取 DOM 或则组件实例：`ref.current`的依赖项除了初始化触发一次，组件更新的时候触发一次之后，后续组件的重新渲染都不会触发这个 `ref.current`的依赖项。（组件更新还会触发一次是因为 `ref.current` 在初始化的时候，从null到组件的 ref 挂载完成，`ref.current` 会有一个数据变化）

   2. 如果需要手动修改 ref.current 的值，最好写在 useEffect 方法里。

   3. ref 不能作用于函数组件，需要使用 forwardRef 来包裹函数式组件。使用 forwardRef 包裹后，函数式组件会获得被分配给自己的 ref (作为第二个参数)（函数组件中的html组件或类组件依旧能够使用ref）

   4. 使用 `useImperativeHandle` 来限制暴露给父组件的方法。

      ```jsx
      const parent = () => {
        const chilRef = useRef(null)
        return <Child ref={ chilRef } />
      }
      const Child = forwardRef((props, refpar) => {
        const inpRef = useRef(null)
        // 暴露子组件的部分数据给父组件
        useImperativeHandle(refpar, () => ({
          focus: () => {
            inpRef.current.focus()
          }
        }))
        return <input type="text" ref={ inpRef } />
      })
      ```

2. ref不再推荐使用字符串赋值，字符串赋值的方式将来可能会被移除。目前，ref推荐使用对象或者函数

   ```jsx
   const myRef = React.createRef()
   ```

3. 

   

### 对象

------

1. 通过 `React.createRef` 函数创建

   ```jsx
    		export default class Comp extends React.component {
           constructor(props){
               super(props)
               this.txt = React.createRef()
           }
           // 获取
           console.log( this.txt.current )
           render(){
               returu{
                   <input ref={this.txt} />
               }
           }
       }
   ```

### 函数

------

***函数的调用时间：***

1. 在 `componentDidMount` 的时候会调用该函数

   + 在 `componentDidMount` 事件中可以使用ref

2. 如果ref的值发生了变动（旧的函数被新的函数替代），分别调用旧的函数以及新的函数，时间点出现在 componentDidUpdate 之前

   + 旧的函数被调用时，传递null
   + 新的函数被调用时，传递对象或Dom对象

3. 如果ref所在的组件被卸载，会调用该函数

   ```jsx
   export default class Comp extends React.component {
   
           componentDidMount() {
               // 获取
               console.log( this.txt )
               // 在组件挂载的时候就能够使用ref了
           }
   
           componentDidUpdate() {
               // 组件卸载的时候，也会再次调用 ref
               console.log( this.txt )
           }
   
           // 获取
           console.log( this.txt )
   
           getRef = el => {
               this.txt = el
           }
   
           render() {
               return(
                   <input ref=>{this.getRef} />
               )
           }
           <!-- render(){
               returu{ // 存在性能问题
                   <input ref={ el => { this.txt = el } } />
               }
           } -->
   }
   ```

### 谨慎使用 ref

------

**能够使用属性和状态进行控制，就不要使用ref**

1. 调用真实的DOM对象中方法
2. 某个时候需要调用类组件的方法







## Context

***创建时间：2021-06-08***

1. Context提供了一种在组件之间共享此类值的方式，而不必显示地通过组件树的逐层传递props







## Redux

***创建时间2021-09-02***







## HOC 高阶组件

***创建时间2021-09-26***

HOF: Higher-Order Function, 高阶函数，以函数作为参数，并返回一个函数
HOC: Higher-Order Component, 高阶组件，以组件作为参数，并返回一个组件

通常，可以利用HOC实现横切关注点







## Hook 其他 API

***创建时间：2021-10-09***

纯组件 puerComponent

### useContext

------

***上下文共享数据***

```tsx
const value = useContext(MyContext);

```



### Momo	&	useMemo

------

用于保持哪些需要经过复杂（高开销）计算

```jsx
 const handClick = useMemo(() => {
    return () => {
      setText(txt + 1)
    }
  }, [txt])
```

### useCallback

------

***useCallback 用于得到一个固定引用值得函数，通常用它来进行性能优化***

***函数的地址每次渲染都发生了变化，导致子组件跟着重新渲染，若子组件是经过优化的组件，则可能导致优化失效。使用useCallback 来达到减少render次数的效果***

```tsx
// useCallback 最好是配合 useMemo 一起使用
const PageA = useMemo(({click, children}) => {
  return <button onClick={ click }>{ children }</button>
})
const LearnCallback = () => {
  const [a, setA] = useState(0)
  // useCallback 有两个参数
  // 使用 useCallback 来保存该方法实例
  const clickA = useCallback(()=>{
    setA(a + 1)
  }, [a])
  return(
    <PageA onClick={ clickA }>{a}</PageA>
  )
}
```

1. 减少render次数，减少计算量

3. 函数，useCallback 会固定该函数的引用，只要依赖项没有发生变化，则始终放回之前的函数的地址。 
4. 数组，记录依赖项

该函数返回：引用相对固定的`函数`地址

### useReducer







## Redux 学习

​	创建时间 2021-10-22

------

### 	Action

1. action是一个plain-object（平面对象），它的`__proto__`指向Object.prototype
2. action中必须有type属性，该属性用于描述操作的类型（可以是任何类型）
3. 在大型项目，由于操作类型非常多，为了避免硬编码（hard code），会将action的类型村放到一个或一些单独的文件中（样板代码）
4. bindActionCreators































