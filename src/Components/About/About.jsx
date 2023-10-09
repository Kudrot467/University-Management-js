import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
const About = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="hero rounded-lg my-10">
      <Helmet>
        <title>Event-management | About</title>
      </Helmet>
    <div className="hero-content ">
      <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 p-5">
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="card w-96 bg-[#64A0ED] text-primary-content" data-aos="fade-right">
        <div className="card-body">
          <h2 className="card-title text-white text-3xl">Information</h2>
          <p className="text-2xl text-white">Learning Academy</p>
          <div className="card-actions justify-end">
            <button className="btn hover:bg-[#64A0ED] ">View</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-[#EC9141] text-primary-content" data-aos="fade-left">
        <div className="card-body">
          <h2  className="card-title text-white text-3xl">Why study at Learning Academy?</h2>
          <p className="text-2xl text-white">Learning Academy</p>
          <div className="card-actions justify-end">
            <button className="btn hover:bg-[#64A0ED] ">View</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-[#BE44A0] text-primary-content" data-aos="fade-up">
        <div className="card-body">
          <h2  className="card-title text-white text-3xl">Resources</h2>
          <p className="text-2xl text-white">Learning Academy</p>
          <div className="card-actions justify-end">
            <button className="btn hover:bg-[#64A0ED] ">View</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-[#973FC9] text-primary-content" data-aos="fade-down">
        <div className="card-body">
          <h2  className="card-title text-white text-3xl">Career-Opportunity</h2>
          <p className="text-2xl text-white">Learning Academy</p>
          <div className="card-actions justify-end">
            <button className="btn hover:bg-[#64A0ED] ">View</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default About;
