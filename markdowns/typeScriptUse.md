# 使用typeScript原则
***创建时间 2021-04-10***

**创建一个ts类型的react文件**
`create-react-app fileName --typescript`

## 在react中使用ts的几点原则和变化
1. 所有用到 `jsx` 语法的文件都需要以 `tsx` 后缀命名

2. 使用组件声明时的 `Component<p, s>` 泛型参数声明，来代替 `PropTypes`

3. 全局变量或则自定义的window对象属性，统一在项目根下 中进行声明定义

4. 对于项目中常用到的接口数据对象，在`types/`目录下定义好其结构化类型声明





