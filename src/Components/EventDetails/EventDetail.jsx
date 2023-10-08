import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EventDetail = ({ detail }) => {
  const { name, description, pic } = detail;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={pic}
          className="max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">
            {description}
          </p>
          <Link to="/"><button className="btn hover:text-[#4E9BD8]">Back to Home</button></Link>
        </div>
      </div>
    </div>
  );
};
EventDetail.propTypes={
    detail:PropTypes.object
}
export default EventDetail;
