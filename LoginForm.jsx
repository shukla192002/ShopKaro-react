
import './Login.css'
import { FaUser } from "react-icons/fa"
import { FaLock } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'



const LoginForm = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const exp_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const exp_pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/


  const handleLogin = (e) => {
    e.preventDefault()
   
//    setUsernameError()
//    setPasswordError()

   const isUsernameValid = usernameValidator()
   const isPasswordValid = passwordValidator()

      setUsername()
      setPassword()

   if (isUsernameValid && isPasswordValid) {
     navigate('/home')
     
   }
    };


  const usernameValidator =()=>{
    if (!exp_email.test(username)) {
        setUsernameError('Please use "yourname@gmail.com".')
        return false
      }
      setUsernameError('')
      return true

  }

  const passwordValidator=()=>{
    if (!exp_pass.test(password)) {
        setPasswordError('Password must be at least 8 characters long and include one special character and one number.')
        return false
      }
      setPasswordError('')
      return true
    
  }


  return (
    <div className='log' >
      <form onSubmit={handleLogin}>
        <h1>Login to ShopKaro</h1>
        <div className='input-box'>
            <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
            <FaUser className='icon'/>
            <p className='error-message'>{usernameError}</p>
        </div>
        <div className='input-box'>
            <input 
            type="password" 
            placeholder="Password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required/>
            <FaLock className='icon'/>
            <p className='error-message'>{passwordError}</p>
        </div>

        <div className='remember-forgot'>
            <label>
                <input type='checkbox' />
                Remamber me
            </label>
            <a href='#'>Forgot password?</a>
        </div>

        <button type='Submit'>Login</button>

        <div className='registerLink'>
            <p>
            If you don't have account kindly register here <a href='#'>Register</a>
            </p>
        </div>

        
      </form>
      <style jsx>{`
        .error-message {
          color: red;
          font-size: 10px;
          margin: 5px;
          padding-bottom: 10px;
        }
      `}</style>
    </div>
  )
}

export default LoginForm
