import React, {useState, useEffect} from 'react'

/**
 * useEffect 的基本使用
 */

const FunUseEffect = () => {
    const [count, setCount] = useState({title: 'Effect点击', num: 1})

    const handleCountClick = () => {
        setCount({ title: '开始点击', num: count.num + 1 })
    }

    useEffect( () => {

        document.getElementsByClassName('effectB')[0].innerText = count.title
        
    })

    return (
        <React.StrictMode>
            <p>useEffect 的基本使用</p>
            <span>useEffect {count.title} - {count.num} </span>
            <button className='effectB' onClick={handleCountClick}>
                effect click
            </button>
        </React.StrictMode>
    )
}
export default FunUseEffect