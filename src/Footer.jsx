import React from "react";
import { FaFacebook } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b relative font-parkinsans   w-full  h-[60vh] md:h-[86vh]  from-[#F36F25]/10 to-[#FFFFFF] pt-5 mt-10 pb-5">
      {/* Main tagline */}
      <div className=" w-full grid place-items-center  pt-10 ">
        <div className="text-start">
          <h2 className="md:text-[76px] text-3xl font-bold font-parkinsans text-[#111132] md:leading-20 mb-3">
            Let’s explore the
            <br />
            <span className="ml-[12vw]">world together</span>
            <span
              role="img"
              aria-label="globe"
              className="inline-block ml-2 align-middle"
            >
              🌍
            </span>
          </h2>
          <div className="mt-10 flex flex-col items-center">
            <span className="text-black  font-semibold text-[18px] mb-3">
              Or follow us here:
            </span>
            {/* Glassy icon bar */}
            <div
              className="
            flex flex-row items-center justify-center gap-3
            max-w-[220px] mx-auto
          "
            >
              {/* Replace these with real icons/links */}
              <span className="w-14 h-14 rounded-full cursor-pointer flex items-center justify-center transition-transform duration-500 hover:-translate-y-2">
                <SocialIcon url="https://www.facebook.com/profile.php?id=61578734042951" />
              </span>
              <span  className="w-14 h-14 rounded-full cursor-pointer flex items-center justify-center transition-transform duration-500 hover:-translate-y-2">
                <SocialIcon url="https://www.instagram.com/hike.wike?igsh=MXIwOXVmZHd5dWJ5Nw==" />
              </span>
              <span className="w-14 h-14 rounded-full cursor-pointer flex items-center justify-center transition-transform duration-500 hover:-translate-y-2">
                <SocialIcon url="https://www.linkedin.com/company/hikewike" />
              </span>
              <span className="w-14 h-14 rounded-full cursor-pointer flex items-center justify-center transition-transform duration-500 hover:-translate-y-2">
                <SocialIcon url="https://youtube.com/" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Bold brand name */}
      <div className="absolute bottom-5  left-0 w-full px-6 sm:px-10">
        <img
          className="w-full  h-auto object-cover mx-auto"
          src="/hikewikefooter.svg"
          alt="Hikewike Footer"
        />
      </div>
    </footer>
  );
}
