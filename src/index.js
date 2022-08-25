import React from "react";
import ReactDOM from "react-dom/client";
import {UserName} from "./componentes";
import {Button} from './button'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
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

    <Button/>

  </>
);
