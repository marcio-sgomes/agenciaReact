import React from 'react'

const Form = ({input,type,placeholder}) => {
  return (
    <form>
        <input
        value={input}
        type={type}
        placeholder={placeholder}
        />
        
        <button>Buscar</button>
    </form>
  )
}

export default Form