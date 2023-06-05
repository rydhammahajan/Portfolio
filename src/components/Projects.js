import SingleProject from "./SingleProject";
import weatherAppImage from '../assests/weather-app.png';
import foodAppImage from "../assests/food-app.png"
import todoAppImage from "../assests/todo-app.png"
import nameItAppImage from "../assests/name-it-app.png"
import calculatorAppImage from "../assests/calculator-app.png"

const Projects = () => {

   
    return(

        <div className="py-5 d-flex flex-column align-items-center gap-5 px-2 bg-light">
            <span className="h1 text-center" id = "projects">
                <span>Here are some of my </span> 
                <span className="text-purple">Projects</span>
            </span>

            <div className="d-flex flex-column align-items-center gap-5">

            <SingleProject 
            image = {foodAppImage}
            heading={"Flavour Finders"}
            description={"The Food web application is a user-friendly platform designed to simplify the process of ordering food from various restaurants. It utilizes the React framework to create a responsive and interactive user interface. The app aims to provide a seamless experience for users, allowing them to browse different restaurants, explore menus, add items to their cart, and complete their orders with ease."}
            technology={"HTML5, CSS3, JavaScript, ReactJS, Redux Toolkit, React Router DOM, Bootstrap."}
            link = "https://flavour-finders.netlify.app/"
            />

            <SingleProject image = {weatherAppImage}
            heading={"The Weather Channel!"}
            description={"This is a javascript application that provides real-time weather information for various cities. It allows users to search for a specific city and view current weather conditions, including temperature, weather condition, pressure, visibility, humidity and additional details such as sunrise and sunset times, UV index, and a full-day temperature forecast."}
            technology={"HTML5, CSS3, Bootstrap, Javascript"}
            link = "https://rydham-weather-channel.netlify.app/"
            />

            <SingleProject image = {todoAppImage}
            heading={"TODO APP"}
            description={"This is a  JavaScript application for efficient task management. Users can easily create, delete, and mark tasks as pending. With built-in task statistics, including total tasks, pending tasks, and completed tasks, users can stay on top of their productivity.  Leveraging the power of local storage, the app ensures that tasks are securely stored. "}
            technology={"HTML5, CSS3, Bootstrap, Javascript"}
            link = "https://rydham-todo-list.netlify.app/"
            />

            <SingleProject image = {nameItAppImage}
            heading={"Name It!"}
            description={"This is a ReactJS application that provides a user-friendly interface for generating names based on search keywords. With just a click on any generated name, users are effortlessly redirected to a dedicated page where they can instantly check the availability of the corresponding domain name. This streamlined solution eliminates the arduous task of manually researching and verifying name options. "}
            technology={"HTML5, CSS3, Bootstrap, ReactJS"}
            link = "https://rydham-name-it.netlify.app/"
            />

            {/* <SingleProject image = {calculatorAppImage}
            heading={"Calculator"}
            description={"This is a javascript application designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The application provides users with a user-friendly interface that allows them to enter numbers and perform calculations with ease."}
            technology={"HTML5, CSS3, Bootstrap, Javascript"}
            link = "https://rydham-calculator-project.netlify.app/"
            /> */}

            </div>

            
        </div>
    )
    

}

export default Projects ; 
