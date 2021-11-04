import React from 'react'

/**
 * form 表单
 */

export default class RForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            TV: '你好，这是在text area里的文本'
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event){
        alert('提交的名称：'+ this.state.value);
        event.preventDefault();
    }
    handleChange(event){
        // console.log('change:', this, event, event.target.value);
        this.setState({value: event.target.value})
    }

    // textarea change事件
    thChange = (e) => {
        this.setState({ TV: e.target.value })
    }

    /* React 声明周期函数 */
    componentDidMount() {
        // console.log('RFrom 表单组件初始化完成');
    }
    componentDidUpdate() {
        // console.log("RFrom 表单组件更新");
    }
    render() {
        return(
            <React.StrictMode>
                <h2 style={{
                    color: "red",
                    backgroundColor: '#3699e6'
                }}> 表单学习：受控组件，非受控组件 </h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        名字：
                        <input type='text' name='name' autoComplete="off"
                            value={this.state.value}
                            onChange={this.handleChange} 
                        />
                    </label>
                    <input type="submit" value='提交' />
                </form>
                <textarea 
                    cols="20" rows="3"
                    value={this.state.TV}
                    onChange={this.thChange} 
                >
                </textarea>
                
            </React.StrictMode>
        )
    }
}