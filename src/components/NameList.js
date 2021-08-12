
import React from 'react'
import Person from './Person'
function NameList() {
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
    const personList=persons.map(person=> <Person person={person}/> )
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
