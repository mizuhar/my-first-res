import { useState } from "react"





export default function usePersistedState(key, defaultlValue){
    const [state,setState] = useState(()=>{
        const persistedState = localStorage.getItem(key);
        if(persistedState){
        return  JSON.parse(persistedState)  
        }
        return defaultlValue
    })
    const setPersistedState = (value) => { 
        let serializedValue;
        setState(value)

        if(typeof value === "function"){
            serializedValue = JSON.stringify(value(state))
        
        }else {
            serializedValue = JSON.stringify(value)
        }
        localStorage.setItem(key, serializedValue);
       
    }


    return(
        [state,
        setPersistedState,]
    )
}