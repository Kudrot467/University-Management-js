import { Link } from "react-router-dom";
import { FaUser, FaRegAddressBook } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
    const{user,logOut}=useContext(AuthContext);

    const handleSignOut=()=>{
        logOut()
        .then()
        .catch(error =>{
            console.log(error.message);
        })
    }
  return (
    <div>
      <div className="mx-auto flex justify-between p-4 items-center flex-col md:flex-row">
        <a className="btn btn-ghost normal-case text-xl text-[#48A5EE]">
          Learning Academy
        </a>
        <img
          className="w-[220px] h-[100px]"
          src="https://i.ibb.co/MCrsWqq/logo-png.png"
          alt=""
        />
        <div className="flex flex-col md:flex-row">
            {
                user ? <button onClick={handleSignOut}  className="text-xl font-medium  mr-1 text-[#0070C7] hover:text-[#4E9BD8]">Sign out</button> :  <Link to="/login" className="flex items-center ">
                <FaUser className="text-[#0070C7] mr-1 hover:text-[#4E9BD8]"></FaUser>
                <p className="text-xl font-medium  mr-1 text-[#0070C7] hover:text-[#4E9BD8] ">
                  Login
                </p>
              </Link>
            }
          <Link to="/contact-us" className="flex items-center">
            <FaRegAddressBook className="text-[#0070C7] mr-1"></FaRegAddressBook>
            <p className="text-xl font-medium text-[#0070C7]">Contact-us</p>
          </Link>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
