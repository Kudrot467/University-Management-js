import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Course from "./Courses/Course/Course";

const Home = () => {
    const serviceData=useLoaderData()
   
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-4xl font-semibold text-center">Our Running Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
               { serviceData.map(course=><Course key={course.id} course={course}></Course>)}
            </div>
        </div>
    );
};

export default Home;