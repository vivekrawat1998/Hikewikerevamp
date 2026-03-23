import React from "react";

import Locations from "../components/utils/Locationss.json";
import LocationCard from "../components/popularlocation/Locationcards";
import Hero from "../components/Hero";

const CorporateTripsPage = () => {
    const popularLocations = Locations.trip_collection.trips.filter(
        (loc) => loc.category === "Corporate Trips"
    );

    return (
        <section>
            <Hero />
            <div className="w-full container mx-auto md:pl-0 pl-3 mt-10 font-parkinsans relative">

                <div className="flex items-center mb-8 gap-2">
                    <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/emoji/48/office-building.png"
                        alt="office-building"
                    />
                    <h1 className="text-2xl sm:text-3xl font-bold text-left text-gray-800">
                        Explore All Corporate Trips
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {popularLocations.map((location) => (
                        <LocationCard
                            key={location.id}
                            id={location.id}
                            images={location.images || []}
                            name={location.name}
                            date={location.date}
                            durationdaynight={location.duration_day_night}
                            description={location.itinerary?.[0]?.activities?.[0] || ""}
                            duration={`${location.duration_days} Days`}
                            cost={location.estimated_cost}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorporateTripsPage;
