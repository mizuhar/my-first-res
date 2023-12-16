export default function BoxerListItem({
    _id,
    imageUrl,
    name,
    nickName,

}){


    return(
        < >
        <div className="col-lg-4 col-md-6"  >
        <div className="bg-light rounded text-center p-5" >
            <img style={{ height:"200px"}}
            src={imageUrl}  alt="pic" />
          <h3 className="text-uppercase my-4">{name}</h3>
          <h5 style={{color:"red"}}>{nickName}</h5>
          <br />
          <a className="text-uppercase" href={`/boxers/${_id}`}>
            Read More <i className="bi bi-arrow-right" />
          </a>
          <br />
          <br />
          <a class="btn btn-primary" href="/" role="button">Back to Home</a>
        </div>
      </div>
      
        </>
    )
}
