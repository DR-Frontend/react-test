import React,{useEffect, useState} from "react"

export const Counter = ()=>{
   const [counter, setCounter] = useState(0)
   const [mensaje, setMensaje] = useState('')

   useEffect(function(){
      console.log('render')
   },[counter])

   return(
      <div>
         <h3>Counter: {counter}</h3>
         
         <button onClick={function(){
            setCounter(counter +1)
         }}>Sumar
         </button>
         
         <button onClick={function(){
            if(counter <= 0){
               setCounter(0)
            } else{setCounter(counter -1)}
         }}>Restar
         </button>

         <button onClick={function(){
            setCounter(0)
         }}>
            Resetear
         </button><br/>

         <input onChange={e => setMensaje(e.target.value)}/>
         <button onClick={()=>{
            alert('El mensaje es: ' + mensaje)
         }}>Guardar</button>
      </div>
   )
}