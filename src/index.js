import React from 'react';
import ReactDOM from 'react-dom';
/* 路由 */
import { BrowserRouter } from "react-router-dom";

import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';
import { ConfigProvider  } from 'antd'

import '@/assets/reset.css'
import "antd/dist/antd.css"
import './index.css'
import './assets/font.css'

import App from './App';
import reportWebVitals from './reportWebVitals';

// console.log('BrowserRouter>>>', BrowserRouter);

/* Redux */
// import './store'

/* 错误监控 */
window.onerror = function(msg, url, lineNo, columnNo, error){
  console.log(msg, url, lineNo, columnNo, error, 1234);
}
window.addEventListener('error', e => {
  console.log('error:', e.target, e);
}, true)


ReactDOM.render(
  <ConfigProvider locale={locale} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root')
);
// 如果要开始测量应用程序的性能，请传递一个函数
// 记录结果（例如：reportWebVitals(console.log)）
// 或发送到分析端点。 了解更多：https://bit.ly/CRA-vitals
reportWebVitals();
