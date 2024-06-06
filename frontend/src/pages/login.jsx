import React, { useState } from 'react'
import './css/login.css'

const login = () => {

    const [active,setactive] = useState('signin')

    const formset = (name)=>
    {
        setactive(name)
    }

  return (
    <div className='loginmain'>
        <div className="loginheader">
            <h1>Project Management</h1>
        </div>
        <div className="loginhead">
            <div className="left">
                <img src="/sideimage2.jpg" alt="" />
            </div>
            <div className="right">
                <div className="loginbutton">
                    <button onClick={()=>formset('signin')}>Sign in</button>
                    <button onClick={()=>formset('signup')}>Sign up</button>
                </div>


                <div className={`loginform ${active==='signin'?'active':''}`}>
                    <h1>Sign in </h1>
                    <div className="emailform">
                        <label>Email:</label>
                        <input type="text" placeholder='Enter Email' />
                    </div>
                    <div className="passwordform">
                        <label>Password:</label>
                        <div className="showpass">
                            <input type="password" placeholder='Enter Password' />
                        <button>Show</button>
                        </div>
                    </div>
                    <button id='signinbtn'>Sign in</button>
                </div>

                <div className={`signupform ${active==='signup'?'active':''}`}>
                    <h1>Sign up </h1>
                    <div className="emailform">
                        <label>Email:</label>
                        <input type="text" placeholder='Enter Email' />
                    </div>
                    <div className="nameform">
                        <label>Username:</label>
                        <input type="text" placeholder='Enter Username' />
                    </div>
                    <div className="passwordform">
                        <label>Password:</label>
                        <div className="showpass">
                            <input type="password" placeholder='Enter Password' />
                        <button>Show</button>
                        </div>
                    </div>
                    <button id='signupbtn'>Sign up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default login