const Skills = () => {

    return (

        <div className="d-flex flex-column align-items-center pt-5 px-2 gap-5" id = "skills">

            <span className="h1  text-center">
                <span>This is my </span> 
                <span className="text-purple">Technology Stack</span>
            </span>

            <div className="col-11 col-md-8 col-xl-6 d-flex gap-5 flex-wrap justify-content-center">

            <div className="d-flex flex-column align-items-center">
                <img src = {require("../assests/html.png")} height = "110px" 
                className="tech-image"
                style={{animationDelay : "0.2s"}}
                />
                <span className="fs-4   h3 tech-stack">HTML</span>
            </div>

            <div className="d-flex flex-column align-items-center ">
                <img src = {require("../assests/css.png")} height = "110px" 
                className="tech-image"
                style={{animationDelay : "0.2s"}}
                />
                <span className="tech-stack fs-4   h3">CSS</span>
            </div>

            <div className="d-flex flex-column align-items-center ">
                <img src = {require("../assests/javascript.png")} height = "110px" 
                className="tech-image"
                style={{animationDelay : "0.2s"}}
                />
                <span className="tech-stack fs-4   h3">JavaScript</span>
            </div>

            <div className="d-flex flex-column align-items-center ">
                <img src = {require("../assests/bootstrap.png")} height = "110px"
                className="tech-image"
                style={{animationDelay : "0.2s"}}
                />
                <span className="tech-stack fs-4   h3">Bootstrap</span>
            </div>

            <div className="d-flex flex-column align-items-center ">
                <img src = {require("../assests/react.png")} height = "110px"
                className="tech-image"
                style={{animationDelay : "0.4s"}}
                />
                <span className="tech-stack fs-4   h3">ReactJS</span>
            </div>

            <div className="d-flex flex-column align-items-center ">
                <img src = {require("../assests/redux.png")} height = "120px"
                className="tech-image"
                style={{animationDelay : "0.6s"}}
                />
                <span className="tech-stack fs-4   h3">Redux</span>
            </div>

            <div className="d-flex flex-column align-items-center ">
                <img src = {require("../assests/react-router.png")} height = "110px" width= "150px"
                className="tech-image"
                style={{animationDelay : "0.6s"}}
                />
                <span className="tech-stack fs-4 h3">React Router</span>
            </div>

            <div className="d-flex flex-column align-items-center ">
                <img src = {require("../assests/c.png")} height = "110px"
                className="tech-image"
                style={{animationDelay : "0.6s"}}
                />
                <span className="tech-stack fs-4  text-center h3">C</span>
            </div>
            
            <div className="d-flex flex-column align-items-center ">
                <img src = {require("../assests/c++.png")} height = "110px"
                className="tech-image"
                style={{animationDelay : "0.6s"}}
                />
                <span className="tech-stack text-center fs-4 h3">C++</span>
            </div>
            
            <div className="d-flex flex-column align-items-center ">
                <img src = {require("../assests/dsa.png")} height = "110px"
                className="tech-image"
                style={{animationDelay : "0.8s"}}
                />
                <span className="text-center tech-stack fs-4   h3">DSA</span>
            </div>

            <div className="d-flex flex-column align-items-center ">
                <img src = {require("../assests/github.png")} height = "110px"
                className="tech-image"
                style={{animationDelay : "0.8s"}}
                />
                <span className="tech-stack fs-4 h3">GitHub</span>
            </div>

            <div className="d-flex flex-column align-items-center ">
                <img src = {require("../assests/git.png")} height = "110px"
                className="tech-image"
                style={{animationDelay : "0.8s"}}
                />
                <span className="tech-stack fs-4   h3">Git</span>
            </div>
            

            </div>

        </div>

    )

}

export default Skills ;
