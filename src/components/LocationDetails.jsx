import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { useParams } from "react-router-dom";
import Locations from "../components/utils/Locationss.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BookNowCard from "./Bookingcard";
import ItineraryBreakdown from "./locationdetails/Itenary";
import { X } from "lucide-react";
import MobileBooknow from "./MobileBooknow";

// Image loader with skeleton
const ImageWithSkeleton = ({ src, alt, className = "" }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative w-full h-full ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-xl z-10" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-xl ${loaded ? "block" : "hidden"}`}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
};

const LocationDetails = () => {
  const { id } = useParams();
  const [Model, setModel] = useState(false);
  const location = Locations.trip_collection.trips.find(
    (loc) => loc.id === parseInt(id)
  );
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (!location) {
    return (
      <p className="text-center text-red-600 text-xl mt-10">
        Location not found
      </p>
    );
  }
  const { name, images, itinerary, description, date, duration_days, estimated_cost, category } =
    location;
  const [openDay, setOpenDay] = useState(null);

  return (
    <div className="container mx-auto relative pt-28 md:pt-44 px-4 py-10">
      <div className="mb-10">
        {/* Carousel for small screens */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop
            className="w-full h-[300px] rounded-xl"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <ImageWithSkeleton src={img} alt={`Slide ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Grid for large screens */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 row-span-2">
            <ImageWithSkeleton src={images[0]} alt={name} className="h-[400px]" />
          </div>
          {images.slice(1, 5).map((img, i) => (
            <div key={i}>
              <ImageWithSkeleton src={img} alt={`${name} ${i + 2}`} className="h-48" />
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 ">
          <h1 className="font-parkinsans text-[30px] mb-4 font-semibold text-[#09090B] mt-4"> About the {name} </h1>
          <p className="font-parkinsans font-regular text-[#09090B]">
            {description.slice(0, 198)}......
          </p>
          <button onClick={() => setModel(true)} className="underline text-prime font-bold cursor-pointer mt-4">Read more</button>
          <ItineraryBreakdown itinerary={itinerary} />
        </div>
        {isMobile ? (
          <div className="fixed w-full bottom-0 left-0 z-50">
            <MobileBooknow date={date}
              estimatedcost={estimated_cost} />
          </div>
        ) : (
          <div className="md:col-span-1 mt-10">
            <div className="md:sticky md:top-34">
              <BookNowCard
                date={date}
                estimatedcost={estimated_cost}
              />
            </div>
          </div>
        )}
      </div>

      {Model && (
        <div
          onClick={() => setModel(false)}
          className="fixed inset-0 z-50 font-parkinsans flex items-center justify-center bg-black/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-3xl h-[60vh] overflow-y-auto w-full p-8 shadow-lg relative mx-4"
          >
            <div
              onClick={() => setModel(false)}
              className="absolute top-4 right-4 border-2 grid place-items-center rounded-full w-7 h-7 text-gray-600 hover:text-gray-900 text-2xl font-bold cursor-pointer"
              aria-label="Close modal"
            >
              <X />
            </div>
            <h2 className="text-xl font-semibold mb-4">About the {name}</h2>
            <p className="whitespace-pre-line text-gray-800">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationDetails;
