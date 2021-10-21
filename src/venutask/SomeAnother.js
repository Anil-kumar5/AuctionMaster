import React, { Component } from 'react'

export class SomeAnother extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput  : "",
            selectValue : "",
            userData : []
        }
    }
    updateInput(value){
        this.setState({
            userInput : value
        });
    }
    addItem = () =>{
        this.setState({
            userData : [...this.state.userData,{
                "task" :this.state.userInput,
                "value" : "completed"
            }]
        })
    } 
    selectChange = (val,option) =>{
        let tempList = []
        this.state.userData.map( data =>{
            if(data.task === option.name){
                tempList.push({"task":data.task,"value":val})
            }else{
                tempList.push(data)
            }
        })
        this.setState({
            selectValue : tempList
        })
    }
      select =(
          
              this.state.userData.map(li =>{
              return  <select  onChange = {e => this.selectChange(e.target.value,li)} value={li.value}>
            <option> In Progress</option>
            <option>Completed</option>
            <option>Open</option>
            <option>On Hold</option>
          </select>
              })
   )
    render() {
        console.log(this.state.userInput)
        console.log(this.state.selectValue,'select')
        console.log(this.state.userData,'userdata');
        console.log()
        const c = 10;
        console.log(c)
        return (
            <div>
                <input
                 type = "text"
                 value = {this.state.userInput}
                 onChange = {item =>this.updateInput(item.target.value)}
            />
            <button
                 onClick = {this.addItem}>ADD</button>
                 {
                     this.state.userData.map(user =>{
                         return(
                             <div>
                                 {user.task}
                                 {
                                     user.value
                                 }
                             </div>
                         )
                     })
                 }
                 </div>
        )
    }
}

export default SomeAnother
