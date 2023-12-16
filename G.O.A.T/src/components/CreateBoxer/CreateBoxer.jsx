import { useNavigate } from "react-router-dom"
import * as boxerService from "../../services/boxerService"

export default function CreateBoxer(){

    const navigate = useNavigate()

    const createBoxerSubmitHandler = (e) =>{

        e.preventDefault()
    
        const boxerData = Object.fromEntries(new FormData(e.currentTarget))
    
       try {
        boxerService.create(boxerData)
        navigate('/boxers')
        
       } catch (error) {
        console.log(error);
       }
    
        }

    return(
        <>
        <body style={{backgroundImage:"url('/public/images/public1.jpg')",height:"50em",backgroundPosition: "center",backgroundSize: "cover"}}>
            
        
            <section id="create-page" style={{border:"3px solid black", background:"gray", textAlign:"center",width:"30%",height:"30em"}}>
  <form id="create" onSubmit={createBoxerSubmitHandler}>
    <ul style={{textAlign:"right"}}>
    <div className="container">
      <h1>Your vote</h1>
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
      <input style={{border:"3px solid black"}} className="btn submit" type="submit" defaultValue="Create Boxer" />
    </div>
    </ul>
    <img style={{width:"100px"}}src="/public/images/logo-2.jpg" alt="pic" />
    <a style={{marginLeft:"3em",background:"gray", border:"3px solid black", padding:"0.5em"}} href="/" type="btn">Back to Home</a>
  </form>
 
</section>
</body>
        </>
    )
}