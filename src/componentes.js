export function UserName({name, age, amount, married, points, address}){
   return <div>
      <h1>{name}</h1>
      <ul>
         <li>Edad: {age}</li>
         <li>Monto: {amount}</li>
         <li>Edo. Civil: {married ? 'Casado' : 'Soltero'}</li>
         <li>Puntos: {points}</li>
         <li>Calle: {address.street}, Ciudad: {address.city}</li>
      </ul>
   </div>
}