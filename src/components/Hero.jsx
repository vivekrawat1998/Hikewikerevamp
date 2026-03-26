import React from "react";
import RotatingText from "../ui/Rotatingtext";

const Hero = () => {
  return (
    <div className="relative w-full grid place-items-center h-screen -top-5 text-white overflow-hidden">
      
      {/* Background Video */}
      <video
        style={{ objectPosition: "top" }}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/dpaxvc4xw/video/upload/v1753010320/19068486-uhd_3840_2160_25fps_iqmc0o.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/20" />

      {/* Content */}
      <div className="absolute z-20 flex flex-col mt-20 items-center justify-center h-full w-full text-center px-4">
        
        <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-main font-bold mb-4 drop-shadow-lg">
          Where Every Journey Begins with
        </h1>

        <RotatingText
          texts={[
            `"People"`,
            `"Conversations"`,
            `"Clarity"`,
            `"Perspective"`,
            `"Connection"`,
            `"You"`,
          ]}
          mainClassName="px-2 text-3xl sm:text-4xl -mt-3 text-white lg:text-[48px] font-bold font-main overflow-hidden py-1 justify-center rounded-3xl"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={3000}
        />

        <p className="text-[21px] font-second mt-6 max-w-2xl">
          Curated people × Meaningful conversations × Real Change
        </p>

        <button className="mt-8 px-10 font-second cursor-pointer py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg">
          Reserve your spot
        </button>

        <p className="text-[20px] font-second font-medium mt-4">
          Limited seats for each gathering
        </p>
      </div>

      {/* ✅ Animated Scroll Mouse */}
      <div
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          })
        }
        className="absolute bottom-8 z-30 flex flex-col items-center cursor-pointer"
      >
        {/* Mouse Body */}
        <div
          style={{
            width: "26px",
            height: "42px",
            border: "2px solid white",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          {/* Animated Dot */}
          <div
            style={{
              width: "4px",
              height: "8px",
              backgroundColor: "white",
              borderRadius: "10px",
              animation: "scrollAnim 1.5s infinite",
            }}
          />
        </div>
      </div>

      {/* ✅ Inline Keyframes */}
      <style>
        {`
          @keyframes scrollAnim {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(8px);
              opacity: 0.6;
            }
            100% {
              transform: translateY(16px);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;