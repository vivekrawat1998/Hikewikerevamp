import React from "react";

const features = [
    {
        title: "One Private Villa · Twin Share",
        desc: "A single rented estate. Everyone under one roof. The shared space is where real conversations happen.",
    },
    {
        title: "All Breakfasts + 2 Communal Dinners",
        desc: "Daily breakfasts, chai on demand, and two dinners cooked at the villa. Lunches are free to explore.",
    },
    {
        title: "Guided Sunrise Trek",
        desc: "Pre-dawn guided hike. No fitness required. Just willingness to start early and sit with silence.",
    },
    {
        title: "4 Facilitated Sessions",
        desc: "Structured conversations — not workshops. Designed to draw out clarity, not manufacture it.",
    },
    {
        title: "Your 90-Day Plan · Printed",
        desc: "Leave Day 4 with a printed sheet. One goal. Three steps. People who hold you accountable.",
    },
    {
        title: "HikeWike Community · Lifetime",
        desc: "Future editions, private community, city meetups. Some friendships last for years.",
    },
];

const WhatYouGet = () => {
    return (
        <section className="bg-white  w-full font-second py-20">
            <div className="max-w-7xl mx-auto px-3">

                <div className="mb-16 text-center flex flex-col items-center">

                    <p className="text-xs tracking-[0.2em] text-black mb-4">
                        WHAT YOU GET
                    </p>

                    <h2 className="font-main text-3xl md:text-[52px] text-black font-extrabold leading-tight">
                        Everything that matters.
                        <br />
                            Nothing that doesn’t.
                    </h2>

                </div>
                {/* Grid */}

                <div className="grid md:grid-cols-2 border border-gray-200 rounded-xl overflow-hidden">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className={`p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200 transition
        ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
        hover:bg-gray-100`}
                        >
                            <div className="flex items-start gap-4">

                                {/* Dash Icon */}
                                <span className="text-gray-400 text-xl mt-1">—</span>

                                {/* Content */}
                                <div>
                                    <h3 className="font-bold text-black text-[16px] md:text-[18px] mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-black text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Not Included */}
                <div className="border border-gray-200 mt-6 px-6 py-4 text-xs text-gray-500 flex flex-wrap gap-4 justify-center md:justify-start">
                    <span className="tracking-wider font-bold text-black">NOT INCLUDED</span>
                    <span>Travel to Dehradun</span>
                    <span>Lunches</span>
                    <span>Personal expenses</span>
                    <span>Single room upgrade</span>
                </div>

            </div>
        </section>
    );
};

export default WhatYouGet;