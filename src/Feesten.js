import React, { useEffect, useState }  from 'react';
import Appbar from './Components/Appbar'
import { render } from 'react-dom';
import Calendar from 'moedim';

const Feesten = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
      setDate(date);
      console.log(date);
    };

    // useEffect(()=>{
    //     fetch("http://localhost:8080/user/getAll")
    //     .then(res=>res.json())
    //     .then((result)=>{
    //       setUsers(result);
    //     }
    //   )
    //   },[])

      return (
        <div>
          <Appbar/>
           <div className='b'> 
            <Calendar onChange={onChange} value={date}/>
           </div>
        </div>
      );
}
export default Feesten;