import React, {useState, useMemo} from 'react'
/* 使用 useMemo */

function Item(props) {
  return <li>{props.value}</li>
}

export default function UsememoHook() {
  const [range, ] = useState({min:0, max: 5})
  const [n, setN] = useState(0)

  const list = useMemo(() => {
    const list = []
    for (let i = range.min; i < range.max; i++) {
      list.push(<Item key={i} value={i} ></Item>)
    }
    return list
  }, [range.min, range.max])

  // const list = []
  // for (let i = range.min; i < range.max; i++) {
  //   list.push(<Item key={i} value={i} ></Item>)
  // }
  
  return (
    <div>
      <h3> 基本使用 useMemo </h3>
      <ul>
        { list }
      </ul>
      <input type="number"
        value={n}
        onChange={e=>{
          setN(e.target.value)
        }}
        style={{
          marginLeft: "1rem",
          verticalAlign: "top",
        }}
      ></input>
      
    </div>
  )
}
