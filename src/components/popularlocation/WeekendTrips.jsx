import React, { useEffect, useState, useRef } from "react";
import LocationCard from "./Locationcards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Keyboard, Mousewheel } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/free-mode";
import Locations from "../utils/Locationss.json";

const WeekendTrips = () => {
  const swiperRef = useRef(null);

  const [swiperReady, setSwiperReady] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  const popularLocations = Locations.trip_collection.trips.filter(
    (loc) => loc.category === "Weekend Trips"
  );

  return (
    <div className="w-full md:pl-0 pl-3 mt-8 font-parkinsans relative">
      {/* HEADER */}
      <div className="flex items-center mb-8 gap-2">
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/emoji/48/snow-capped-mountain.png"
          alt="snow-capped-mountain"
        />
        <h1 className="text-3xl font-bold text-gray-800">
          Weekend Trips
        </h1>
      </div>

      {/* ⭐ HOVER WRAPPER */}
      <div className="relative w-full group">

        {/* LEFT NAV BUTTON */}
        {!isBeginning && (
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="
            absolute left-2 top-1/2 -translate-y-1/2 z-20
            opacity-0 group-hover:opacity-100
            transition-all duration-300
            w-10 h-10 rounded-full
            bg-white shadow-xl border border-gray-600
            flex items-center justify-center
            hover:scale-110 cursor-pointer
          "
          >
            <ArrowLeft strokeWidth={3} size={24} />
          </button>
        )}

        {/* RIGHT NAV BUTTON */}
        {!isEnd && (
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="
            absolute right-2 top-1/2 -translate-y-1/2 z-20
            opacity-0 group-hover:opacity-100
            transition-all duration-300
            w-10 h-10 rounded-full
            bg-white shadow-xl border border-gray-600
            flex items-center justify-center
            hover:scale-110 cursor-pointer
          "
          >
            <ArrowRight strokeWidth={3} size={24} />
          </button>
        )}

        {/* SWIPER */}
        {swiperReady && (
          <Swiper
            modules={[Navigation, FreeMode, Keyboard, Mousewheel]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            spaceBetween={16}
            speed={600}
            grabCursor
            freeMode
            freeModeMomentum
            watchSlidesProgress
            keyboard={{ enabled: true, onlyInViewport: true }}
            mousewheel={{ forceToAxis: true }}
            breakpoints={{
              0: { slidesPerView: 1.3 },
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            style={{ paddingBottom: "1.5rem" }} // optional, space for nav arrows if used later
          >
            {popularLocations.map((location) => (
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
        )}
      </div>
    </div>
  );
};

export default WeekendTrips;
