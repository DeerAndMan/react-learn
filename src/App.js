// import logo from './logo.svg';
import './App.css';

import Routers from './Router'

// console.log('Router', Routers)
// 路由
// import { BrowserRouter as Router, Switch, Route, Link } 
// from 'react-router-dom'
// import { HashRouter } from 'react-router-dom'


// ts 语法
// import FirstTs from './component/tsTest/firstTs'


/**
 * 自定义元素，组件
 * 组件名称必须以大写字母开头
 */
// function Welcome(props){
//   return <h1>hello, {props.name}</h1>
// }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* 标签用于描述文档或文档某个部分的细节 */}
        {/* <details>
          <summary>React</summary>
          <Welcome name='自定义组件' />
        </details> */}
        
        <Routers />

        {/* ts语法使用 */}
        {/* <FirstTs /> */}

      </header>
    </div>
  );
}


export default App;