import React, { useRef, useState } from "react";
import LocationCard from "./Locationcards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Keyboard, Mousewheel } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/free-mode";
import Locations from "../utils/Locationss.json";

const UpcommingTrips = () => {
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const prioritizedPlaces = [
    "Valley of Flowers",
    "Kedarnath",
    "Tungnath & Chandrashila",
    "Mussoorie",
  ];

  const popularLocations = Locations.trip_collection.trips.filter(
    (loc) => loc.category === "Popular Location"
  );

  const sortedLocations = [
    ...prioritizedPlaces
      .map((name) => popularLocations.find((loc) => loc.name === name))
      .filter(Boolean),
    ...popularLocations.filter((loc) => !prioritizedPlaces.includes(loc.name)),
  ];

  return (
    <div className="w-full md:pl-0 pl-3 mt-8 font-parkinsans relative">
      {/* HEADER */}
      <div className="flex items-center mb-8 gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Upcoming Trips
        </h1>
      </div>

      {/* ⭐ HOVER WRAPPER */}
      <div className="relative w-full group">

        {/* LEFT NAV BUTTON */}
        {!isBeginning && (
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="
            absolute left-2 top-1/2 border border-gray-600 cursor-pointer -translate-y-1/2 z-20
            opacity-0 group-hover:opacity-100
            transition-all duration-300
            w-10 h-10 rounded-full
            bg-white shadow-xl
            flex items-center justify-center
            hover:scale-110
          "
          >
            <ArrowLeft strokeWidth={3} size={22} />
          </button>
        )}

        {/* RIGHT NAV BUTTON */}
        {!isEnd && (
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="
            absolute right-2 top-1/2 border border-gray-600 cursor-pointer -translate-y-1/2 z-20
            opacity-0 group-hover:opacity-100
            transition-all duration-300
            w-10 h-10 rounded-full
            bg-white shadow-xl
            flex items-center justify-center
            hover:scale-110
          "
          >
            <ArrowRight strokeWidth={3} size={22} />
          </button>
        )}

        {/* SWIPER */}
        <Swiper
          modules={[FreeMode, Keyboard, Mousewheel, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          spaceBetween={16}
          speed={600}
          grabCursor={true}
          freeMode={true}
          mousewheel={{ forceToAxis: true }}
          breakpoints={{
            0: { slidesPerView: 1.3 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 4 },
          }}
          style={{ paddingBottom: "1.5rem" }}
        >
          {sortedLocations.map((location) => (
            <SwiperSlide key={location.id}>
              <LocationCard
                id={location.id}
                images={location.images || []}
                name={location.name}
                date={location.date}
                durationdaynight={location.duration_day_night}
                description={
                  location.itinerary?.[0]?.activities?.[0] || ""
                }
                duration={`${location.duration_days} Days`}
                cost={location.estimated_cost}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UpcommingTrips;
