import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter] = useState(0)
 const incrVal = ()=>{
  let coun=counter+1 
  setCounter(coun)
 }
 const decVal =()=>{
  let coud=counter-1
  setCounter(coud)
 }

  return (
    <>
      <h2>i will create a counter on this project</h2>
      <h2>Counter Value : {counter}</h2>
      <button onClick={incrVal}>Increase Value</button>
    
      <button onClick={decVal}>Decrease Value</button>
    </>
  )
}

export default App
  