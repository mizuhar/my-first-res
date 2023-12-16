import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import * as userSrevice from '../../services/userService';

export default function Logout(){

    const { logoutHandler } = useContext(TodoContext)

    const navigate = useNavigate()

    useEffect(() =>{
        userSrevice.logout()
        .then(()=>{
            logoutHandler(),
            navigate('/')})
        .catch(()=> {
            logoutHandler()
           }) 
        

    },[]);

    return null;
}