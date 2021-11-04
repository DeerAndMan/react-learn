import React from 'react'
import store from '../store'

console.log('仓库', store.getState())
store.dispatch({type: 'decrease'})
console.log('数据改变后', store.getState())

export default function ReduxLearn(props) {
  
  
  return (
    <div className="my__component__wrapper">
      <h1>Redux的基本使用学习</h1>
    </div>
  )
}
