import PropTypes from "prop-types";
import { useContext } from "react";
import { FaDollarSign } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
const Course = ({ course }) => {
    const{user}=useContext(AuthContext);
  const { name, pic, description, price,id } = course;

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className=" w-full md:w-[550px] h-[300px]"
            src={pic}
            alt="Album"
          />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-lg">{description}</p>
          <div className="flex items-center">
                <FaDollarSign className="text-xl text-[#48A5EE]"></FaDollarSign>
                <span className="text-xl font-medium">Price:{price}</span>
          </div>
          <div className="card-actions justify-end">
            {
                user ? <Link to={`/course/${id}`}> <button className="btn hover:bg-[#48A5EE]">Start</button></Link> :  <button className="btn hover:bg-[#48A5EE]">Purchase</button>
            }
           
          </div>
        </div>
      </div>
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.object,
};

export default Course;