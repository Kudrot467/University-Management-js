import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Events = ({ event }) => {
  const { name, description, pic, id } = event;
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="card glass" data-aos="fade-right">
        <figure>
          <img className="w-full md:w-[550px] h-[250px]" src={pic} />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title  mb-2 h-[90px]">{name}</h2>
          <div className=" mt-0 md:mt-10" >
            {description.length > 150 ? (
              <p className=" my-8 md:my-0">
                {description.slice(0, 150)}{" "}
                <Link to={`/events/${id}`}>
                  <div className="card-actions justify-end">
                    <button className="btn text-[#4E9BD8] hover:text-white hover:bg-[#4E9BD8]">
                      See More!
                    </button>
                  </div>
                </Link>{" "}
              </p>
            ) : (
              <p>{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
Events.propTypes = {
  event: PropTypes.object,
};

export default Events;
