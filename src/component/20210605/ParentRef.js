import { useRef } from 'react'

import ChildrenHookRef from './ChildrenHookRef'

export default function ParentRef() {
    // 
    const hookRef = useRef(null);

    // 获取子组件放回的属性，方法
    const getHookRef = (prev) => {
        // current 指向已经挂载到DOM上的元素
        console.log(hookRef.current, '>??<', prev)
        
        // console.log( hookRef.current.hookRefAdd(123) );

    }


    return(
        <div>
            parent ref 的基本使用
            <ChildrenHookRef 
                name="ChildrenHookRef prop num:" 
                ref={ hookRef } />
            <button onClick={ getHookRef }>hookRef</button>

        </div>
    )
}