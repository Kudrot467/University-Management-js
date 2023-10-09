const Facts = () => {
  return (

   <>
   <h1 className="text-6xl font-semibold underline mb-8 text-[#48A5EE] ">Facts and Figures</h1>
    <div
      className="hero mx-auto h-[400px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/2dsj3MS/shubham-sharan-Z-fq3w-BVf-MU-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80 bg-white"></div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="mr-10 text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-[#407dda]">6</h1>
          <p className="text-[#48A5EE] text-3xl md:text-4xl">Faculties</p>
        </div>
        <div className="mr-10 text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-[#407dda]">6</h1>
          <p className="text-[#48A5EE] text-3xl md:text-4xl">Academic Programs</p>
        </div>
        <div className="mr-10 text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-[#407dda]">850</h1>
          <p className="text-[#48A5EE] text-3xl md:text-4xl">Total Completed</p>
        </div>
      </div>
    </div>
   </>
  );
};

export default Facts;
