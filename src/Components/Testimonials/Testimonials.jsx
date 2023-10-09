import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonials=()=>{
    const [testimonials,setTestimonials]=useState([]);
    useEffect(()=>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data => setTestimonials(data))
          Aos.init();
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-semibold text-[#4E9BD8]">
        Respected Faculties...
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
             <img className=" rounded-xl w-full h-[250px]" src={testimonial.faculty.pic} data-aos="fade-right" />
            <div className="px-4 py-6 bg-gray-100 shadow-lg" data-aos="fade-left">
            <p className="text-gray-800 mb-2">{testimonial.faculty.description}</p>
            <p className="text-gray-700 text-lg font-bold">
              {testimonial.faculty.name}
            </p>
            <p className="text-gray-600">{testimonial.faculty.designation}</p>
            </div>
           
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
