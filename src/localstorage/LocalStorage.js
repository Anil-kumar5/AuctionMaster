import React from 'react'

function LocalStorage() {
    const [ name , setName ] = React.useState('');
    const [ note , setNote] = React.useState('');
    const [ list , setList ] = React.useState([]);
    const onClickHandler = () =>{
        setList([...list,
            {"name":name,
            "note" :note
        
        }])
    }
    console.log(list)
    React.useEffect(()=>{
      const data = localStorage.getItem('list')
      if(data){
          setList(JSON.parse(data))
      }
    },[])
    React.useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(list))
    })
    const onRemoveCliCkHandler = () =>{
        localStorage.removeItem('list')
        window.location.reload()
    }
    return (
        <div>
            <input
             type = "text"
             value = {name}
             onChange = {e =>setName(e.target.value)}
             />
             <input
             type = "text"
             value = {note}
             onChange = {e =>setNote(e.target.value)}
             />
             <button
              onClick = {onClickHandler}
              >
                  add
              </button>
              <button onClick = {onRemoveCliCkHandler}>Remove</button>
              {
                  list.map(list =><div>{list.name}----{list.note}</div>)
              }
        </div>
    )
}

export default LocalStorage
