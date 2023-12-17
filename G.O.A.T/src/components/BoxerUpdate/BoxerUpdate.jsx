import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import * as boxerService from '../../services/boxerService'

export default function BoxerUpdate(){

    const navigate = useNavigate()
    const { boxerId } = useParams()

    const [ boxer, setBoxer ] = useState({})

    useEffect(() =>{
      boxerService.getOne()
      .then(result => setBoxer(result))
      .catch(err => setBoxer(err))
    },[boxerId])



    const updateBoxerHandler = async (e) =>{

        e.preventDefault()
        const values = Object.fromEntries(new FormData(e.currentTarget))
        try {
            await boxerService.update(boxerId, values)
            navigate('/boxers')
        } catch (error) {
            console.log(error);
        }


    }

  const  onChange = (e) => {

    setBoxer(state => ({...state,[e.target.name]: e.target.value}))
  }

return (
    <>
            <body style={{backgroundImage:"url('/public/images/public1.jpg')",height:"50em",backgroundPosition: "center",backgroundSize: "cover"}}>
            
        
            <section id="create-page" style={{border:"3px solid black", background:"gray", textAlign:"center",width:"30%",height:"30em"}}>
  <form id="create" onSubmit={updateBoxerHandler}>
    <ul style={{textAlign:"right"}}>
    <div className="container">
      <h1 style={{color:"orange"}}>Edit</h1>
      <label htmlFor="leg-title">Name of the boxer:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter boxer name..."
      />
      <br />
      <br />
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        placeholder="Enter boxer category..."
      />
      <br />
      <br />
      <label htmlFor="boxer-img">Image:</label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        placeholder="Upload a photo..."
      />
      <br />
      <br />
      <label htmlFor="nickName">Nick Name:</label>
      <input
        type="text"
        id="nickName"
        name="nickName"
        placeholder="Enter boxer nickName..."
      />
      <br />
      <br />
      <input style={{border:"3px solid black"}} className="btn submit" type="submit" defaultValue="Update Boxer" onChange={onChange}/>
    </div>
    </ul>
    <img style={{width:"100px"}}src="/public/images/logo-2.jpg" alt="pic" />
    <a style={{marginLeft:"12.5em",background:"gray", border:"3px solid black", padding:"0.5em"}} href="/" type="btn">Back to Home</a>
  </form>
 
</section>
</body>
    </>
)

}