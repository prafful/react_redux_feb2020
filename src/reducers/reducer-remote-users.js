import axios from "axios"

export default function getRemoteUsers(){
    var users = []
    return axios.get("https://jsonplaceholder.typicode.com/users")
                .then( response =>{
                        console.log(response.data);
                        response.data.map(user =>{
                            console.log(user);
                            users.push(user)
                        })
                        return users
                  
                })
}