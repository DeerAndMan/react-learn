import React from 'react';
import ReactDOM from 'react-dom';

import { Button, DatePicker } from "antd";
import "antd/dist/antd.css";

import './index.css';

import App from './App';
import Clock, {Toggle} from './Clock';

import reportWebVitals from './reportWebVitals';

// /* 路由 */
import { BrowserRouter } from "react-router-dom";
// console.log('BrowserRouter>>>', BrowserRouter);

// 2021-04-05
import RState from './component/20210405/RState';
import RToggle from './component/20210405/RToggle';
// 2021-04-06
import Numlist from './component/20210406/RListKey';
import RForm from './component/20210406/RForm'
// 2021-04-07
import Calculator from './component/20210407/stateUp';
import WelcomeDialog from './component/20210407/comInherit'

// 2021-04-12
// import ScrollToTop  from './component/tsTest/ScrollToTop'
import FirstHook from './component/20210412/Hook'
import FavoriteMovies from './component/20210412/UseState'
import UseEffect from './component/20210412/UseEffect'

// 2021-06-05
import ParentRef from './component/20210605/ParentRef'


/* 错误监控 */
window.onerror = function(msg, url, lineNo, columnNo, error){
  console.log(msg, url, lineNo, columnNo, error, 1234);
}
window.addEventListener('error', e => {
  console.log('error:', e.target, e);
}, true)

// 学习包裹的组件
function ReturnApp() {
  return(
    <React.StrictMode>
      <App />
      
      {/* 左边 */}
      <div className="HLeft">
        <Clock />
        <Toggle />

        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
        {/* 20210405测试学习 */}
        <RState />
        <RToggle />
        {/* 2021 04 06 学习 */}
        <Numlist />
        <RForm />
        {/* 2021 04 05 状态提升 */}
        <Calculator />
        <WelcomeDialog />

        {/* 2021 04 12 回到顶部 */}
        {/* <ScrollToTop /> */}
      </div>

      {/* 右边 */}
      <div className="HRight">
        {/* hook 学习 */}
        <FirstHook />
        {/* <FirstHook />
        <FirstHook /> */}
        <FavoriteMovies />
        <UseEffect />

        <ParentRef />

      </div>
    

    </React.StrictMode>
  )
}


ReactDOM.render(
  <BrowserRouter>
    <ReturnApp />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
