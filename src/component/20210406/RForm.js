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

    render() {
        return(
            <React.StrictMode>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        名字：
                        <input type='text' name='name' autoComplete="off"
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                    <input type="submit" value='提交' />
                </form>
                <textarea value={this.state.TV}
                    onChange={this.thChange} 
                    cols="20" rows="3"></textarea>
                
            </React.StrictMode>
        )
    }
}