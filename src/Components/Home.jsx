import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Events from "./Events/Events";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Testimonials from "./Testimonials/Testimonials";
import Facts from "./Facts/Facts";
const Home = () => {
  const eventsData = useLoaderData();

  useEffect(()=>{
    Aos.init();
  },[]);

  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-[#4E9BD8]">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10  ">
          {eventsData.map((event) => (
            <Events key={event.id} event={event}></Events>
          ))}
        </div>
        <div className="my-10">
        <Testimonials></Testimonials>
      </div>
      </div>
      <div className="my-10">
        <Facts></Facts>
      </div>
    </div>
  );
};

export default Home;
