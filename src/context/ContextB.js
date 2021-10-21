import React from 'react'
import { dataContext } from './ContextA'

function ContextB() {
    return (
        <div>
           <dataContext.Consumer>
               {
                   user =>{
                       return console.log(user,'contextb')
                   }
               }
        </dataContext.Consumer>
        </div>
    )
}

export default ContextB
