import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

const Home = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h3 className="text-3xl">This is home</h3>
        </div>
    );
};

export default Home;