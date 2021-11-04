import React from "react"
import loadable from '@loadable/component'

const UsecallbackLearn = loadable(() => import('@/component/20211009/UsecallbackLearn'))
const UseContextHook = loadable(() => import('@/component/20211009/UseContextHook'))
const UsememoHook = loadable(() => import('@/component/20211009/UsememoHook'))

export const HookLearn = () => {

  return(
    <div className="my__component__wrapper">
      Hook learn
      <UseContextHook />
      <UsecallbackLearn />
      <UsememoHook />
    </div>
  )
}
export default HookLearn