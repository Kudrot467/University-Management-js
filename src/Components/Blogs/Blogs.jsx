import { useLoaderData, useParams } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const data=useLoaderData();
    const{ id }=useParams();
    const idInt=parseInt(id);
    const detail=data.find(detail=>detail.id===idInt)
    

    return (
        <div>
            <Blog key={detail.id} detail={detail}></Blog>
        </div>
    );
};

export default Blogs;