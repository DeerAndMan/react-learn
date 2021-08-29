import React from 'react'

/**
 * 
 * @param {组件的地址} importComponent 
 */

function asyncComponent(importComponent) {
    console.log('引入的组件是？', importComponent);
    // 
    class AsyncComponent extends React.Component{
        constructor(props) {
            super(props)
            this.state = {
                component: null
            }
        }
        // 组件挂载阶段
        async componentDidMount() {
            const{ default: component } = await importComponent
            this.setState({
                component: component
            })
        }
        render() {
            const C = this.state.component
            console.log('C component是个什么', C);
            return C ? <C{...this.props} /> : null;
        }
    }
    console.log('导出的文件',  AsyncComponent );
    return AsyncComponent
}
export default asyncComponent