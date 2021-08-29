// import React from 'react'
// import { Spin } from 'antd';
// 实现，路由懒加载 已经停止更新
// import Loadable from 'react-loadable'

// // 加载动画 通用懒加载
// const loadingComponent = () => {
//     return(
//         <div>
//             <Spin size="large" />
//         </div>
//     )
// };
// // 当不传加载动画时候使用默认的加载动画
// export default ( loader, loading = loadingComponent ) => {
//     return Loadable({
//         loader,
//         loading,
//         // delay: 200 // 防止组件加载过快出现的闪烁
//     })
// }


/* 新的loadable组件  */
import Loadable from '@loadable/component'

// const OtherComponent = Loadable(() => import('./OtherComponent'))

export default ( url ) => {
    return Loadable( () => import( url ) )
}




// const LoadableComponent = Loadable({
//     loader: () => import('./my-component'),
//     loading: '<div>加载中...</div>',
//     delay: 200 // 防止组件加载过快出现的闪烁
// });

// export default class Loading extends React.Component {
//     render() {
//         return <LoadableComponent />
//     }
// } 