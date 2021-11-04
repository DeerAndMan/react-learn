import React from 'react'
import styles from '@/assets/router.module.css'

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
    // useParams, 
    NavLink,
    Redirect
} from 'react-router-dom'

import Home from '@/views/Home'


export default function Routers() {
    return (
        <Router>
            <ul className={styles['nav']}>
                {/* <NavLink />是<Link />的一种特殊类型*/}
                <li><Link to='/home'>Home</Link></li>
                <li>
                    <NavLink to='/about' activeClassName={styles.activeCName}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="classReact" activeClassName={styles.activeCName} >
                        classReact   
                    </NavLink>
                </li>
                <li>
                    <NavLink to='hookLearn' activeClassName={styles.activeCName}>
                        HookLearn
                    </NavLink>
                </li>
                <li>
                    <NavLink to="reduxLearn" activeClassName={styles.activeCName}>
                        reduxLearn
                    </NavLink>
                </li>
            </ul>
            {/* <Switch /> 通过查找所有的子<Route />
                并渲染与当前URL匹配的第一个<Route /> 的内容 */}
            <Switch>
                {/* 路径= "/"的路径始终匹配任何路径的URL 
                    exact：属性表示精准匹配 */}
                <Route exact path="/">
                    {/* 重定向 Redirect */}
                    <Redirect to="/home" />
                </Route>
                <Route 
                    path="/home" 
                    // component={ asyncComponent(() => import('../views/Home')) }
                    // component = { asyncComponent('../views/Home') }
                    name= 'home' >
                    <Home />
                </Route>
                <Route path="/about" component={ Loadable(() => import("../views/About")) }>
                    {/* <About /> */}
                </Route>
                <Route path='/classReact' component={ Loadable(() => import("@/views/ClassReact")) } >
                </Route>
                <Route path='/hookLearn' component={ Loadable(() => import("@/views/HookLearn")) } >
                </Route>
                <Route path="/reduxLearn" component={ Loadable(() => import("@/views/ReduxLearn")) }>     
                </Route>
                
            </Switch>

        </Router>
    )
}
