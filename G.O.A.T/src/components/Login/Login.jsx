import React from 'react';
import styles from './Login.module.css';

import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"

import useForm from "../../hooks/useForm"
import { useState } from "react"

const LoginFormKeys = {
  Email: "email",
  Password: "password",
}

export default function Login(){

  const [ errorMessage, setErrorMessage] = useState('')

  const { loginSubmithandler } = useContext(TodoContext)

  const { values, onChange, onSubmit } = useForm(loginSubmithandler,{
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
   })

   const validatePasswordHandler = ()=>{
    if(values[LoginFormKeys.Password].length < 5){
        setErrorMessage('Password must be at least 5 characters!');
    }
    
    else {
       setErrorMessage('');
    }
}






    return (
      
     <section className={styles.container}>
     <div className={styles.login}>
     <div className={styles.circle1} />
     <div className={styles.form}>
      <img
        src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
        alt="illustration"
        className={styles.illustration}
      />
      <h1 className={styles.opacity}>LOGIN</h1>
      <form id="login" onSubmit={onSubmit}>
        <input 
        type="email" 
        id='email'
        placeholder="EMAIL"
        name={LoginFormKeys.Email}
        onChange={onChange}
        value={values[LoginFormKeys.Email]}

         />
        <input 
        type="password"
        id="login-password" 
        placeholder="PASSWORD"
        name={LoginFormKeys.Password}
        onChange={onChange}
        onBlur={validatePasswordHandler}
        value={values[LoginFormKeys.Password]}
         />
         {errorMessage && <p style={{color:"red", fontSize: "17px"}}>{errorMessage}</p>}
        <button 
        type="submit"
        className={styles.opacity}>LOGIN</button>
      </form>
      <div className={styles.registerforget}>
        <a href="/register">NOT YOU REGISTERED YET?</a>
        <a href="/">HOME</a>
      </div>
    </div>
    <div className={styles.circle2} />
  </div>
  <div className={styles.themebtncontainer} />
</section>

    )
}