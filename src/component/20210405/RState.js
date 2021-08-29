import React from 'react';

/**
 * state & 生命周期
 * this.setstate()
 * 
 * 事件处理
 */

/* 函数组件 */
// export default function RState(props){
//     return (
//         <React.StrictMode>
//             <h1>state & 生命周期</h1>
//             <h4>使用state全新封装可重复使用的clock组件</h4>
//             { props.date.toLocaleTimeString() }
//         </React.StrictMode>
//     )
// }

/* class组件 */
export default class RState extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }
    // 会在组件已经被渲染到DOM后运行
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    // 
    componentWillUnmount() {
        clearInterval( this.timerID )
    }
    // 计时函数
    tick(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        return (
            <React.StrictMode>
                <h1>state & 生命周期</h1>
                <h4>使用state全新封装可重复使用的clock组件</h4>
                { this.state.date.toLocaleTimeString() }
    
            </React.StrictMode>
        )
    }
}