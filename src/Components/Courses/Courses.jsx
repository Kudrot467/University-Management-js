import { useLoaderData } from "react-router-dom";
import Course from "./Course/Course";

const Courses = () => {
  const coursesData = useLoaderData();

  return (
    <div className="mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#48A5EE]">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
        {coursesData.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
