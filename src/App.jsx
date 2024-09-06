import React, { useEffect, useState, useMemo, lazy, Suspense, useContext } from 'react';
import { CountContext,SetCountContext } from './Context';

//first create a coxtext   api then wrap anyone thats want to use the telelported value inside a provider 
function App(){
  const[count,setCount] = useState(0)
  return (
    <div>
      <CountContext.Provider value={count}>
      <SetCountContext.Provider value={setCount}>
      <Count  ></Count>
      </SetCountContext.Provider>
      </CountContext.Provider>

    </div>
  )

} 

function Count(){
  const setCount = useContext(SetCountContext)
  return <div>
  <CountRenderer></CountRenderer>
   <Buttons  setCount= {setCount} ></Buttons> 
  </div>

}
function CountRenderer (){
  const count = useContext(CountContext)
 
  
  return <div>
    {count}
  </div>
}

function Buttons(){
  const count = useContext(CountContext)
  const setCount = useContext(SetCountContext)
  return <div>
    <button onClick={()=>{
      setCount(count+1);
    }}>Increase</button>


   <button onClick={()=>{
     setCount(count-1)
    }}>Decrease</button>
  </div>
}


export default App;












