import React, {useContext} from 'react'

/* 创建上下文 */
const ctx = React.createContext()
// console.log('创建上下文 ctx', ctx)

function Test() {
  const val = useContext(ctx)
  // console.log( 'context上下文 val', val )
  return (
    <h3> useContext 上下文的值：{val} </h3>
  )
}

/* context 上下文 */
export default function UseContextHook() {
  return (
    <div>
      <ctx.Provider value="123">
        <Test />
      </ctx.Provider>
    </div>
  )
}
