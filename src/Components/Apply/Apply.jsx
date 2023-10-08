import { Link } from "react-router-dom";

const Apply = () => {
  return (
    <div className="flex flex-col w-full p-10 lg:flex-row justify-center">
      <div className="grid  h-32 card bg-[#48A5EE] rounded-box place-items-center px-20 text-white text-2xlF ">
        Apply as a Teacher
      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <Link to="/register">
        <div className="grid  h-32 card bg-[#48A5EE] rounded-box place-items-center px-20 text-white text-2xl">
          Apply as a Student
        </div>
      </Link>
    </div>
  );
};

export default Apply;
