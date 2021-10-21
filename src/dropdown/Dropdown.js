import React, { useState } from 'react'

function Dropdown() {
    const [ inputData , setInputData ] = React.useState('');
    const [a , setA] = React.useState(false);
    const onInpuctChangeHandler = e =>{
        setInputData(e.target.value)
    }
    const onButtonClickHandler = e =>{
        console.log(inputData)
        setA(true)
    }
    return (
        <div>
            <input type = "text" onChange = {onInpuctChangeHandler}/>
           <button onClick = {onButtonClickHandler}>ADD</button>
        </div>
    )
}

export default Dropdown

// export const VenuTask = () =>{
//     const [ list , setList] = useState([]);
//     const [ input , setInput ] = useState('');
//     const onButtonClick = () =>{
//         setList([...list,input])
//     }
    
//     return(
//         <div>
//      <input type = "text" value = {input} onChange = {e => setInput(e.target.value)}/>
//      <button onClick = {onButtonClick}>ADD</button>
//      {
//         list.map(list =>{
//             return(
//         <div>
//             {list}
           
//                 <select>
//                     <option>completed</option>
//                     <option>uncompleted</option>
//                     <option>pending</option>
//                 </select>
//             </div>
        
//             )    
//         })
//      }
//         </div>
       
//     )
// }
