import { useContext } from "react"
import { Link } from "react-router-dom"
import { TodoContext } from "../contexts/TodoContext"

export default function Home(){

const { isAuthenticated, username } = useContext(TodoContext)


    return (
       
        <>
  {/* Header Start */}
  <div className="container-fluid bg-dark px-0">
    <div className="row gx-0">
   
      <div className="col-lg-3 bg-dark d-none d-lg-block">
      
        <a
          href="/"
          className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
        >
          <h1 className="m-0 display-4 text-primary text-uppercase" >G.O.A.T</h1>
          <a href="/boxers"><h2 style={{color:"orange", padding:"1em", marginRight:"-10em",marginTop:"0.7em"}}>List of the greatest</h2></a>
        
        </a>
        {isAuthenticated && (<a href="/boxers/create"><h2  style={{color:"orange", marginLeft:"20em",marginTop:"-3em" }}>Your suggestion</h2></a>
)}
        
      </div>
    </div>
  </div>
  {/* Header End */}
  {/* Hero Start */}
 
  <div  className="container-fluid bg-primary p-5 bg-hero mb-5" style={{backgroundImage:"url(/public/images/ring.jpg)"}}>
    
    <div className="row py-5" >
    <img style={{opacity: 0.33, width: "100em", height:"20em", marginTop:"-5em"}} src="#" alt="pic1" />
      <div className="col-12 text-center">
        <h1 className="display-2 text-uppercase text-white mb-md-4">G.O.A.T</h1>
        {!isAuthenticated && (<><a href="/login" className="btn btn-primary py-md-3 px-md-5 me-3">
          Login
        </a>
        <a href="/register" className="btn btn-light py-md-3 px-md-5">
          Register
        </a></>)}
        
       {isAuthenticated && (<><a href="/logout" style={{marginLeft:"1em"}} className="btn btn-light py-md-3 px-md-5">
          Logout
        </a><br /><br /><span style={{color:"orange", fontSize:"17px"}}>Current user: {username}</span></>)}
        
      
      </div>
    </div>
  </div>
  {/* Hero End */}
  {/* About Start */}
  <div className="container-fluid p-5" style={{background:"grey"}}>
    <div className="row gx-5">
      <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 400 }}>
        <div className="position-relative h-100">
          <img
            className="position-absolute w-100 h-100 rounded"
            src="/public/images/about.jpg"
           
          />
        </div>
      </div>
      <div className="col-lg-7">
        <div className="mb-4">
          <h5 className="text-primary text-uppercase">About Us</h5>
          <h1 className="display-3 text-uppercase mb-0">Welcome to G.O.A.T</h1>
        </div>
        <h4 className="text-body mb-4">
          Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no
          labore lorem sit clita duo justo magna dolore
        </h4>
        <p className="mb-4">
          Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at
          ut. Tempor sit lorem sit magna ipsum duo. Sit eos dolor ut sea rebum,
          diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et stet amet justo
          amet clita erat, ipsum sed at ipsum eirmod labore lorem.
        </p>
        <div className="rounded bg-dark p-5">
          <ul className="nav nav-pills justify-content-between mb-3">
            <li className="nav-item w-50">
              <a
                className="nav-link text-uppercase text-center w-100 active"
                data-bs-toggle="pill"
                href="/boxers"
              >
              List of the greatest
              </a>
            </li>
            <li className="nav-item w-50">
              <a
                className="nav-link text-uppercase text-center w-100"
                data-bs-toggle="pill"
                href="#pills-2"
              >
                Why Choose Us
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="pills-1">
              <p className="text-secondary mb-0">
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores
                takimata consetetur invidunt magna dolores aliquyam dolores
                dolore. Amet erat amet et magna
              </p>
            </div>
            <div className="tab-pane fade" id="pills-2">
              <p className="text-secondary mb-0">
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores
                takimata consetetur invidunt magna dolores aliquyam dolores
                dolore. Amet erat amet et magna
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Programe Start */}
  <div
    className="container-fluid programe position-relative px-5 mt-5"
    style={{ marginBottom: 180 }}
  >
    
  </div>
  {/* Programe Start */}
  {/* Facts Start */}
  {/* Facts End */}
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-secondary px-5 mt-5">
    <div className="row gx-5">
      <div className="col-lg-8 col-md-6">
        <div className="row gx-5">
          <div className="col-lg-4 col-md-12 pt-5 mb-5">
            <h4 className="text-uppercase text-light mb-4">Get In Touch</h4>
            <div className="d-flex mb-2">
              <i className="bi bi-geo-alt text-primary me-2" />
              <p className="mb-0">123 Street, New York, USA</p>
            </div>
            <div className="d-flex mb-2">
              <i className="bi bi-envelope-open text-primary me-2" />
              <p className="mb-0">info@example.com</p>
            </div>
            <div className="d-flex mb-2">
              <i className="bi bi-telephone text-primary me-2" />
              <p className="mb-0">+012 345 67890</p>
            </div>
          
          </div>
          <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
            <h4 className="text-uppercase text-light mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-secondary mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Home
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                About Us
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Class Schedule
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Our Boxers
              </a>
             
            </div>
          </div>
          <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
            <h4 className="text-uppercase text-light mb-4">Popular Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-secondary mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Home
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                About Us
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Class Schedule
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Our Boxers
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="container-fluid py-4 py-lg-0 px-5"
    style={{ background: "#111111" }}
  >
    <div className="row gx-5">
      <div className="col-lg-8">
        <div className="py-lg-4 text-center">
          <p className="text-secondary mb-0">
            ©{" "}
            <a className="text-light fw-bold" href="#">
              G.O.A.T
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="py-lg-4 text-center credit">
          <p className="text-light mb-0">
            Designed by{" "}
            <a className="text-light fw-bold" href="#">
              Vladislav Stanchev
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-dark py-3 fs-4 back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
</>

       
    )
}