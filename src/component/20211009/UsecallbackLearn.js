import React, { useState, memo, useCallback, useRef, useLayoutEffect } from "react"
// import dayJS from 'dayjs'

/* useCallback 组件的基本使用 */
const PageAusecallback = memo((props) => {
	console.log( 'pageA props', props );
	const {onClick, children } = props
	return <button onClick={onClick}>A { children  }</button>
})

function PageBusecallback({ onClick, name }) {
	console.log( 'pageB props', name );
	return <button onClick={onClick}>B {name}</button>
}
// memo 和 useCallback 一定需要配对使用，缺少一个都可能导致性能的不升反 “降”，毕竟无意义的浅比较也是要消耗一点点性能的
// 减少渲染 即 改变A的值的时候，B不会重新渲染
const PageCusecallback = memo(PageBusecallback)



export const UsecallbackLearn = () => {
	const [a, setA] = useState(0)
	const [b, setB] = useState(0)
	/* 关于 useCallback 联动 */
	const [text, setText] = useState('')
	const textRef = useRef()
	
	// const clickA = useCallback(() => {
	// 	setA(a + 1)
	// }, [a])
	const clickA = () => {
		setA(a + 1)
	}
	/* clickA 依赖有改变，没有被 useCallback 缓存 
		通过 useCallback 包裹onClick 来达到缓存的效果，
		即 useCallback 的依赖不变时不会重新生成 。
	*/
	const clickB = useCallback(() => {
		setB(b + 1)
	}, [b])

	/* 关于 useCallback 的联动 */
	// 通过将 input 中的值写入到 ref 中，
	// 能后使用 useLayoutEffect 动态更新数据
	useLayoutEffect(() => {
		textRef.current = text; // 将 text 写入到 ref
	})
	const handleTextClick = useCallback(
		() => {
			const currentText = textRef.current // 从 ref 中读取 text
			console.group(textRef, currentText, 'currentText 数据', )
			console.groupEnd()
		},
		[ textRef ],
	)
	/* 未优化 */
	// const handleTextClick = () => {
	// 	console.log('useCallback 未优化 Ref', textRef);
	// 	setText("点击修改！")
	// }


	return (
		<div>
			<h1> useCallback 的学习 </h1>
			<PageAusecallback onClick={ clickA } >{a}</PageAusecallback>
			<PageCusecallback onClick={ clickB } name={b}>{ b }</PageCusecallback>
			
			<h1>关于 usecallback 的联动</h1>
			<div className="linkage">
				<input value={text} onChange={ e=>setText(e.target.value) } />
				<button onClick={ handleTextClick }>callback Ref layoutEffect</button>
			</div>

		</div>
	)
}
export default UsecallbackLearn