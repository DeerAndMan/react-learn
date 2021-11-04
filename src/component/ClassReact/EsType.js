import React from 'react'
import styles from '../../assets/classReact.module.less'


/* 
  在js中 Number 类型只能安全地表示
  -9007199254740991 (-(2^53-1)) 和9007199254740991(2^53-1)之间的整数，
  任何超出此范围的整数值都可能失去精度。
*/
// 因为隐式类型的转换 所以 10n + 10 会报错 正确使用方法 10 + Number(10n)
const bigInt_one = 90099999999999992n

/* 
  symbol 是一种数据类型 本质上是一种唯一标识符

*/
let id1 = Symbol('id');
let id2 = Symbol('id');


export default function EsType() {
  return (
    <React.StrictMode>
      <div className={ styles["G__div"] }>
        <span>less test</span>
        <span> BigInt Symbol</span>
      </div>
      <div className={ styles['es6Type'] }>
        <p> bigInt </p>
        { 2**53 } { "类型:" + typeof bigInt_one }
        { bigInt_one === 90099999999999998 ? ' true' : ' false' }
        <p> symbol 唯一标识符 </p>
        { "symbol判断id1,id2是否相等 " } {id1 === id2 ? ' true': ' false' }
      </div>
    </React.StrictMode>
  )
}
