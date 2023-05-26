const NavBar = () => {

    return (

        <div className=" d-flex justify-content-around pt-4 px-2 ">

            <span className="fs-3 text-purple fw-bolder d-sm-inline d-none">Rydham Mahajan</span>
            
            <ul className="d-flex gap-4 nav-items justify-content-center">
                <li className="text-purple fs-4 fw-bold"

                onClick ={ ()=>{

                    const data = document.getElementById("skills").getClientRects() ;
                    scroll(0 , data[0].y) ;
                }}
                >Skills</li>
                <li className="text-purple fs-4 fw-bold" 
                onClick ={ ()=>{

                const data = document.getElementById("projects").getClientRects() ;
                scroll(0 , data[0].y) ;
                }}
                >Project</li>

                <li className="text-purple fs-4 fw-bold"
                onClick ={ ()=>{

                const data = document.getElementById("contact").getClientRects() ;
                scroll(0 , data[0].y) ;
                }}
                >Contact</li>
            </ul>

        </div>

    )

}

export default NavBar ; 
