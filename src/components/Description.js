const Description = () => {

    return (
        <div className="d-flex flex-column align-items-center py-5  px-2  gap-3 header">

        <span className="h1 text-center">
            <span>Hey! I'm </span> 
            <span className="text-purple">Rydham Mahajan <img className = "wave-hand" src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Waving_Hand_Sign_Emoji_Icon_ios10_large.png?v=1571606113" height = "30px"/></span>
        </span>

        <span className="col-xs-10 col-md-8 col-lg-6 px-5 py-3 fs-5 text-center ">
        I'm a <span className="text-purple h5">Frontend React Web Developer</span> with a strong passion for building responsive and performant web applications with great user experiences that positively impacts the world.
        </span>

        <img className = "col-4 coder-girl-img" src = {require("../assests/girl-coder.jpg")} alt = "coder"/>

        </div>
    )

}

export default Description ;
