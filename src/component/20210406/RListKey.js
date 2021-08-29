import React from 'react'
// 全局样式
import '../../assets/RListKey.css';

// 局部样式
import styleName from '../../assets/test.module.css'

/* 
    key 因该是唯一的，
    key 只是在兄弟节点之间必须唯一，
        它们不需要是全局唯一
*/

const num = [1, 2, 3];
const numList = num.map( 
    num => <li key={num.toString()}>{ num * 2 }</li>
)
// 全局的key允许出现相同值
const numListT = num.map(
    num => <li key={num.toString()}>非唯一Key {num}</li>
)
// li组件
// function ListItem(props) {
//     return <li>{props.v}</li>
// }

export default function Numlist(){
    return (
        <React.StrictMode>
            {/* <ul className='abc'>{ numList }</ul> */}
            <ul className={`removeListStyle ${styleName['abc']}`}>{ numList }</ul>
            <ul>{ numListT }</ul>
            <ul>
                { num.map( n =>
                    // <ListItem key={n.toString()} v={n} />
                    <li key={n.toString()}>{n+'表达式'}</li>
                )}
            </ul>
        </React.StrictMode>
    )
}
