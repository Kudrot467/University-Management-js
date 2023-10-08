import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Events = ({ event }) => {
  const { name, description, pic, id } = event;
  return (
   <div>
        <div className="card glass">
      <figure>
        <img className="w-full md:w-[550px] h-[250px]" src={pic} />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title h-[90px]">{name}</h2>
        <div>
          {description.length > 150 ? (
            <p className="">
              {description.slice(0, 150)}{" "}
              <Link to={`/events/${id}`}>
                <div className="card-actions justify-end">
                  <button className="btn">See More!</button>
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
Events.propTypes={
    event:PropTypes.object
}

export default Events;
