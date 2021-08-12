
import React from 'react'
import Person from './Person'
function NameList() {
    const names=['Mir','Asif','Bashar','Mir']
    const persons = [
        {
            id:1,
            name:'Mir',
            age: '18',
            skill: 'React'
        },
        {
            id:2,
            name:'Bashar',
            age: '28',
            skill: 'Vue'  
        },
        {
            id:3,
            name:'Asif',
            age: '24',
            skill: 'Laravel'
        }
    ] 
    const nameList=names.map((name, index) => <h2 key={index}>{index} {name}</h2> )
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
