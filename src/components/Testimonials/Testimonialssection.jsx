import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Rahul Bhatia",
    title: "Owner of Saffron Indian Kitchen",
    image:
      "/concept/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg",
    text: "The platform has been like a superpower for restaurants that increases sales and drives new customers consistently.",
  },
  {
    name: "Priya Sharma",
    title: "Founder, Curry Craft",
    image:
      "/concept/front-view-young-female-going-hiking-white-background-campus-forest-nature-air-mountain-height.jpg",
    text: "I was amazed by how easy it was to manage everything. Our revenue has grown by 40% in just 6 months!",
  },
  {
    name: "Amit Patel",
    title: "Manager, Spice Villa",
    image: "/concept/hiker-walking-up-rock.jpg",
    text: "A seamless experience for both customers and our staff. Highly recommend this for any restaurant.",
  },
  {
    name: "Sonia Kapoor",
    title: "Chef & Owner, Masala Magic",
    image: "/concept/front-view-young-female-going-hiking-white-background-campus-forest-nature-air-mountain-height.jpg",
    text: "The insights and automation features help us stay ahead in the competitive food industry.",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="flex flex-col md:flex-row border font-second border-gray-200 rounded-2xl overflow-hidden bg-white w-full  md:h-[20rem]">
    <div className="md:w-2/5 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-full h-full object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
        loading="lazy"
      />
    </div>
    <div className="md:w-3/5 flex flex-col justify-center p-6">
      <p className="text-base md:text-lg  font-medium mb-4 text-gray-900 leading-snug italic">
        “{testimonial.text}”
      </p>
      <div>
        <h3 className="text-gray-900 font-main font-regular text-base md:text-lg">
          {testimonial.name}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

// Custom Animated Pagination Component remains unchanged

const CustomPagination = ({ slides, activeIdx, progress, onDotClick }) => (
  <div className="flex justify-center items-center gap-2 mt-10">
    {slides.map((_, idx) =>
      idx !== activeIdx ? (
        <button
          key={idx}
          type="button"
          aria-label={`Go to slide ${idx + 1}`}
          onClick={() => onDotClick(idx)}
          className="w-2 h-2 bg-gray-200/90 rounded-full transition-all duration-200 outline-none focus:ring-2 focus:ring-[#F36F25]"
        />
      ) : (
        <div
          key={idx}
          className="w-9 h-2 bg-gray-200/90 rounded-full overflow-hidden relative flex items-center transition-all duration-200"
        >
          <div
            className="absolute left-0 top-0 h-2 bg-[#F36F25] rounded-full"
            style={{
              width: `${progress * 100}%`,
              transition: "width 0.25s",
            }}
          />
        </div>
      )
    )}
  </div>
);

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);
  const delay = 5000; // ms

  useEffect(() => {
    setProgress(0);
    let start;
    let af;
    function animate(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const pct = Math.min(1, elapsed / delay);
      setProgress(pct);
      if (pct < 1) af = requestAnimationFrame(animate);
    }
    af = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(af);
  }, [activeIndex]);

  const handleDotClick = (toIdx) => {
    setActiveIndex(toIdx);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(toIdx);
    }
  };

  return (
    <div className="bg-white font-second container mx-auto py-20 flex items-center justify-center  ">
      <div className="w-full  max-w-7xl md:px-0 px-3 mx-auto text-center  ">
        <p className="text-xs tracking-[0.2em] text-black mb-4">
          TESTIMONIALS
        </p>
        <h2 className="text-2xl sm:text-3xl font-main md:text-4xl font-bold text-gray-900 text-center mb-10">
          What Our Customers Say
        </h2>
        <div>
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1536: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            className="rounded mr-3"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <CustomPagination
          slides={testimonials}
          activeIdx={activeIndex}
          progress={progress}
          onDotClick={handleDotClick}
        />
      </div>
    </div>
  );
}
