import First from "./SingleProject/First";
import Forth from "./SingleProject/Forth";
import Second from "./SingleProject/Second";
import Third from "./SingleProject/Third";


const Projects = () => {
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
            <h2 className="text-3xl font-bold text-center  dark:text-white">Some of my recent projects</h2>
            <div className="grid lg:grid-cols-3 gap-4 px-4 ">
                <First></First>
                <Second></Second>
                <Third></Third>
                <Forth></Forth>
            </div>
        </div>
    );
};

export default Projects;