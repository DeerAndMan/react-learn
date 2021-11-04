import React, { Component } from 'react'
import AhookLearn from '../component/ClassReact/AhookLearn'
import EsType from '../component/ClassReact/EsType'

// import '../assets/global.less'

export default class ClassReact extends Component {
  render() {
    return (
      <div className="my__component__wrapper">
        <h1>class 组件学习</h1>
          <EsType />
          <AhookLearn />
      </div>
    )
  }
}
