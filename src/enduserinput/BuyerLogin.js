import React , { useState , useEffect } from 'react'
import  EndUserInputComp  from './EndUserInputComp';
import { Link } from 'react-router-dom';
function BuyerLogin() {
    const [ buyerName , setBuyerName ] = useState('');
    const [ buyerPassword , setBuyerPassword ] = useState('');
    const [ hidden , setHidden ] = useState(true);
    const [ loginSuccess , setLoginSuccess ] = useState(false);
    const onbuyerUserNameChange = e =>{
        setBuyerName(e.target.value)
    } 
    const onBuyerPasswordChange = e =>{
        setBuyerPassword(e.target.value)
    }
    const onShow = () =>{
        setHidden(hidden?false:true)
    }
    const onLoginButton = () =>{
        if(buyerName === "anil" && buyerPassword === "kumar"){
            alert(`welcome ${buyerName}`)
            setLoginSuccess(true)
        }else{
            alert('enter correct credentials')
        }
    }
    return (
        <div>
            <div>
                userName : 
                <input
                 type = "text"
                 value = {buyerName}
                 onChange = {onbuyerUserNameChange}
                  />
            </div>
            <div>
                password:
                <input
                 type = {hidden?"password":"text"}
                 value = {buyerPassword}
                 onChange = {onBuyerPasswordChange}
                  />
                  <span onClick = {onShow}>{hidden?<span>show</span>:<span>hide</span>}</span>
            </div>
            <div>
                <button type = "submit" onClick = {onLoginButton}>Login</button>
                <Link to= "/signup">Don't you have an account? SignUp</Link>
            </div>
            {
                loginSuccess && 
                 <EndUserInputComp buyerName = {buyerName} />

            }
        </div>
    )
}

export default BuyerLogin
