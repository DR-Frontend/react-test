export function UserName(){
   const usuario ={
      name: "David",
      lastName: "Romero"
   }
   return <div>
      <p>Mi nombre es: {usuario.name} {usuario.lastName}</p>
   </div>
}

export function Married(){
   const married = true
   return <div> {married ? 'Estoy caZado' : 'No tengo costilla'} </div>
}

export function Greetings(saludo, nombre='usuario'){
   console.log(saludo, nombre)
   return <h1>{saludo} dice {nombre}</h1>
}