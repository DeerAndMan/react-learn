import { useCallback, useRef } from 'react'

import ChildrenHookRef from './ChildrenHookRef'

export default function ParentRef() {
    // 创建一个 ref
    const hookRef = useRef(null);
    let callBackRef = useRef( null )

    // 获取子组件放回的属性，方法
    const getHookRef = (prev) => {
        // current 指向已经挂载到DOM上的元素
        console.log(hookRef.current, '>??<', prev)
        // console.log( hookRef.current.hookRefAdd(123) );
    }

    // 创建好 ref 之后 自动触发 callback 函数
    callBackRef = useCallback(( node ) => {
        console.log( node, 'node', callBackRef );
    }, [])

    return(
        <div>
            <h2>parent ref 的基本使用</h2>
            <ChildrenHookRef 
                name="ChildrenHookRef prop num:" 
                ref={ hookRef } 
            />
            <button onClick={ getHookRef }>Ref 获取函数子组件</button>
            <p>
                Ref 初始化后自动调用回调
                <button ref={ callBackRef }
                    onClick={() => {
                        console.log( callBackRef.current );
                    }}
                >自动初始化</button>
            </p>

        </div>
    )
}