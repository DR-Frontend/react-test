import PropTypes from 'prop-types'

export function Button({text='boton'}){
   return <button onClick={function (){
      console.log('Hicistesss click')
   }}>
      {text}
   </button>
}

Button.propTypes = {
   text: PropTypes.string.isRequired
}