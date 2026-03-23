import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Skeleton image loader component
const ImageWithSkeleton = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-2xl z-10" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`w-full h-full rounded-2xl object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

const LocationCard = ({
  id,
  images = [],
  name,
  description,
  duration,
  durationdaynight,
  date,
  cost,
}) => {
  const navigate = useNavigate();
  const numericCost =
    typeof cost === "number"
      ? cost
      : parseInt((cost || "0").replace(/[^\d]/g, ""), 10) || 0;
  const discountedCost = Math.max(numericCost - 2000, 0);

  // Pick only first image
  const firstImage = images.length > 0 ? images[0] : null;

  return (
    <div
      onClick={() => navigate(`/location/${id}`)}
      className="cursor-pointer rounded-2xl overflow-hidden font-parkinsans w-full max-w-xs mx-auto transition hover:shadow-lg"
    >
      {/* Single Image */}
      <div className="relative w-full h-48 sm:h-56">
        {firstImage ? (
          <ImageWithSkeleton src={firstImage} alt={`${name} 1`} />
        ) : (
          <div className="animate-pulse bg-gray-300 rounded-2xl w-full h-full" />
        )}
      </div>

      {/* Text Content */}
      <div className="p-3">
        {/* <h4 className="text-[14px] text-[#5A5A5A]">{durationdaynight}</h4> */}
        <h3 className="text-[16px] font-bold text-[#1F1F1F] line-clamp-1">
          {duration} to {name}
        </h3>
        <p className="text-[16px] mt-1 font-regular">
          <span className="text-[#09090B] font-semibold">
            ₹{discountedCost.toLocaleString("en-IN")}
          </span>
          <span className="text-[#09090B] ml-2 line-through decoration-[#F61B00]">
            ₹{numericCost.toLocaleString("en-IN")}
          </span>
          <span className="ml-0 text-[#F61B00] text-xs px-2 py-0.5 rounded-full font-medium align-middle">
            ₹2,000 OFF
          </span>
        </p>
        {/* <span className="flex items-center gap-2 mt-2">
          <h2 className="text-gray-500 text-[14px] font-medium">📆 {date}</h2>
        </span> */}
      </div>
    </div>
  );
};

export default LocationCard;
