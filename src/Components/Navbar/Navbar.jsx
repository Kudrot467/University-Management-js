import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks= <>
    <li> <NavLink className="text-lg " style={( {isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      background: isActive ? "white":"#48A5EE",
      textDecoration:isActive ?"underline":"",
      color: isActive ? "#48A5EE" : "white"

    };}} to="/">Home</NavLink> </li>
    <li> <NavLink className="text-lg" style={( {isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      background: isActive ? "white":"#48A5EE",
      textDecoration:isActive ?"underline":"",
      color: isActive ? "#48A5EE" : "white"

    };}} to="/about">About</NavLink> </li>
    <li> <NavLink className="text-lg" style={( {isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      background: isActive ? "white":"#48A5EE",
      textDecoration:isActive ?"underline":"",
      color: isActive ? "#48A5EE" : "white"

    };}} to="/academics">Academics</NavLink> </li>
    <li> <NavLink className="text-lg" style={( {isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      background: isActive ? "white":"#48A5EE",
      textDecoration:isActive ?"underline":"",
      color: isActive ? "#48A5EE" : "white"

    };}} to="/admission">Admission</NavLink> </li>
    </>
  return (
    <div className="navbar bg-[#48A5EE] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-[#48A5EE]rounded-box w-52">
        {navLinks}
      </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-4">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
