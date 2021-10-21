import React from 'react'
import './Login.css';
function Login() {
    return (
        <div style={{boxSizing:'border-box',padding:'40px'}} className="uv">
            <form style={{display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        height :'60vh'
    }}>
                <div>
                    <input
                        type = "text"
                        placeholder = "Your Name"
                        className = "login-name"
                    />
                </div>
                <div>
                    <input
                        type = " email "
                        placeholder = "Email"
                        className = "login-email"
                    />
                    <input
                        type = "text"
                        placeholder = "Phone"
                        className = "login-phone"
                    />
                </div>
                <div>
                    <input
                        type = "text"
                        placeholder = "Tell us more..."
                        className = "login-textarea"
                    />
                </div>
                <div>
                    <button
                     className = "login-write-btn"
                    >Write to Us 
                    </button>
                    <button
                    className = "login-signup-btn"
                    >Login/SignUp
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login
