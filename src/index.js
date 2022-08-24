import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greetings() {
  return (
    <div>
      <h1>Esto es un componente</h1>
      <p>Con su respectivo parrafo</p>
    </div>
  );
}

function Suma() {
  const numero = 30;
  return <div> La suma es: {10 + numero} </div>;
}

function Casado() {
  const married = true;

  return <div> {married ? "Estoy caZado" : "No tengo costilla"} </div>;
}

function Id(){
  const user = {
    name: "Iris",
    lastName: "Lara"
  }

  return <div>
    <h2>Hola me llamo {user.name} {user.lastName}</h2>
  </div>
}

function Operacion(){
  function resta(a,b){
    return a - b
  }
  return <div>
    <p>{resta(30,10)}</p>
  </div>
}

root.render(
  <>
    <Greetings />
    <Suma />
    <Casado />
    <Id/>
    <Operacion/>
  </>
);
