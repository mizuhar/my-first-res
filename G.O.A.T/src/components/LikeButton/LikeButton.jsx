import { useState } from "react"

export default function LikeButton(){

    const [ like, setLike ] = useState(25)
    const [ isLike, setIslike ] = useState(false)

    const onLikeButtonClick = () =>{
      setLike(like +(isLike ? -1: 1));
      setIslike(!isLike);

    }

    return(
        <>
        <p className={"" + (isLike ? "text-primary": '')}>
            <i style={{fontSize:"45px"}} class="fa fa-thumbs-up" onClick={onLikeButtonClick}></i>  
        </p>
     

      <p>Likes: {like}</p>
        </>
    )
}