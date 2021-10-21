import React , { useState , createContext } from 'react'
import BuyerLogin from './BuyerLogin';
import './BuyerSignUp.css';
export const creatingContext = createContext();
function BuyerSignUp({history}) {
    const [ firstName , setFirstName ] = useState('');
    const [ lastName , setLastName ] = useState('');
    const [ password , setPassword] = useState('');
    const [ confirmPassword , setConfirmPassword ] = useState('');
    const [ email , setEmail ] = useState('');
    const [ passwordNotMatched , setPasswordNotMatched ] = useState(false);
    const [ signUpList , setSignUpList ] = useState([]);
    // const [ final , setFinal ] = useState('');
    const onFirstNameChange = e =>{
        setFirstName(e.target.value)
    }
    const onLastNameChange = e =>{
        setLastName(e.target.value)
    }
    const onPasswordChange = e =>{
        setPassword(e.target.value)
    }
    const onConfirmPasswordChange = e =>{
        setConfirmPassword(e.target.value)
    }
    const onEmailChange = e =>{
        setEmail(e.target.value)
    }
    const passwordChecking = () =>{
       if( (password.length>0 && confirmPassword.length>0) &&(
            password !== confirmPassword ) ){
                setPasswordNotMatched(true)
            }
            if(password.length === 0 || confirmPassword.length === 0){
                setPasswordNotMatched(false)
            }
    }
    const onSignUpSubmit = e =>{
        e.preventDefault();
        // if(confirmPassword === password ){
        //   history.push('/login')
        // }
        if(!passwordNotMatched){
            // history.push('/login')
            // setSignUpList([
            //     ...signUpList,
            //     {
            //         "firstName": firstName,
            //         "lastName" : lastName,
            //         "password" : password ,
            //         "confirmPassword" : confirmPassword ,
            //         "email" : email
            //     }
            // ])
            // setFinal(firstName)
        }
        else{
            alert('passwords mismatched')
        }
    }
    return (
        <div>
            <form>
                <div>
                    <span>First Name 
                    <span className = "required-field">*</span>
                        :</span>
                    <input 
                     type = "text"
                     placeholder = "enter your first name"
                     required
                     value = { firstName }
                     onChange = { onFirstNameChange }
                     />
                </div>
                <div>
                    <span>Last Name 
                    <span className = "required-field">*</span>
                        :</span>
                    <input
                     type = "text"
                     placeholder = " enter your last name"
                     required
                     value = { lastName }
                     onChange = { onLastNameChange }
                     />
                </div>
                <div>
                    <span>
                        email
                    <span className = "required-field">*</span>
                         :
                    </span>
                    <input 
                     type = "email"
                     placeholder = " enter your email"
                     required
                     value = { email }
                     onChange = { onEmailChange }
                     />
                </div>
                <div>
                    <span>
                        Password
                    <span className = "required-field">*</span>  
                         :
                    </span>
                    <input
                     type = "password"
                     placeholder = "enter your password"
                     value = { password }
                     onChange = { onPasswordChange }
                     required
                     />
                </div>
                <div>
                    <span>
                        Confirm Password 
                        <span className = "required-field">*</span>
                        :
                        </span>
                        <input
                         type = "password"
                         placeholder = " confirm your password"
                         required
                         value = { confirmPassword }
                     onChange = { onConfirmPasswordChange }
                     onBlur = { passwordChecking }
                         /> 
                </div>
                {/* <span className = {password === confirmPassword ? "passwordOkie": " passwordnotokie"}>
                 */}
                    {/* </span> */}
                    {
                passwordNotMatched ? <span className = "password-mismatched">passwords mismatched</span> :null                    
}
                <div>
                    <button 
                    type = "submit"
                    onClick = { onSignUpSubmit }
                    >
                        SignUp
                    </button>
                </div>
            </form>
            {/* <creatingContext.Provider> */}
            
    
                <BuyerLogin
                //  userList = { signUpList }
                firstName = { firstName }
                // final = {final}
                 />
                
            {/* </creatingContext.Provider> */}
        </div>
    )
}

export default BuyerSignUp
