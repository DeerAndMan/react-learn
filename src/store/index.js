import { createStore } from 'redux'
import * as actionTypes from './actionType'

console.log('actionTypes', actionTypes)
/**
 * reducer 本质上就是一个普通函数
 * @param {*} state 之前仓库中的状态（数据）
 * @param {*} action 描述要作什么的对象
 * @returns 
 */
function reducer(state, action) {
    // 返回一个新的状态
    if(action.type === "increase"){
        return state + 1
    } else if( action.type === "decrease" ){
        return state - 1
    }
    return state
}
// 第一参数 处理函数， 第二个参数，初始参数
// 创建一个数据仓库
const store = createStore(reducer, 10)

// 创建action来改变值
const action = {
    type: 'increase'
}

// 得到仓库中当前的值
console.log("Readux 值", store.getState());

// 向仓库分发 action
store.dispatch(action)

export default store