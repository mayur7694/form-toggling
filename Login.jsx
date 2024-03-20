import React, { useState,useRef } from 'react'
import {checkValidateData} from '../util/validate'




const Login = () => {
    const [isSignIn,setIsSignIn] = useState(true)
    const[errormessage,setEerrormessage] = useState()
    
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit= () =>{
      const message = checkValidateData(email.current.value,password.current.value)
      setEerrormessage(message);
    
    }

    const toggleIn = ()=>{
        setIsSignIn(!isSignIn)
    }
  return (
    <div className='grid place-content-center'>

            <h1>{isSignIn ? "sign in":"sign Up"}</h1>

        <form onSubmit={(e)=> e.preventDefault()}>
         <input 
         ref = {email}
         className='bg-blue-400 px-4 py-4 mx-5'
         type="text" 
         placeholder='Email' required
         />

          <input 
          ref ={password}
          className='bg-blue-400 px-4 py-4 mx-5'
          type="password" 
         placeholder='Password' required
         />

         <p className='text-green-500'>{errormessage}</p><br /><br />
         <button className='bg-red-500 px-4 py-4 mx-5' onClick={handleSubmit}>
         {isSignIn? 'Submit':"signUp"}</button>
         
         <p className='cursor-pointer'
          onClick={toggleIn}>{!isSignIn ? "already member sign in":"new to sign up"}</p>
        </form>
    </div>
  )
}

export default Login
