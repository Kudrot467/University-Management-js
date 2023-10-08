import { useLoaderData, useParams } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const data=useLoaderData();
    const{ id }=useParams();
    const idInt=parseInt(id);
    const detail=data.find(detail=>detail.id===idInt)
    

    return (
        <div>
            {/* {
                data.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            } */}
            <Blog key={detail.id} detail={detail}></Blog>
        </div>
    );
};

export default Blogs;