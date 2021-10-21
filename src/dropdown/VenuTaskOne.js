import React , {useState} from 'react'
import './VenuTask.css';
function VenuTaskOne() {
    const [ list , setList] = useState([]);
    const [ input , setInput ] = useState('');
    const [ selectChange , setSelectChange ] = useState('');
    const onInputChangeHandler = e =>{
        setInput(e.target.value)
    }
    const onButtonClick = () =>{
        setList([...list,{"name":input , "value":selectChange}])
    }
    return (
        <div>
            {
                list.map(li =>{
                    return(
                        <div>
                            <table>
                                <tr className = {li.value==="pending"?"pending":"another"}>
                                    <td>
                                        {li.name}
                                    </td>
                                    <td>
                                        <select onChange = {(e)=>setSelectChange(e.target.value)}>
                                            <option value ="pending">pending</option>
                                            <option value = "completed">completed</option>
                                            <option value = "uncompleted">uncompleted</option>
                                            
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    )
                })
            }
             <input 
             type = "text"
             value = {input}
             onChange = {onInputChangeHandler}
             />
             <button onClick = {onButtonClick}>ADD</button>
        </div>
    )
}

export default VenuTaskOne
