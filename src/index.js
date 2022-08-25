import React from "react"
import ReactDOM from "react-dom/client"
import {UserName, Married, Greetings} from './componentes'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <>
    <UserName/>
    <Married />
    <Greetings saludo='Hola' nombre='Hugo'/>
    <Greetings saludo='Aló' nombre='Paco'/>
    <Greetings saludo='Hi' nombre='Luis'/>
    <Greetings saludo='Buen día' nombre='Laura'/>
    <Greetings saludo='Aloha'/>
  </>
);
