import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

    


 class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Bashar"
        }
        console.log('LifecycleA Constructor')
    }
    static getDerivedStateFromProps(props,state){
       console.log('LifecycleA getDerivedStateFromProps') 
       return null

    }
    componentDidMount(){
        console.log('LifecycleADidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'Asif'
        })
    }
   render() {
       console.log('LifecycleA render')
       return (
           <div>
               <div>
               LifecycleA
           </div>
           <button onClick={this.changeState}>change state</button>
           <LifecycleB/>
           </div>
           
       )
   }
}

export default LifecycleA
