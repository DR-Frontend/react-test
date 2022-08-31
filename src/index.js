import React from "react";
import ReactDOM from "react-dom/client";
import {UserName} from "./Componentes";
import {Button, DoubleBtn} from './Button'
import {TaskCard} from "./Task";
import {Posts} from "./Post"
import { Counter } from "./Counter";

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
    <hr/>

    <h2>=USO DE BOOLEANO PARA CAMBIAR CSS=</h2>
    <TaskCard ready={true}/>
    <hr/>
    
    <h2>=USO DE 'ON CLICK'=</h2>
    <Button text='Click me'/>
    <Button text='Pagar'/>
    <Button text={3000}/>
    <Button text={[1,2,3]}/>
    
    <DoubleBtn text2='Doble click'/>
    <hr/>

    <h2>=USO DE 'ON CHANGE & ON SUBMIT'=</h2>
    <input onChange={handleChange} placeholder="texto en consola"/>

    <form onSubmit={e=>{
      e.preventDefault()
      console.log('Formulario enviado')
      alert('Enviado')
    }}>
      <p>Envío de formulario <button>Enviar formulario</button></p>
    </form>
    <hr/>

    <h2>=API's=</h2>
    <Posts />
    <hr/>

    <h2>=IMPRIMIR DATOS CON MAP=</h2>
    {users.map((user,i) => {
      return <div key={i}>
        <img src={user.image} alt="API Robots"/>
        <p>Nombre: {user.name}<br/>
        Departamento: {user.area}<br/>
        ID: {'2002-'+user.id}</p>
      </div>
    })}
    <hr/>

    <h2>= HOOKS: USE STATE =</h2>
    <Counter/>
    <hr/>

    <h2>= HOOKS: USE EFFECT =</h2>



     
  </>
);
