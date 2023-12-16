import { useEffect } from "react"
import { useState } from "react"
import BoxerListItem from "./BoxerListItem/BoxerListItem"
import * as boxerService from "../../services/BoxerService"



export default function BoxerList(){

const [boxers, setBoxer] = useState([])

useEffect(()=>{
    boxerService.getAll()
    .then(result => setBoxer(result))
    .catch(err => setBoxer(err))
},[])



    return(
        <body  style={{backgroundImage:"url('/public/images/public1.jpg')",height:"50em",backgroundSize:"cover"}}>
            
       
<section style={{ display:"flex",gap:"1em"}}>
        
    {boxers.map(boxer => (<BoxerListItem key={boxer._id} {...boxer}></BoxerListItem>))  }

    
   
    <>
   
    </>
    </section>

    </body>
    )
}