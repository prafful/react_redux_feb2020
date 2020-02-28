import React from 'react';
import User from '../childcontainers/username';
import UserDetails from '../childcontainers/userdetails';


class RemoteData extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                All Remote Users:
                <br></br>
                <br></br>
                <User></User>
                <hr></hr>
                <UserDetails></UserDetails>
            </div>
         );
    }
}
 
export default RemoteData;