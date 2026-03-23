import React from "react";

const hikeWike = [
    "12 people, curated — you apply, we approve",
    "One private villa. Everyone under one roof",
    "Program built around real conversations",
    "You leave with a 90-day plan",
    "A community that lasts years",
    "Same energy — founders, creators, builders",
    "Built by locals — we know these hills",
];

const others = [
    "Anyone can book — no curation",
    "Hotels or hostels — separate rooms",
    "Fixed itinerary, checklist of sights",
    "You come back with content, not clarity",
    "WhatsApp group goes silent in weeks",
    "Mixed vibes, no common intent",
    "Outsourced operators",
];

const ComparisonSection = () => {
    return (
        <section className="bg-white w-full font-second py-20">
            <div className="max-w-7xl mx-auto px-3">

                {/* Center Heading */}
                <div className="mb-16 text-center flex flex-col items-center">
                    <p className="text-xs tracking-[0.2em] text-black mb-4">
                        WHY HIKEWIKE
                    </p>

                    <h2 className="font-main text-3xl md:text-[52px] font-extrabold leading-tight">
                        <span className="inline-block">
                            <span className="text-[#F36F25]">Hike</span>
                            <span className="text-sec">Wike</span>
                        </span>{" "}
                        versus
                        <span className="block italic font-normal text-black">
                            everything else.
                        </span>
                    </h2>
                </div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 border border-gray-200 rounded-xl overflow-hidden">

                    {/* HIKEWIKE */}
                    <div className="p-8 md:p-10 border-b bg-prime md:border-b-0 md:border-r border-gray-200">

                        <h3 className="text-xs   tracking-[0.2em] text-white mb-6">
                            HIKEWIKE
                        </h3>

                        <ul className="space-y-4">
                            {hikeWike.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm md:text-base text-white">
                                    <span className="text-white mt-1 font-bold">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* OTHERS */}
                    <div className="p-8 md:p-10 bg-gray-50">

                        <h3 className="text-xs tracking-[0.2em] text-black mb-6">
                            STANDARD GROUP TRIPS
                        </h3>

                        <ul className="space-y-4">
                            {others.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm md:text-base text-black">
                                    <span className="mt-1">—</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;