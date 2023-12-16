import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import useForm from '../../hooks/useForm';
import { TodoContext } from '../contexts/TodoContext';

import styles from './Register.module.css';




const RegisterFormKeys = {
    Email: "email",
    Password: "password",
    ConfirmPassword: "confirm-password",
  }

export default function Register(){

    const [errorMessage,setErrorMessage] = useState('')

    const { registerSubmitHandler } = useContext(TodoContext)

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler,{
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',

    })
    const validatePasswordHandler = ()=>{
        if(values[RegisterFormKeys.Password].length < 5){
            setErrorMessage('Password must be at least 5 characters!');
        }
        else if(values[RegisterFormKeys.ConfirmPassword] !== values[RegisterFormKeys.Password]){
            setErrorMessage('Confirm Password ana Password must be the same!');
        }

        else {
           setErrorMessage('');
        }
    }




    return(
        <>
            <section className={styles.container}>
     <div className={styles.login}>
     <div className={styles.circle1} />
     <div className={styles.form}>
      <img
        src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
        alt="illustration"
        className={styles.illustration}
      />
      <h1 className={styles.opacity}>REGISTER</h1>
      <form id="register" onSubmit={onSubmit}>
        <input 
        type="email" 
        id='email'
        placeholder="EMAIL"
        name={RegisterFormKeys.Email}
        onChange={onChange}
        value={values[RegisterFormKeys.Email]}
         />
        <input 
        type="password" 
        id="register-password"
        placeholder="PASSWORD"
        name={RegisterFormKeys.Password}
        onChange={onChange}
        value={values[RegisterFormKeys.Password]}
        onBlur={validatePasswordHandler}
         />
         {errorMessage && (<p style={{color:"red", fontSize:"17px"}}>{errorMessage}</p>)}
        <input 
        type="password" 
        id='confirm-password'
        placeholder="CONFIRM-PASSWORD"
        name={RegisterFormKeys.ConfirmPassword}
        onChange={onChange}
        value={values[RegisterFormKeys.ConfirmPassword]}
        onBlur={validatePasswordHandler}
         />
        {errorMessage && (<p style={{color:"red", fontSize:"17px"}}>{errorMessage}</p>)}
        <button 
        type="submit"
        disabled={Object.values(errorMessage).some(x=>x)}
        className={styles.opacity}>REGISTER</button>
      </form>
      <div className={styles.registerforget}>
        <a href="/login">HAVE A REGISTRATION</a>
        <a href="/">HOME</a>
      </div>
    </div>
    <div className={styles.circle2} />
  </div>
  <div className={styles.themebtncontainer} />
</section>
        </>
    )
}