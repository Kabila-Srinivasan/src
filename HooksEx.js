import React, {useState} from 'react'

function HooksEx() {
    const[count,setCount]=useState(0)
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>{
        setCount(count+1)
    }}>ClickMe</button>
    <br><button onClick={()=>{
        setCount(count-1)
    }}>ClickMe</button></br>
    <br><button onClick={()=>{
    setCount(count+5)
    }}>ClickMe</button></br>
    </div>
  )
}

export default HooksEx