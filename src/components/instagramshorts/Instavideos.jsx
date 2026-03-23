import React, { useRef, useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

/* 🔥 Videos */
const VIDEO_FILES = [
  "https://res.cloudinary.com/dtlbe7orb/video/upload/v1753340811/y2mate.gg_-_Escape_to_Rooftop_Cottages_just_40_minutes_from_Nainital_w_HD_video_z8fnir.mp4",
  "https://res.cloudinary.com/dtlbe7orb/video/upload/v1753340827/y2mate.gg_-_The_place_%EF%B8%8F_._._.._trending_newreel_explo_HD_video_iazfe4.mp4",
  "https://res.cloudinary.com/dtlbe7orb/video/upload/v1753340820/y2mate.gg_-_The_end_goal_is_to_be_located_at_places_like_these_and_not_w_HD_video_axfbwz.mp4",
  "https://res.cloudinary.com/dtlbe7orb/video/upload/v1753340806/dl_wac1eb.mp4",
  "https://res.cloudinary.com/dtlbe7orb/video/upload/v1753341664/y2mate.gg_-_One_of_the_best_Tendom_bungee_jump_Contact_us_for_booking_HD_video_crjb7u.mp4",
];

const VideoCard = ({ src }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => { });
        else video.pause();
      },
      { threshold: 0.7 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    setMuted((prev) => !prev);
    if (videoRef.current) videoRef.current.muted = !muted;
  };

  return (
    <div
      className="
      snap-start shrink-0
      min-w-[220px] w-[220px] sm:w-[260px] md:w-[300px]
      aspect-[9/16] rounded-xl overflow-hidden
      shadow-lg bg-black relative
      transition-transform duration-300
      hover:scale-[1.03]
      "
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="metadata"
      />

      {/* LOGO */}
      <div className="absolute top-3 right-3">
        <img
          src="/Group 427320963.svg"
          alt="logo"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* SOUND BUTTON */}
      <button
        onClick={toggleSound}
        className="absolute bottom-3 right-3 px-2 py-2 rounded-full bg-black/70 text-white"
      >
        {muted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
};

const Instavideos = ({ files = VIDEO_FILES }) => {
  return (
    <section className="py-10 container mx-auto bg-white relative overflow-hidden">
      <h2 className="md:text-[30px] text-xl font-bold font-parkinsans text-center mb-6">
        Hike with us ❤️
      </h2>
      <div
        className="
        flex overflow-x-auto overflow-y-hidden
        scrollbar-hide
        gap-4 px-4
        snap-x snap-mandatory
        scroll-smooth
        cursor-grab active:cursor-grabbing
        select-none
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {files.map((url, idx) => (
          <VideoCard src={url} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Instavideos;
