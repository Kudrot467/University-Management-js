const Register = () => {
  return (
    <div className="hero min-h-screen bg-[#48A5EE]">
      <div className="hero-content md:w-3/4 lg:w-1/2 flex-col">
        <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#48A5EE] font-medium text-lg">First Name</span>
              </label>
              <input
                type="text"
                placeholder="first name"
                className="input input-bordered border-[#48A5EE]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#48A5EE] font-medium text-lg">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="last name"
                className="input input-bordered border-[#48A5EE]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#48A5EE] font-medium text-lg">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered border-[#48A5EE]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#48A5EE] font-medium text-lg">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered border-[#48A5EE]"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white hover:bg-[#48A5EE] bg-[#48A5EE]">Registration</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
