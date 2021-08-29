import React from 'react'


/**
 * 状态提升
 */

// function BoilingVerdict(props) {
//     if(props.celsius >= 100) return <p>水开了</p>
//     return <p>水没开</p>
// }


export default class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {temperature: 123}
    }
    handleChange = () => {
        console.log('change input 事件', this);
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                
                <span>输入摄氏温度</span>
                <input type="text" value={temperature} onChange={this.handleChange} />

            </fieldset>
        )
    }
}




