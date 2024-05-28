import {useState,useCallback ,useEffect,useRef} from 'react'

const App = () => {
  const [length,setLength]=useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [password,setpassword]=useState("")
  
  //ref hook
  const passwordRef=useRef(null)
  const copypassword=useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,9999)
  }, [password]
  )

  const passwordGenerator=useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed){
      str+='0123456789'
    }
    if(charAllowed){
      str+='!@#$%^&*';
    }
    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()* str.length+1)
      pass+=str.charAt(char)
    }
    setpassword(pass)
  },[length,numberAllowed,charAllowed,setpassword])

  useEffect(()=>{
    passwordGenerator()
  },[passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-md px-4 py-4 my-8 text-blue-200 bg-black'>
      <h1 className='text-center text-3xl font-bold py-4'>Password Generator</h1>
      <div className='flex text-black shadow-md rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3' 
        placeholder='Password'
        readOnly 
        ref={passwordRef}/>
        <button className='outline-none bg-blue-500 py-1 px-3 shrink-0'
        onClick={copypassword}>Copy</button>
      </div>
      <div>
        <div className="flex justify-center text-sm gap-x-4">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={5} max={100} value={length} className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)}/>

            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            checked={numberAllowed}
            id='numberInput' className='cursor-pointer'
            onChange={()=>setnumberAllowed((prev)=>!prev)}/>
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            checked={charAllowed}
            id='charInput' className='cursor-pointer'
            onChange={()=>setcharAllowed((prev)=>!prev)}/>
            <label>Character</label>
          </div>
          {/* <button className='outline-none shadow-md rounded-md text-blue-200 bg-white py-1 px-3'
          onClick={passwordGenerator}
          >Generate</button> */}
        </div>
      </div>
    </div>
    </>
  )
} 

export default App
