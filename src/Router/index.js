import React from 'react'
import styles from '../assets/router.module.css'

// import asyncComponent from './AsyncComponent'
// 懒加载
// import LazyLoadable from '../utils/LazyLoadable'
/* 新的loadable组件  */
import Loadable from '@loadable/component'

/* 路由 */

// 导入路由
import {
    BrowserRouter as Router, // 把BrowserRouter输出到Router中
    Switch,
    Route,
    Link,
    useParams, 
    NavLink,
    Redirect
} from 'react-router-dom'

import Home from '../views/Home'
// import About from '../views/About'


/* 自定义组件 */
function Topic() {
    console.log('Topic', useParams());
    return <h3 style={{color: 'red'}}>Topic</h3>
}



export default function Routers() {
    return (
        <Router>
            <ul>
                {/* <NavLink />是<Link />的一种特殊类型*/}
                <li><Link to='/home'>Home</Link></li>
                {/* <li><Link to='/about'>About</Link></li> */}
                <li>
                    <NavLink to='/about' activeClassName={styles.activeCName}>
                        About
                    </NavLink>
                </li>
                <li><NavLink to='redirect'>redirect</NavLink></li>
                    
            </ul>
            {/* <Switch /> 通过查找所有的子<Route />
                并渲染与当前URL匹配的第一个<Route /> 的内容 */}
            <Switch>
                {/* 路径= "/"的路径始终匹配任何路径的URL 
                    exact：属性表示精准匹配 */}
                <Route exact path="/" component={Topic}>
                    {/* <Topic /> */}
                </Route>
                <Route 
                    path="/home" 
                    // component={ asyncComponent(() => import('../views/Home')) }
                    // component = { asyncComponent('../views/Home') }
                    name= 'home' >
                    <Home />
                </Route> {/* LazyLoadable( ()=>import("../views/About") ) */}
                <Route path="/about" component={ Loadable(() => import("../views/About")) }>
                    {/* <About /> */}
                </Route>
                <Route path='/redirect'>
                    {/* 重定向 Redirect */}
                    <Redirect to="/home" />
                </Route>
                
            </Switch>

        </Router>
    )
}
