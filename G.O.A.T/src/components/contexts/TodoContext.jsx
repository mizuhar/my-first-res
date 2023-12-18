import { createContext } from "react";

import { useNavigate  } from "react-router-dom";
import usePersistedState from "../../hooks/usePersistedState";
import * as userService from "../../services/userService"


export const TodoContext = createContext()


export const AuthProvider = ({
    children,
   
}) => {
    const navigate = useNavigate()

    const [auth,setAuth] = usePersistedState('auth',{})

    const loginSubmithandler = async (values)=>{

    const result = await userService.login(values.email, values.password)

    setAuth(result)

    localStorage.setItem('accessToken', result.accessToken)

    navigate("/")

}
    const registerSubmitHandler = async (values)=>{

    const result = await userService.register(values.email, values.password)
    
    setAuth(result)

    localStorage.setItem('accessToken', result.accessToken)

    navigate("/")

}

const logoutHandler = ()=> {
    setAuth({})

    localStorage.removeItem('accessToken')
   
    navigate("/")
}


    const values = {
        loginSubmithandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !! auth.accessToken,
    }

    return(
        <TodoContext.Provider value={values}>

        {children}
        
       </TodoContext.Provider>
    )
}