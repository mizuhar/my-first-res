export default function Home(){




    return (
        <>
        <>
  {/* Header Start */}
  <div className="container-fluid bg-dark px-0">
    <div className="row gx-0">
      <div className="col-lg-3 bg-dark d-none d-lg-block">
        <a
          href="index.html"
          className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
        >
          <h1 className="m-0 display-4 text-primary text-uppercase">G.O.A.T</h1>
        </a>
      </div>
    </div>
  </div>
  {/* Header End */}
  {/* Hero Start */}
  <div className="container-fluid bg-primary p-5 bg-hero mb-5">
    <div className="row py-5">
      <div className="col-12 text-center">
        <h1 className="display-2 text-uppercase text-white mb-md-4">G.O.A.T</h1>
        <a href="#" className="btn btn-primary py-md-3 px-md-5 me-3">
          Login
        </a>
        <a href="#" className="btn btn-light py-md-3 px-md-5">
          Register
        </a>
      </div>
    </div>
  </div>
  {/* Hero End */}
  {/* About Start */}
  <div className="container-fluid p-5">
    <div className="row gx-5">
      <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
        <div className="position-relative h-100">
          <img
            className="position-absolute w-100 h-100 rounded"
            src="img/about.jpg"
            style={{ objectFit: "cover" }}
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
                href="#pills-1"
              >
                About Us
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
    <div className="row g-5 gb-5">
      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
          <i className="flaticon-six-pack display-1 text-primary" />
          <h3 className="text-uppercase my-4">Body Building</h3>
          <p>
            Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet
            kasd elitr duo vero amet amet stet
          </p>
          <a className="text-uppercase" href="">
            Read More <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
          <i className="flaticon-barbell display-1 text-primary" />
          <h3 className="text-uppercase my-4">Weight Lefting</h3>
          <p>
            Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet
            kasd elitr duo vero amet amet stet
          </p>
          <a className="text-uppercase" href="">
            Read More <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
          <i className="flaticon-bodybuilding display-1 text-primary" />
          <h3 className="text-uppercase my-4">Muscle Building</h3>
          <p>
            Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet
            kasd elitr duo vero amet amet stet
          </p>
          <a className="text-uppercase" href="">
            Read More <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </div>
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
            <div className="d-flex mt-4">
              <a
                className="btn btn-primary btn-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-primary btn-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-primary btn-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn btn-primary btn-square rounded-circle" href="#">
                <i className="fab fa-instagram" />
              </a>
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
                Our Trainers
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Latest Blog
              </a>
              <a className="text-secondary" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Contact Us
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
                Our Trainers
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Latest Blog
              </a>
              <a className="text-secondary" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Contact Us
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

        </>
    )
}