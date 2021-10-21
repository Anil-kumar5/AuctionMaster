import { useState } from "react";
import './VenuTask.css';
function VenuTask() {
    const [ list , setList] = useState([]);
        const [ input , setInput ] = useState('');
        const [ selectChange , setSelectChange ] = useState('');
        const onInputChangeHandler = e =>{
            setInput(e.target.value)
        }
        const onButtonClick = () =>{
            setList([...list,{"name":input, "value": "completed"}])
        }
        const optionChange = (val,option) => {
            let tempList = []
            list.map(item => {
                if(item.name === option.name) {
                    tempList.push({"name": item.name, "value": val})
                } else {
                    tempList.push(item)
                }
            })

            setList(tempList)
        }
    return (
        <div>
            {
                list.map(li =>{
                    return(
                        <div>
                            <table>
                                <tr>
                                    <td>
                                        {li.name}
                                    </td>
                                    <td>
                                        <select onChange = {(e)=>optionChange(e.target.value,li)} value={li.value}
                                        className = {li.value==="pending"?"pending":"another"}
                                        >
                                            <option value ="pending" style={{backgroundColor:'red'}}>pending</option>
                                            <option value = "completed" style = {{backgroundColor:'yellow'}}>completed</option>
                                            <option value = "uncompleted" style = {{backgroundColor:'green'}}>uncompleted</option>
                                            
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
             {
                 console.log(selectChange)
             }
        </div>
    )
}

export default VenuTask
