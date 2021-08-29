import React, { useState, useEffect, useRef, useImperativeHandle } from 'react'

import { Button } from 'antd';


const ChildrenHookRef = (props, ref) => {

    console.log('ChildrenHookRef', props, ref);
    const [num, setNum] = useState('123');
    const [timeNum, setTimeNum] = useState(1);

    const foreverRef = useRef( {idInterval: null} );
    

    // 添加，加函数
    const numAdd = ( prev ) => {
        console.log('prev', prev);
        setNum( prev++ )
    }

    // 子组件暴露部分api（属性）给父组件
    useImperativeHandle(ref, () => ({
        hookRefName: 'hook ref name',
        hookRefNum: num,
        hookRefAdd: numAdd
    }));

    
    // 计时
    useEffect(() => {
        let idInterval = setInterval(() => {
            setTimeNum( timeNum => timeNum+1 )
        }, 1000);
        /* 将定时器保存在useRef中，是因为：
            返回的ref 对象在组件的整个生命周期内保持不变。
        */
        foreverRef.current['idInterval'] = idInterval;
        if( timeNum === 5 ) stopInterval()
        return () => {
            clearInterval( foreverRef.current['idInterval'] )
        }
    }, [timeNum]);


    // 停止计时
    const stopInterval = () => {
        clearInterval( foreverRef.current['idInterval'] )
    }

    return(
        <div>
            ChildrenHookRef 子组件
            {props.name} {num},
            {'计时累加：'} {timeNum}
            <Button type="primary" onClick={ stopInterval } >停止计时</Button>
        </div>
    )
}

export default React.forwardRef( ChildrenHookRef );