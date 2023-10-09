import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2 className="text-5xl text-red-600">Opps!!</h2>
            <Link to='/' className="text-6xl text-green-600 underline">Go Home</Link>
        </div>
    );
};

export default ErrorPage;