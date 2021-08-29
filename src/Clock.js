import React from 'react';
/**
 * state & 生命周期
 * 真正可复用的组件，设置自己的计时器
 * state 与 props 类似，但是state是私有的
 * 并且完全受控于当前组件
 */

class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }
    /**
     * componentDidMount，componentWillUnmount
     * 被称之为生命周期方法
     */
    /** 
     * 挂载，在第一次渲染后调用，只在客户端
     * 该方法会在组件已经被渲染到DOM中后运行
    */
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 
        1000);
    }
    /**
     * 卸载，在组件从DOM中移除之前立刻被调用
     * 生命周期方法中清除计时器
     */
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
        <div>
            <h1>react clock state</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            <a href="#!" onClick={clickMe}>
                click me
            </a>
        </div>
        )
    }
}

function clickMe(e) {
    // console.log('The link was chicked.', e);
    // 阻止默认行为
    e.preventDefault();
    // return false
}

export default Clock;

/**
 * class语法定义一个组件，
 * 通常的做法是将事件处理函数声明为class中的方法
 */
class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }

        // 为了在回调中使用 this，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
        // console.log('this是什么', this);
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON': 'OFF'}
            </button>
        )
    }
}
export {Toggle}