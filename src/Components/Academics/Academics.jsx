import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Academics = () => {
  return (
    <div className=" max-w-6xl mx-auto p-20 grid grid-cols-1 md:grid-cols-2 ">
      <Helmet>
        <title>Event-management | Academics</title>
      </Helmet>
      <div className="card w-96 glass">
        <figure>
          <img
          className="w-[500px] h-[250px]"
            src="https://i.ibb.co/NWxzh9K/The-best-online-computer-science-courses-for-beginners-in-2020-627x1024.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Courses</h2>
          <p>These six courses cover a range of essential skills and knowledge areas crucial in todays technology-driven society. They empower learners with the ability to create, analyze, secure, and design digital solutions, enhancing their employability and career prospects.</p>
          <div className="card-actions justify-end">
            <Link to="/courses"><button className="btn hover:bg-[#48A5EE]">Learn now!</button></Link>
          </div>
        </div>
      </div>

      <div className="card w-96 glass">
        <figure>
          <img
          className="w-[500px] h-[250px]"
            src="https://i.ibb.co/0ZQ1QpG/Academic-Regulations.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Academic Regulations</h2>
          <p> Our academic regulations govern the vast majority of our taught courses and help to ensure consistency in our quality and academic standards. </p>
          <div className="card-actions justify-end">
            <Link to="/regulations"><button className="btn hover:bg-[#48A5EE]">Explore now!</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
