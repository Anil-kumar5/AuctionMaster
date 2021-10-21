import React , { useState , useEffect } from 'react';
import axios from  'axios';
import ContextB from './ContextB';
export  const dataContext = React.createContext();
function ContextA() {
    const [fetchedData , setData ] = React.useState([]);
    useEffect ( () =>{
      axios.
      get('https://jsonplaceholder.typicode.com/comments')
      .then(res => setData(res.data))
    },[])
    console.log(fetchedData)
  
    return (
        <div>
            {

            }
         <dataContext.Provider value={fetchedData}>
             <ContextB/>
             </dataContext.Provider>   
        </div>
    )
}

export default ContextA
