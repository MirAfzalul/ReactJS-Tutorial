import React, { Component } from 'react'




 class LifecycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"Bashar"
         }
         console.log('LifecycleB Constructor')
     }
     static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps') 
        return null

     }
     componentDidMount(){
         console.log('LifecycleBDidMount')
     }
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                lifecycleB
            </div>
        )
    }
}

export default LifecycleB
