import React from 'react';
import { connect } from "react-redux";



class User extends React.Component {
    state = {  }

    displayAllUsers = function(){
        /* return this.props.allusers.map(user =>{
            console.log(user.name);
            //return {user.name}
        }) */
        return (
            <div>All users!</div>
        )
    }

    render() { 
        return ( 
            <div>
                List all Users: 
                {this.displayAllUsers()} 
            </div>
         );
    }
}

function convertStoreToProps(store){
    console.log("Store as received in User container!");
    console.log(store);
    return {
        allusers:store.allremoteUsers
    }
}
 
export default connect(convertStoreToProps)(User);