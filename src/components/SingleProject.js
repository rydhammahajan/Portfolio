const SingleProject = ({image , heading  , description , technology , link}) => {

    console.log(image) ;

    return(
        <div className="col-11 col-xl-6 d-flex flex-column align-items-center position-relative project-image-container my-4">

            <img src={image} alt="App image" className=" project-image" />
            
            <div className="position-absolute project-overlay text-light p-4 d-flex flex-column  justify-content-md-evenly justify-content-center" 
            >

            <span className="fs-1 h1">{heading}<a href = {link} className="ps-3 text-light"><i className="fa-solid fa-link fs-5"></i></a></span>
            <span className="fs-6  h6">{technology}</span>

            <span className="fs-6 justify-text fw-lighter d-none d-md-block lh-lg">{description}</span>


            </div>

        </div>
    )

}

export default SingleProject ; 