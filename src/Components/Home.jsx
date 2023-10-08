import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Events from "./Events/Events";

const Home = () => {
  const eventsData = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-center">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
          {eventsData.map((event) => (
            <Events key={event.id} event={event}></Events>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
