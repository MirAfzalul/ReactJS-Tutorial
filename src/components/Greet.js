import React from 'react'

const Greets=(props)=> {
console.log(props)
return <div>
     <h1>Hello {props.name}</h1>
     {props.children}
    </div>
}

export default Greets