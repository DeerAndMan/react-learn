import React, { useState, useEffect } from 'react'

function FirstHook() {
    // 声明一个新的叫做 "count" 的 state 变量
    const [count, setCount] = useState(12);
    const [clickNum, setClickNum] = useState(0)

    // 相当于 componentDidMount 和 componentDidUpdate
    useEffect( () => {
        // 使用浏览器的API更新页面标题
        let effClick = document.getElementsByClassName('effClick')[0];
        effClick.innerText = `useEffect 测试 frequency: ${clickNum}`
    })

    let handClick = () => {
        setCount(count + 1)
        /* 过时状态 */
        setTimeout(function delay () {
            // 错误使用方法，delay是一个过时的闭包
            // setClickNum(clickNum + 1)
            // 使用函数方法来更新 clickNum
            setClickNum( clickNum => clickNum + 1 )
        }, 3000)
    }

    return (
        <React.StrictMode>
            <h3>Hook 测试使用</h3>
            <span>useState点击{count}</span>
            <button onClick={ handClick }>
                点击
            </button>
            <span className={"effClick"}>useEffect 测试</span>

        </React.StrictMode>
    )
}





export default FirstHook;