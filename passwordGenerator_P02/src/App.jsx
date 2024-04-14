import { useState,useCallback } from 'react'
import './App.css'

function App() {
 const [length , setLength] = useState(8)
 const [numAllow ,setnumAllow ] = useState(false)
 const [charAllow ,setCharAllow ] = useState(false)
 const [password ,setPassword ] = useState("")
 
 const passwordGenerator =useCallback(()=>{
  let pass =""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numAllow){
    str+="0123456789"
  }
  if(charAllow){
    str+=" ! @ # $ % ^ & * ( ) - _ = + \ | [ ] { } ;"
  }

  for(let i=1;i<=array.length;i++){
    let char = Math.floor(Math.random()*str.length + 1)
    pass=str.charAt(char)
  }

},
 [length,numAllow,charAllow,setPassword])

  return (
    <>
     <h1 className='text-xl-2 text-center text-white' >Password Generator</h1>
    </>
  )
}

export default App
