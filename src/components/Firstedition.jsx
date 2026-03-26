import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const EditionSection = () => {
  return (
    <section className="bg-[#06062B] w-full py-20 px-4 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center text-white mb-16">
          <p className="text-xs tracking-widest mb-4">NOW OPEN</p>

          <h2 className="text-4xl md:text-[48px] font-bold font-Regular mb-4">
            The Hill Edition.
          </h2>

          <p className="text-white max-w-3xl mx-auto text-sm md:text-[20px]">
            Every HikeWike edition has a character. Edition 01 is about altitude —
            the kind outside your window, and the kind inside your head.
          </p>
        </div>

        {/* Card */}
        <div className="grid md:grid-cols-2 bg-white overflow-hidden shadow-lg">

          {/* LEFT CONTENT */}
          <div className="p-8 md:p-10 text-black">
            <h3 className="text-[18px] md:text-[22px] font-main  font-Regular mb-4">
              Mussoorie, Uttarakhand
            </h3>

            <p className="md:text-[16px]  text-[12px] text-[#000000] mb-6 ">
              A private estate in the Landour–Mussoorie belt. Himalayan ridgelines
              at breakfast. Pine forests and cold morning air. A place that strips
              back the noise so you can hear yourself think — and actually hear
              the 11 people in the room with you.
            </p>

            {/* Info */}
            <div className="grid grid-cols-2 gap-6 text-[14px] mb-6">
              <div>
                <p className="text-black text-[14px]">LOCATION</p>
                <p className="font-medium text-black">Landour, Mussoorie</p>
              </div>

              <div>
                <p className="text-black text-xs">DATE</p>
                <p className="font-medium text-black">17 April, 24 April, 1 May</p>
              </div>

              <div>
                <p className="text-black text-xs">TRAVEL FROM</p>
                <p className="font-medium text-black">Delhi to Delhi</p>
              </div>

              <div>
                <p className="text-black text-xs">DURATION</p>
                <p className="font-medium text-black">2 Nights 3 Days</p>
              </div>
            </div>

            {/* Price */}
            <h4 className="text-2xl font-bold mb-2">₹9,999</h4>
            <p className="text-xs text-black mb-6">
              per person · all-inclusive · lock seat with 20% deposit
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="border border-gray-300 px-5 py-2 text-[16px] rounded hover:bg-gray-100">
                View itinerary
              </button>

              <button className="bg-[#F36F25] text-white px-5 py-2 text-[16px] rounded hover:bg-orange-600">
                Book your seat
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
            <div className="h-[300px] md:h-auto">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="w-full h-full"
              >
                <SwiperSlide>
                  <img
                    src="/concept/kumud-mussoorie-villa-3-bhk-9348a7.jpg"
                    alt="Mussoorie 1"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <img
                    src="/concept/kumud-mussoorie-villa-3-bhk-9348a7.jpg"
                    alt="Mussoorie 2"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <img
                    src="/concept/kumud-mussoorie-villa-3-bhk-9348a7.jpg"
                    alt="Mussoorie 3"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

      </div>
    </section>
  );
};

export default EditionSection;