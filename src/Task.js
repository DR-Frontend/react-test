import './task.css'

export function TaskCard({ready}){
   return <div className='Card'>
      <h1 className='title'>Primer tarea</h1>
      <span
       className={ready ? 'bg-ok' : 'bg-pend'}
      >{ready ? 'Tarea finalizada' : 'Tarea pendiente'}</span>
   </div>
}