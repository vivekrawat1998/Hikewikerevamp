import React from "react";

const programData = [
    {
        day: "01",
        title: "Arrive. Exhale. Begin.",
        desc: "Settle into the villa. Take in the view. Evening: 'life in 5 chapters' — every person tells their story in 5 minutes. No job titles allowed.",
        tag: "ARRIVALS",
    },
    {
        day: "02",
        title: "What are you actually building?",
        desc: "Morning session: open floor, honest answers. Afternoon free in Landour lanes. Fireside evening: what would you do if you knew it would work?",
        tag: "DEEP WORK",
    },
    {
        day: "03",
        title: "Sunrise. Summit. Silence.",
        desc: "Pre-dawn start. Guided trek to Lal Tibba — Himalayan sunrise at 7,000 feet. No agenda, no talking required. Afternoon slow day.",
        tag: "ADVENTURE",
    },
    {
        day: "04",
        title: "Your next 90 days.",
        desc: "Each person shares their biggest priority. 10 minutes of honest feedback. You leave with a written plan and accountability group.",
        tag: "ACCOUNTABILITY",
    },
    {
        day: "05",
        title: "The closing dinner.",
        desc: "Market walk. Reflection time. Final communal dinner at the villa. We write one thing to each person in the room.",
        tag: "CELEBRATION",
    },
    {
        day: "06",
        title: "Go change something.",
        desc: "Slow morning. Late checkout. Numbers exchanged. You leave the same person — but somehow not.",
        tag: "DEPARTURE",
    },
];

const ProgramSection = () => {
    return (
        <section className="bg-white w-full  py-20 font-second ">
            <div className="max-w-7xl mx-auto md:px-0  px-3 text-center">

                {/* Heading */}
                <p className="text-xs tracking-[0.2em] text-black mb-3">
                    THE PROGRAM
                </p>

                <h2 className="font-main text-3xl md:text-[44px] text-black font-extrabold leading-tight">
                    5 days.
                    <span className="block italic font-normal">
                        Loosely held, deeply felt.
                    </span>
                </h2>

                <p className="text-black text-sm md:text-base max-w-lg mx-auto mt-3 mb-12">
                    Every day is designed — not scripted. The best conversations always
                    happen between the planned ones.
                </p>

                {/* Program Rows */}
                <div className="space-y-5">

                    {programData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg px-5 py-4 hover:bg-gray-50 transition"
                        >

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                                {/* Left Content */}
                                <div className="flex items-start gap-4 text-left">

                                    {/* Day */}
                                    <span className="text-gray-700 font-main text-lg min-w-[20px]">
                                        {item.day}
                                    </span>

                                    {/* Text */}
                                    <div>
                                        <p className="font-main text-black text-sm md:text-[16px]">
                                            {item.title}
                                        </p>

                                        <p className="text-xs md:text-sm text-black mt-1 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Tag */}
                                <div className="flex md:justify-end">
                                    <span className="text-[10px] border border-gray-300 px-3 py-1 tracking-wider whitespace-nowrap">
                                        {item.tag}
                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ProgramSection;