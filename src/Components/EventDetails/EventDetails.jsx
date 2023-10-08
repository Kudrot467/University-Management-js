import { useLoaderData, useParams } from "react-router-dom";
import EventDetail from "./EventDetail";


const EventDetails = () => {
   
    const data=useLoaderData();
    const{id}=useParams();
    const idInt=parseInt(id);
    const detail=data.find(detail=>detail.id===idInt);
    return (
        <div>
            <EventDetail key={detail.id} detail={detail}></EventDetail>
        </div>
    );
};

export default EventDetails;