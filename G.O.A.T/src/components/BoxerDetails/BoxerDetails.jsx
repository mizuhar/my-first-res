import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as boxerService from '../../services/boxerService'
import { TodoContext } from '../contexts/TodoContext'



export default function BoxerDetails(){
    
    const navigate = useNavigate()
   
   const { boxerId } = useParams()

   const { userId } = useContext(TodoContext)

   const [boxer, setBoxer] = useState({})

   useEffect(()=>{
      boxerService.getOne(boxerId)
      .then(setBoxer)
   },[boxerId])
 
   const deleteClickHandler = async () =>{

    const hasConfirm = confirm('Are you sure you want to remove this boxer?')

    if(hasConfirm){
       await boxerService.remove(boxerId)

       navigate('/boxers')
    }
    
}



    return(
      <body style={{backgroundImage:"url('/public/images/public1.jpg')",height:"50em",backgroundSize:"cover"}}>
        
      
        <div className="card" style={{ width: "22rem", textAlign:"center", alignItems:"center",background:"grey"}}>

        <img style={{height:"270px",padding:"1em"}} src={boxer.imageUrl} className="card-img-top" alt="pic" />
        <div className="card-body">
          <h5 className="card-title">Details</h5>
          <p className="card-text" style={{fontSize:"22px"}}>{boxer.name}</p>
        </div>
        <ul className="list-group list-group-flush" >
          <li style={{background:"gray", color:"red", fontSize:"22px", letterSpacing:"2px"}} className="list-group-item">{boxer.nickName}</li>
          <li style={{background:"gray"}} className="list-group-item">{boxer.category}</li>
        </ul>
        <div className="card-body">
            {userId === boxer._ownerId && (<><a href={`/boxers/${boxerId}/update`} className="card-link" style={{border:"1px solid green",padding:"0.5em"}}>
            Update
          </a>
          <a href="#" className="card-link" style={{border:"1px solid red",padding:"0.5em"}} onClick={deleteClickHandler}>
           Delete
          </a></>)}
          
          <a href="/" className="card-link" style={{border:"1px solid black",padding:"0.5em"}}>
           Home
          </a>
        </div>
      </div>
      </body>
    )
}