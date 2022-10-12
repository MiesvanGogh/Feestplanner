import React, { useEffect, useState }  from 'react';
import Appbar from './Components/Appbar'

const Feesten = () => {
    const[users, setUsers]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/user/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setUsers(result);
        }
      )
      },[])

    return(
        <div className="app">
            <div>
                 <Appbar />
            </div>  
            <div>
                <h1>Feesten</h1>
            </div> 
        </div>
    )
}
export default Feesten;