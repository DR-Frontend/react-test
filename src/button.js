import PropTypes from 'prop-types'

export function Button({text='boton'}){
   return <button onClick={function (){
      console.log('Hicistesss click')
   }}>
      {text}
   </button>
}

export function DoubleBtn ({text2}){
   return <button onDoubleClick={()=>{
      console.log('Diste Doble click')
   }}>
      {text2}
   </button>
}

Button.propTypes = {
   text: PropTypes.string.isRequired
}