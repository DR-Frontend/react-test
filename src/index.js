import React from "react";
import ReactDOM from "react-dom/client";
import {UserName} from "./Componentes";
import {Button, DoubleBtn} from './Button'
import {TaskCard} from "./Task";
import {Posts} from "./Post"

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e)=>{
  const texto = e.target.value
  console.log('El texto escrito es: '+ texto)
}

const users = [
  {
    id: 1,
    name: 'Bender',
    area: 'Contabilidad',
    image: 'https://robohash.org/user1'
  },
  {
    id: 2,
    name: 'Robocop',
    area: 'Ventas',
    image: 'https://robohash.org/user2'
  }
]

const Counter = ()=>{
  let counter = 100
  return(
    <div>
      <h3>Counter: {counter}</h3>
      <button>Sumar</button>
    </div>
  )
}

root.render(
  <>
    <h2>=COMPONENTES=</h2>
    <UserName
      name="Yerik"
      age={15}
      amount={3500}
      married={false}
      points={[10, 14,35,44,23]}
      address={{street:"Main street 123", city:"New York"}}
    />
    <UserName
      name="Omar" 
      age={43}
      amount={6500}
      married={true}
      points={[100,30,10]}
      address={{street:"Evergreen 321", city:"Springfield"}}
    />

    <h2>=USO DE BOOLEANO PARA CAMBIAR CSS=</h2>
    <TaskCard ready={true}/>
    
    <h2>=USO DE 'ON CLICK'=</h2>
    <Button text='Click me'/>
    <Button text='Pagar'/>
    <Button />
    <Button text={3000}/>
    <Button text={[1,2,3]}/>
    
    <DoubleBtn text2='Doble click'/>


    <h2>=USO DE 'ON CHANGE & ON SUBMIT'=</h2>
    <input onChange={handleChange} placeholder="texto en consola"/>

    <form onSubmit={(e)=>{
      e.preventDefault()
      console.log('Formulario enviado')
      alert('Enviado')
    }}>
      <p>Envío de formulario <button>Enviar formulario</button></p>
    </form>

    <h2>=API's=</h2>
    <Posts />

    <h2>=IMPRIMIR DATOS CON MAP=</h2>
    {users.map(user => {
      return <div>
        <img src={user.image} alt="API Robots"/>
        <p>Nombre: {user.name}<br/>
        Departamento: {user.area}<br/>
        ID: {'2002-'+user.id}</p>
      </div>
    })}

    <h2>= HOOKS =</h2>
    <Counter/>
     
  </>
);
