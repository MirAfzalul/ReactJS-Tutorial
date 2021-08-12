import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogedIn: true
        }
    }
    
    render() {

        return this.state.isLogedIn && <div>Welcome Mir</div>

        // return(
        //     this.state.isLogedIn?
        //     <div>Welcome Mir</div> :
        //     <div>Welcome Guest</div>
        // )



        // let message
        // if(this.state.isLogedIn){
        //     message=<div>Welcome Mir</div>
        // }
        // else{
        //     message=<div>
        //         Welcome Guest
        //     </div>
        // }
        // return <div>{message}</div>


        // if(this.state.isLogedIn){
        //     return <div>Welcome Mir</div>  
        // }
        // else{
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Mir</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
