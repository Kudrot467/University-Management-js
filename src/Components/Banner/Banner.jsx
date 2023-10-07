import HeroSlider, {Slide} from 'hero-slider';

const Banner = () => {
    const images = [
        "https://i.ibb.co/GMRyMcw/istockphoto-1412586980-1024x1024.jpg",
        "https://i.ibb.co/zF7715j/istockphoto-1470160123-1024x1024.jpg",
        "https://i.ibb.co/jw5VcnW/istockphoto-534576267-1024x1024.jpg",
        "https://i.ibb.co/bPstQ6G/istockphoto-1464533610-1024x1024.jpg"
      ];
  return (
   <HeroSlider
   slidingAnimation="left_to_right"
   orientation="horizontal"
   initialSlide={1}
   onBeforeChange={(previousSlide, nextSlide ) =>console.log("onBeforeChange",previousSlide,nextSlide)}
   onChange={nextSlide=>console.log("onChange",nextSlide)}
   onAfterChange={nextSlide=>console.log("onAfterChange",nextSlide)}
   style={{
    backgroundColor:"rgba(0,0,0,0.33)"
   }}
   settings={{
    slidingDuration:250,
    slidingDelay: 100,
    shouldAutoPlay:true,
    shouldDisplayButtons:true,
    autoplayDuration:5000,
    height:"100vh"
   }}
   >
    {images.map((imageUrl, index) => (
        <Slide
          key={index}
          className='bg-cover bg-no-repeat'
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
      ))}
    {/* <Slide
        background={{
                backgroundImage: slide2,
                backgroundAttachment: "fixed"
        }}
    />
    <Slide
        background={{
                backgroundImage: slide3,
                backgroundAttachment: "fixed"
        }}
    />
    <Slide
        background={{
                backgroundImage: slide4,
                backgroundAttachment: "fixed"
        }}
    /> */}

    

   </HeroSlider>
  );
};

export default Banner;
