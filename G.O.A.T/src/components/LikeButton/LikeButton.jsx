import { useContext } from "react";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { TodoContext } from "../contexts/TodoContext";


export default function LikeButton(){



     const { isAuthenticated, username } = useContext(TodoContext)

    //const [ like, setLike ] = useState(0)
    const [ isLike, setIslike ] = useState(true)

    const { boxerId } = useParams()

    useEffect(() => {
        const storedState = localStorage.getItem(`${username}-${boxerId}`);
        if (storedState) {
          setIslike(JSON.parse(storedState));
        }
      }, [boxerId]);
    

    const onLikeButtonClick = () =>{
      //setLike(like + 1);
      //setIslike(!isLike);
      
        const newState = !isLike
        setIslike(newState)
        localStorage.setItem(`${username}-${boxerId}`, JSON.stringify(newState));
        //localStorage.setItem('like', like)
     




    }

    return(
        <>
        {isAuthenticated && <p className={"" + (!isLike ? "text-primary": '')}>
            <i style={{fontSize:"45px",cursor:"pointer"}} className="fa fa-thumbs-up" onClick={onLikeButtonClick}></i>  
        </p>}
        
     

      <p hidden={isLike} style={{color:"brown"}}>{username} like this boxer!</p>
        </>
    )
}