import React from 'react'

/**
 * 事件处理
 * onClick = {this.handleClick}
 * onClick = {() => this.handleClick()}
 */

export default class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num: 1
        };
        // 为了在回调中使用 this，这个绑定是必不可少的
        this.addAct = this.addAct.bind(this)
    }
    addAct(){
        // console.log('this 1', this.state.num == 1 ? this : '');
        this.setState(state => ({
            num: state.num + 1
        }), () => {
            console.log('异步回调值', this.state.num);
        })
        console.log('点击后值', this.state.num );
    }
    /* 实验性语法，解决绑定this的麻烦, class fields */
    handleClick = () => {
        console.log('this is', this.state.num);
        this.setState(state => ({
            num: state.num + 2
        }))
    }
    /* ES6 箭头函数的形式，
        每次渲染都会创建不同的回调函数。
        当作为回调函数prop传入子组件时，这些组件会
        进行额外的重新渲染，存在性能问题
    */
    arrowClick() {
        console.log('this arrow', this);
        this.setState(state => ({
            num: state.num + 3
        }))
    }

    /* 事件传递参数 */

    // 当使用prototype.bind来实现时，事件对象e会作为第二个参数隐形的传递过去。
    deleteProto(id,e) {
        console.log('proto 传递参数', id, e);
    }

    // 当使用箭头函数时，事件对象e必须显性的传递过去
    deleteArrow(id, e){
        console.log('箭头函数传递参数', id, e);
    }


    render() {
        return(
            <React.StrictMode>
                <h1>toggle 函数方法</h1>
                <button onClick={this.addAct}>{ this.state.num }</button>
                {/* 实验语法 public class fields */}
                <button onClick={this.handleClick}> public { this.state.num } </button>
                {/* 箭头函数方式 */}
                <button onClick={()=>this.arrowClick()}>arrow</button>
                
                {/* 向事件处理程序传递参数 */}
                <button className='abc' onClick={this.deleteProto.bind(this, 'id')}>Delete Proto</button>
                <button onClick={e => this.deleteArrow('idArrow', e)}>Delete Arrow</button>

            </React.StrictMode>
        )
    }
}

