const Footer = () =>{

    return (

        <div className="bg-dark p-5 text-light d-flex flex-column align-items-center justify-content-around" id = "contact">
        <img  src= {require("../assests/RM.png")} height = "150px" style={{borderRadius : "50%"}}/>

        <span className="d-flex justify-content-center gap-5 py-5 fs-5 contact-list px-2 flex-wrap">

            <span>

            <a href = "https://github.com/rydhammahajan"><i className="fa-brands fa-github pb-2  "></i> GitHub</a>
            <div className="contact-border pt-1"></div>

            </span>
            
            <span>

            <a href = "https://leetcode.com/rydhammahajan/"  className = "pb-2"><img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo" className="mb-2"/> LeetCode
            </a>
            <div className="contact-border pt-1"></div>

            </span>

            <span>
            <a href = "https://auth.geeksforgeeks.org/user/errydham/practice"  className = "pb-2  "><img width="24" height="24" src="https://img.icons8.com/color/48/GeeksforGeeks.png" alt="GeeksforGeeks" className="mb-1"/> GFG
            </a>
            <div className="contact-border pt-1"></div>
            </span>

            <span>
            <a href = "https://www.linkedin.com/in/rydham-mahajan-1305301a9/"><i className="fa-brands fa-linkedin-in pb-2  "></i> LinkedIn
            </a>
            <div className="contact-border pt-1"></div>
            </span>

            <span>
            <a href="mailto:2001rydham@gmail.com"><i className="fa-solid fa-envelope pb-2  "></i> Email
            </a>
            <div className="contact-border pt-1"></div>
            </span>


        </span>

        <span className="text-center">Copyright © 2023 Rydham Mahajan</span>
        
        </div>
    )
}

export default Footer ;  